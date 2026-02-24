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

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const params = {
      TableName: "cloudOat_client",
      Key: marshall({ PK: `CLIENT#${email}`, SK: "PROFILE" }),
    };
    const result = await dynamoClient.send(new GetItemCommand(params));
    if (!result.Item) return res.status(404).json({ error: 'User not found' });
    
    const userProfile = unmarshall(result.Item);
    if (userProfile.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
    
    const { password: dbPassword, PK, SK, ...safeUserProfile } = userProfile;
    res.json({ success: true, user: safeUserProfile });
  } catch (error) {
    console.error("DynamoDB Error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile', async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  try {
    const params = {
      TableName: "cloudOat_client",
      Key: marshall({ PK: `CLIENT#${email}`, SK: "PROFILE" }),
    };
    const result = await dynamoClient.send(new GetItemCommand(params));
    if (!result.Item) return res.status(404).json({ error: 'User not found' });
    
    const userProfile = unmarshall(result.Item);
    const { password, PK, SK, ...safeUserProfile } = userProfile;
    res.json({ success: true, user: safeUserProfile });
  } catch (error) {
    console.error("DynamoDB Error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('✅ Local backend running on http://localhost:3000');
});