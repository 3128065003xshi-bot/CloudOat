// src/config/env.ts
const isLocal = import.meta.env.VITE_IS_LOCAL === 'true';

export const config = {
  isLocal,
  awsRegion: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  dynamodbEndpoint: isLocal ? import.meta.env.VITE_DYNAMODB_ENDPOINT : undefined,
  // Add your real API Gateway URL later (for production)
  apiUrl: isLocal ? 'http://localhost:5173' : 'https://4i4y8uoi4j.execute-api.us-east-1.amazonaws.com/prod',
};