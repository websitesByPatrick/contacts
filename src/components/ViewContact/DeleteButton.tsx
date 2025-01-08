"use client";

import { deleteContact } from "@/lib/serverActions";
import React from "react";

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  return (
    <>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
};

export default DeleteButton;
