import React from "react";

import { NavItem } from "@/components/NavItem";



export const Navbar = () => {
  return (
    <div className="bg-zinc-800 h-14 flex justify-between">
      <div className="flex gap-3 ml-10 h-10 my-auto">
        <NavItem text="Home" href="/" />
        <NavItem text="View All" href="/database/all" />
        <NavItem text="Create New" href="/database/create" />
      </div>
      <div className="flex gap-3 mr-10 h-10 my-auto">
        <NavItem text="Login" href="/" />
        <NavItem text="Settings" href="/" />
      </div>
    </div>
  );
};
