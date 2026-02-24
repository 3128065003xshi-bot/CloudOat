// src/config/env.ts
const isLocal = import.meta.env.VITE_IS_LOCAL === 'true';

export const config = {
  isLocal,
  awsRegion: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  // Change localhost:5173 to localhost:3000
  apiUrl: isLocal ? 'http://localhost:3000' : 'https://4i4y8uoi4j.execute-api.us-east-1.amazonaws.com/prod',
};