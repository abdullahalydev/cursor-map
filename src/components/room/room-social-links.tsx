
"use client"
import { Github, Twitter } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="w-content bg-blue-200 text-blue-800 py-3 gap-2 px-3 h-14 flex items-center rounded-full">
      <a
        href="#"
        className="bg-blue-100 pointer-fine:cursor-none rounded-full p-2 h-full flex items-center hover:bg-blue-100/60"
      >
        <Github className="text-blue-800" size={18} />
      </a>

      <a className=" bg-blue-100 rounded-full p-2 h-full flex items-center hover:bg-blue-100/60">
        <Twitter className="text-blue-800" size={18} />
      </a>
    </div>
  );
}
