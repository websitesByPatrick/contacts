import React from "react";
import { Button } from "@/components/Button";

import Form from "next/form";
import { createContact } from "@/lib/serverActions";

const AddContact = () => {
  console.log("AddContact");
  return (
    <div className="flex flex-col gap-6 items-center text-3xl mt-5">
      <h2>Add Contact</h2>
      <Form
        action={createContact}
        className="flex flex-col items-center gap-6 bg-gray-900 p-10 rounded-3xl"
      >
        <label className="text-xl flex gap-2">
          <span className="w-36 text-right">First Name</span>
          <input
            className="text-gray-900"
            type="text"
            placeholder="First Name"
            name="fname"
          />
        </label>
        <label className="text-xl flex gap-2">
          <span className="w-36 text-right">Last Name</span>
          <input
            className="text-gray-900"
            type="text"
            placeholder="Last Name"
            name="lname"
          />
        </label>
        <label className="text-xl flex gap-2">
          <span className="w-36 text-right">Email</span>
          <input
            className="text-gray-900"
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className="text-xl flex gap-2">
          <span className="w-36 text-right">Phone</span>
          <input
            className="text-gray-900"
            type="text"
            placeholder="Phone"
            name="phone"
          />
        </label>
        <button
          type="submit"
          className="w-32 h-10 bg-slate-100 rounded-lg text-center hover:bg-slate-900 hover:border border-slate-50 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </Form>

      <Button href="/" text="Go Home" />
    </div>
  );
};

export default AddContact;
