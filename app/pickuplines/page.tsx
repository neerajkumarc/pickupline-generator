import Header from "@/components/header";
import PickupLineList from "@/components/PickupLineList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Pickupline() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: pickuplines, error } = await supabase
    .from("pickupline")
    .select()
    .order("inserted_at", { ascending: false });

  if (error) {
    console.error("Error fetching pickup lines:", error);
    return <div>Error loading pickup lines</div>;
  }

  return (
    <div className="flex mx-auto flex-col justify-center min-h-screen bg-white/90 min-w-[100dvw] py-2">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 pb-12 mt-8 gap-8">
      <PickupLineList pickuplines={pickuplines || []} />
    </main>
    </div>
  );
}