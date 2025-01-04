"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/dbConnect";

export async function deleteContact(id: string) {
  await prisma.contact.delete({
    where: { id: id },
  });
  revalidatePath("/contacts/all");
  redirect("/contacts/all");
}
