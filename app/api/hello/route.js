export async function GET(request) {
  const data = { message: 'Hello from the server!' };
  return Response.json(data);
}