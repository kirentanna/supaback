import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");

  // if "next" is in param, use it in the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createSupabaseServerClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    } else {
      // Redirect to the error page with the error message as a query parameter
      return NextResponse.redirect(`${origin}/auth/auth-error?error=${encodeURIComponent(error.message)}`);
    }
  }

  // Redirect to the error page without a specific error message
  return NextResponse.redirect(`${origin}/auth/auth-error`);
}
