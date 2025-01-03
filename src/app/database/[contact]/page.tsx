"use server";
import React from "react";
import { getContact } from "@/lib/serverActions";
import UpdateForm from "@/components/UpdateForm";

interface Params {
  contact: string;
}

const EditPage = async ({ params }: { params: Params }) => {

  const contact = await getContact(params.contact);

  
  return (
    <>
      <h2>Update Contact</h2>

      {contact ? (
        <UpdateForm contactData={contact} />
      ) : (
        <p>Contact not found</p>
      )}
    </>
  );
};

export default EditPage;
