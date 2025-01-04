"use server";

import { prisma } from "@/lib/dbConnect"

export async function getAllContacts() {
  return await prisma.contact.findMany()
    

}