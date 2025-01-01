import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

export const NavItem = (props: Props) => {
  return (
    <>
      <Link
        href={props.href}
        className="w-28 text-center text-zinc-200 hover:text-zinc-50 leading-9 pr-2 pl-2 rounded-lg border-zinc-700 border hover:border-zinc-200 transition-all "
      >
        {props.text}
      </Link>
    </>
  );
};
