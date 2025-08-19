"use client";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="w-content bg-blue-200 text-blue-800 py-3 gap-2 px-3 h-14 flex items-center rounded-full">
      <Link
        href="https://github.com/abdullahalydev"
        target="_blank"
        className="bg-blue-100 pointer-fine:cursor-none pointer-coarse:cursor-none rounded-full p-2 h-full flex items-center hover:bg-blue-100/60"
      >
        <Github className="text-blue-800" size={18} />
      </Link>

      <Link
        href="https://x.com/abdullahalydev"
        target="_blank"
        className=" bg-blue-100 pointer-fine:cursor-none pointer-coarse:cursor-none rounded-full p-2 h-full flex items-center hover:bg-blue-100/60"
      >
        <Twitter className="text-blue-800" size={18} />
      </Link>
    </div>
  );
}
