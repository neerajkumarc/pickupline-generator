
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { OAuthButtons } from "./oauth-signin";
import Link from "next/link";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/generate-pickupline");
  }

  return (
    <section className=" h-screen bg-white w-screen flex flex-col justify-evenly items-center" style={{ fontFamily: "sans-serif" }}>
      <div className="max-w-lg flex flex-col gap-4 justify-center items-center mt-8">
        <Link href={"/"} className="w-12 h-12 rounded-lg bg-[#FF2157] flex items-center justify-center">🤍</Link>
        <p className="font-bold">Pickup Line Generator</p>
        <p className="text-zinc-500">Generate pickup line for your crush now!</p>
        <OAuthButtons />
      </div>
      <p className="text-zinc-500 text-sm p-6 text-center
      ">By signing up, you agree to the <Link href={"/"} className="underline">Terms of Use,</Link> <Link href={"/"} className="underline">Privacy Notice</Link></p>
    </section>
  );
}
