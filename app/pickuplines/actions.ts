"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addPickupLine(pickupline: string) {
  const supabase = createClient();
  const text = pickupline as string | null;

  if (!text) {
    throw new Error("Text is required");
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("pickupline").insert({
    pickupline: text,
    user_id: user.id,
  });

  if (error) {
    throw new Error("Error adding pickup line");
  }

  revalidatePath("/pickupline");
}

export async function deletePickupLine(id: number) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase
    .from("pickupline")
    .delete()
    .match({ user_id: user.id, id: id });

  if (error) {
    throw new Error("Error deleting pickup line");
  }

  revalidatePath("/pickupline");
}