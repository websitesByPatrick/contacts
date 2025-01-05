"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createContact(formdata: FormData) {
  await prisma.contact.create({
    data: {
      fname: formdata.get("fname") as string,
      lname: formdata.get("lname") as string,
      email: formdata.get("email") as string,
      phone: formdata.get("phone") as string,
    },
  });
  revalidatePath("/contacts/all");
  redirect("/contacts/all");
}

export async function readContact(id: string) {
  return await prisma.contact.findUnique({
    where: { id },
  });
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
  revalidatePath("/contacts/all");
  redirect("/contacts/all");
}

export async function deleteContact(formData: FormData) {
  const id = formData.get('id') as string
    console.log("Before Delete", id);
    await prisma.contact.delete({
      where: { id },
    });
    console.log("After Delete", id);
    revalidatePath("/contacts/all");
    redirect("/contacts/all");
  }

  export async function getAllContacts() {
    return await prisma.contact.findMany();
  }
  
