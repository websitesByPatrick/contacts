"use client";

import React from "react";
import Form from "next/form";

import { updateContact, deleteContact } from "@/lib/serverActions";

interface UpdateFormProps {

  id: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}


export default function UpdateForm({data: data}: {data: UpdateFormProps | null}) {
  if (!data) {
    return <div>No data available</div>;
  }

  const updateContactWithID = updateContact.bind(null, data.id);
  const deleteContactWithID = deleteContact.bind(null, data.id);

  return (
    <Form action={updateContactWithID}>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">First Name</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="First Name"
          name="fname"
          defaultValue={data.fname}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Last Name</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="Last Name"
          name="lname"
          defaultValue={data.lname}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Email</span>
        <input
          className="text-gray-900"
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={data.email}
        />
      </label>
      <label className="text-xl flex gap-2">
        <span className="w-36 text-right">Phone</span>
        <input
          className="text-gray-900"
          type="text"
          placeholder="Phone"
          name="phone"
          defaultValue={data.phone}
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
        onClick={deleteContactWithID}
        className="w-32 h-10 bg-zinc-600 border rounded-lg text-center hover:bg-zinc-900 hover:border border-slate-50 transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </Form>
  );
}
