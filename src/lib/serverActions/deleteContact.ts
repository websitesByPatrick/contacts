"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/dbConnect";

export default async function deleteContact(id: string) {
  console.log("Before Delete", id);
  await prisma.contact.delete({
    where: { id },
  });
  console.log("After Delete", id);
  revalidatePath("/contacts/all");
  redirect("/contacts/all");
}
