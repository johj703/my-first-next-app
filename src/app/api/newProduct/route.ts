export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
