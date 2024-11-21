import { Github } from "lucide-react";
import Link from "next/link";

export const NavBar = () => {
  // --- RENDER ---

  return (
    <nav className="ml-auto hidden  md:flex gap-6 px-4 ">
      <Link href="/#pricing">Pricing</Link>
      <Link href="/#features">Features</Link>
      <Link
        href="https://github.com/codebymedu/gateui"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <Github size={16} /> Github
      </Link>
    </nav>
  );
};
