"use client";

import React from "react";
import Form from "next/form";
import { updateContact, deleteContact } from "@/lib/serverActions";

interface ContactFormData {
 
    id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;

  
}

const UpdateForm: React.FC<{ contactData: ContactFormData }> = ({ contactData }) => {
  
  const updateContactWithID = updateContact.bind(null, contactData.id);

  const deleteContactWithID = deleteContact.bind(null, contactData.id);

  return (
    <Form action={updateContactWithID}>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">First Name</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="First Name"
          name="fname"
          defaultValue={contactData.fname}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Last Name</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="Last Name"
          name="lname"
          defaultValue={contactData.lname}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Email</span>
        <input
          className="text-gray-900"
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={contactData.email}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Phone</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="Phone"
          name="phone"
          defaultValue={contactData.phone}
        />
      </label>
      <button
        type="submit"
        className="w-32 h-10 bg-zinc-600 border rounded-lg text-center hover:bg-zinc-900 hover:border border-slate-50 transition duration-300 ease-in-out"
      >
        Update
      </button>

      <button
        type="button"
        onClick = {deleteContactWithID}
        className="w-32 h-10 bg-zinc-600 border rounded-lg text-center hover:bg-zinc-900 hover:border border-slate-50 transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </Form>
  );
};

export default UpdateForm;
