import React from "react";
import styles from "@/components/Navbar/navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">Home</Link>
        <Link href="/contacts/all">View All</Link>
        <Link href="/contacts/create">Create New</Link>
      </div>
      <div>
        <Link href="/">Login</Link>
      </div>
    </nav>
  );
};
