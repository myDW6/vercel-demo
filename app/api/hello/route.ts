export async function GET() {
  return Response.json({
    message: 'Hello from Vercel Serverless Function',
    time: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
}