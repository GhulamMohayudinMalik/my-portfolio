import React from "react";
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import NavLink from "./NavLink";

const rubicGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubic-glitch",
});

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="">
        <Image src={"/name-logo-3.png"} width={70} height={70} alt="Logo" />
      </div>

      <ul
        className={`flex gap-6 items-center justify-center text-xl ${rubicGlitch.className}`}
      >
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/tools"}>Tools</NavLink>
        </li>
        <li>
          <NavLink href={"/certifications"}>Certifications</NavLink>
        </li>
        <li>
          <NavLink href={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink href={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
