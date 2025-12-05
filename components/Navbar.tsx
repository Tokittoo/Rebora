"use client";

import { FaPhoenixSquadron } from "react-icons/fa";
import Link from "next/link";
import { ThemeToggleButton } from "./ui/theme-toggle-button";

export default function Navbar() {

  return (
    <nav className="absolute top-0 flex items-center justify-between p-4 md:px-24 w-full">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-2xl font-bold"
      >
        <FaPhoenixSquadron /> Rebora
      </Link>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={"https://crish.vercel.app/"}
            target="_blank"
            className="text-sm hover:text-muted-foreground"
          >
            Contact
          </Link>
          <Link
            href={"https://github.com/krishnaprasath/Rebora"}
            target="_blank"
            className="text-sm hover:text-muted-foreground"
          >
            GitHub
          </Link>
        </div>

        <ThemeToggleButton />
      </div>
    </nav>
  );
}
