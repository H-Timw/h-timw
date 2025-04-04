"use client";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailLine,
  RiTelegram2Fill,
} from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://t.me/timw0512",
      icon: (
        <RiTelegram2Fill
          size={24}
          className="text-(--color-primitive-slate-500)"
        />
      ),
    },
    {
      href: "https://www.linkedin.com/in/timw0512/",
      label: "linkedin",
      icon: (
        <RiLinkedinFill
          size={24}
          className="text-(--color-primitive-slate-500)"
        />
      ),
    },
    {
      href: "mailto:timw051201@gmail.com?subject=Contact From Portfolio &body=Hello, I'm ...",
      label: "e-mail",
      icon: (
        <RiMailLine
          size={24}
          className="text-(--color-primitive-slate-500)"
        />
      ),
    },
  ];
  return (
    <footer className="w-full flex flex-row justify-between border-t border-(--color-theme-stroke)">
      <div className="flex header-name flex-row">
        <div className="px-12 py-8 border-r border-(--color-theme-stroke)">
          <p className="text-md text-(--color-theme-foreground)">find me in:</p>
        </div>
        <div className="flex flex-row">
          {socialLinks?.map((social, index) => (
            <Link
              target="_blank"
              href={social.href}
              key={`${social.href}_${index}`}
              className="p-8 border-r border-r-(--color-theme-stroke) flex flex-row gap-4"
            >
              {social?.icon}
            </Link>
          ))}
        </div>
      </div>
      <Link
        target="_blank"
        href="https://github.com/H-Timw"
        className="px-16 py-8 border-l border-l-(--color-theme-stroke)  flex flex-row gap-4 "
      >
        <p className="text-md text-(--color-theme-foreground)">@H-Timw</p>
        <RiGithubFill
          size={24}
          className="text-(--color-primitive-slate-500)"
        />
      </Link>
    </footer>
  );
}
