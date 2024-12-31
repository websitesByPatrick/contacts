import React, { FC } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export const Button:FC<ButtonProps> = ({text, href}) => {
  return (
    <div className="w-32 h-10 bg-slate-100 rounded-lg text-center  hover:bg-slate-900 hover:border border-slate-50 transition duration-300 ease-in-out">
      <Link
        className=" text-slate-800 hover:text-slate-200 transition duration-300 ease-in-out"
        href={href}
      > <p className="p-2 text-xl">{text}</p>
        
      </Link>
    </div>
  );
};