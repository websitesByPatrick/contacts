'use client';
import React from "react";


import { redirect } from "next/navigation";
interface Props {
  data: Array<{
    id: string;
    lname: string;
    fname: string;
    email: string;
    phone: string;
  }>;
}

export const ViewContacts = (props: Props) => {
  return (
    <table className="w-[960px] border ">
      <thead>
        <tr className="border-zinc-700 bg-zinc-900 border text-2xl h-12 ">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((contact) => (
          <tr
          onClick={() => redirect('/database/edit')}
            key={contact.id}
            className="text-center border border-zinc-700 text-lg even:bg-zinc-800 odd:bg-zinc-700 h-9 hover:bg-zinc-200 hover:text-zinc-900 transition-all"
          >
            
            <td>{contact.fname}</td>
            <td>{contact.lname}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};
