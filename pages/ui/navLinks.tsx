import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex gap-8 text-[22px] proxima-regular">
        <li className="hover:opacity-80">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/">O que fazemos</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/">Cases</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
