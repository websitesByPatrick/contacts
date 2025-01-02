"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";

export async function createContact(formdata: FormData) {
  await prisma.contact.create({
    data: {
      fname: formdata.get("fname") as string,
      lname: formdata.get("lname") as string,
      email: formdata.get("email") as string,
      phone: formdata.get("phone") as string,
    },
  });
  revalidatePath("/database/all");
  redirect("/database/all");
}

export async function updateContact(id: string, formdata: FormData) {
  await prisma.contact.update({
    where: {
      id: id,
    },

    data: {
      fname: formdata.get("fname") as string,
      lname: formdata.get("lname") as string,
      email: formdata.get("email") as string,
      phone: formdata.get("phone") as string,
    },
  });
  revalidatePath("/database/all");
  redirect("/database/all");
}

export async function deleteContact(id: string) {
  await prisma.contact.delete({
    where: { id: id },
  });
  revalidatePath("/database/all");
  redirect("/database/all");
}

export async function getContact(id: string) {
  return await prisma.contact.findUnique({
    where: { id },
  });
}
