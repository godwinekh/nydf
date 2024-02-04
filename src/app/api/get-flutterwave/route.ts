
export async function GET(req: Request) {
  try {
    if (req.method !== "GET") {
      throw new Error("Method not allowed");
    }

    const secretKey = process.env.FLUTTERWAVE_API_KEY;

    if (!secretKey) {
      throw new Error("Secret key not found");
    }

    return Response.json({ secretKey });
  } catch (error) {
    console.error("Error in API route:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
