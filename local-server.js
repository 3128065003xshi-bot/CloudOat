import express from 'express';
import cors from 'cors';
import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const app = express();
app.use(cors());
app.use(express.json());

const dynamoClient = new DynamoDBClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
  credentials: { accessKeyId: 'dummy', secretAccessKey: 'dummy' }
});

const TABLE_NAME = "cloudOat_client";

// --- NEW/FIXED LOGIN ROUTE ---
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`🔑 Login attempt: ${email}`);

  try {
    const result = await dynamoClient.send(new GetItemCommand({
      TableName: TABLE_NAME,
      Key: marshall({ PK: `CLIENT#${email}`, SK: "PROFILE" }),
    }));

    if (!result.Item) return res.status(404).json({ error: 'User not found' });
    
    const user = unmarshall(result.Item);
    // In a real app, use bcrypt! For local dev, we check plain text.
    if (user.password !== password) return res.status(401).json({ error: 'Invalid password' });

    console.log("✅ Login successful");
    const { password: _, PK, SK, ...safeUser } = user;
    res.json({ success: true, user: safeUser });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// --- PROFILE ROUTE WITH PLAN JOIN ---
app.get('/profile', async (req, res) => {
  const email = req.query.email;
  console.log(`📡 Fetching profile: ${email}`);

  try {
    const clientRes = await dynamoClient.send(new GetItemCommand({
      TableName: TABLE_NAME,
      Key: marshall({ PK: `CLIENT#${email}`, SK: "PROFILE" }),
    }));

    if (!clientRes.Item) return res.status(404).json({ error: 'User not found' });
    const user = unmarshall(clientRes.Item);

    // Join Plan Data
    const planId = (user.planType || 'starter').toLowerCase();
    const planRes = await dynamoClient.send(new GetItemCommand({
      TableName: TABLE_NAME,
      Key: marshall({ PK: `PLAN#${planId}`, SK: "METADATA" }),
    }));

    const planDetails = planRes.Item ? unmarshall(planRes.Item) : null;
    const { password, PK, SK, ...safeUser } = user;

    res.json({ success: true, user: { ...safeUser, planDetails } });
  } catch (err) {
    console.error("❌ Profile Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('🚀 Backend running on http://localhost:3000');
});