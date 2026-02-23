// src/lib/dynamoClient.ts
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { config } from '../config/env';
import { unmarshall} from "@aws-sdk/util-dynamodb";

export const dynamoClient = new DynamoDBClient({
  region: config.awsRegion,
  endpoint: config.isLocal ? config.dynamodbEndpoint : undefined,
  credentials: config.isLocal 
    ? { accessKeyId: "dummy", secretAccessKey: "dummy" }
    : undefined, // real AWS uses IAM role or env credentials
});

export async function getClientProfile(email: string) {
  const params = {
    TableName: "cloudOat_client",
    Key: {
      PK: { S: `CLIENT#${email}` },
      SK: { S: "PROFILE" },
    },
  };

  try {
    const result = await dynamoClient.send(new GetItemCommand(params));
    
    if (!result.Item) return null;

    // unmarshall turns { name: { S: "Maria" }, tokens: { N: "5000" } } 
    // into { name: "Maria", tokens: 5000 } automatically.
    return unmarshall(result.Item);
    
  } catch (err) {
    console.error("DynamoDB error:", err);
    return null;
  }
}


