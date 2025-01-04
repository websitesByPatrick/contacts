"use server";

import { prisma } from "@/lib/dbConnect"

export async function readContact(id: string) {
  return await prisma.contact.findUnique({
    where: { id },
  });
}
