import React from "react";
import Form from "next/form";
import { createContact } from "@/lib/serverActions/createContact";
import styles from "@/components/CreateContact/createContact.module.css";
import CancelButton from "../Buttons/CancelButton";
import SubmitButton from "../Buttons/SubmitButton";

const CreateContact = () => {
  return (
    <Form className={styles.css} action={createContact}>
      <p>Create Contact</p>
      <div>
        <label>
          <span>First Name</span>
          <input type="text" placeholder="First Name" name="fname" />
        </label>

        <label>
          <span>Last Name</span>
          <input type="text" placeholder="Last Name" name="lname" />
        </label>
      </div>

      <div>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Email" name="email" />
        </label>

        <label>
          <span>Phone</span>
          <input type="text" placeholder="Phone" name="phone" />
        </label>
      </div>
      <div>
        <SubmitButton />
        <CancelButton />
      </div>
    </Form>
  );
};

export default CreateContact;
