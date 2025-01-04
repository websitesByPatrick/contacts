"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/dbConnect"

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
  