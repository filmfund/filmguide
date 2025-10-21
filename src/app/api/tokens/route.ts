import filmTokens from "./filmTokens.json"

export async function GET() {
  return new Response(JSON.stringify(filmTokens), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
