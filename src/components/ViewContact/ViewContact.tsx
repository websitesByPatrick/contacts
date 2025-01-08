
import React from "react";

import { dateToString } from "@/lib/Utilities/dateToString";
import styles from "@/components/ViewContact/viewContacts.module.css";
import DeleteButton from "./DeleteButton";

import { getAllContacts } from "@/lib/serverActions";

const ViewContact = async () => {
  const contacts = getAllContacts();

  return (
    <table className={styles.css}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {(await contacts).map((contact) => (
          <tr key={contact.id}>
            <td>{contact.fname}</td>
            <td>{contact.lname}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{dateToString(contact.createdAt)}</td>
            <td>{dateToString(contact.updatedAt)}</td>
            <td>✍️</td>

            <td>
              <DeleteButton id={contact.id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewContact;
