import { supabase } from "@/lib/supabse";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email } = body;

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return Response.json(
      { success: true },
      { status: 200 }
    );

  } catch (err) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}