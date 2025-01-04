"use client";
import { redirect } from "next/navigation";
import React from "react";

const CancelButton = () => {
  return (
    <>
      <button onClick={() => (redirect("/"), false)} type="button">
        Cancel
      </button>
    </>
  );
};

export default CancelButton;
