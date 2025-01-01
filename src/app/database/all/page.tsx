
import { ViewContacts } from "@/components/ViewContacts";
import prisma from "@/lib/db";
import React from "react";

const page = async () => {
  const contacts = (await prisma.contact.findMany()).map((contact) => ({
    ...contact,
  }));

  return (
    <div className="flex flex-col items-center py-2 gap-4">
      <h1 className="text-3xl p-6">All Contacts</h1>
      <ViewContacts data={contacts} />

      
    </div>
  );
};

export default page;
