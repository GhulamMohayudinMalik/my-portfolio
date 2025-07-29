import React from "react";
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import NavLink from "./NavLink";
import Link from "next/link";

const rubicGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubic-glitch",
});

function Navbar() {
  return (
    <div className="container mx-auto p-3 flex justify-between sticky top-0 bg-black z-1">
      <div>
        <Link href={"/"}>
        <Image src={"/name-logo-3.png"} width={70} height={70} alt="Logo" />
        </Link>
      </div>

      <ul
        className={`flex gap-6 items-center justify-center text-xl ${rubicGlitch.className}`}
      >
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"#about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/#"}>Tools</NavLink>
        </li>
        <li>
          <NavLink href={"#certifications"}>Certifications</NavLink>
        </li>
        <li>
          <NavLink href={"/#"}>Services</NavLink>
        </li>
        <li>
          <NavLink href={"#contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
