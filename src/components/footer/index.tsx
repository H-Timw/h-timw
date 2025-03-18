"use client";
import { RiGithubFill, RiLinkedinFill, RiMailLine } from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      href: "/",
      label: "github",
      icon: (
        <RiGithubFill
          size={24}
          className="--color-primitive-slate-500"
        />
      ),
    },
    {
      href: "/about",
      label: "linkedin",
      icon: (
        <RiLinkedinFill
          size={24}
          className="--color-primitive-slate-500"
        />
      ),
    },
    {
      href: "/projects",
      label: "e-mail",
      icon: (
        <RiMailLine
          size={24}
          className="--color-primitive-slate-500"
        />
      ),
    },
    // { href: "/contact", label: "_contact-me" },
  ];
  return (
    <footer className="w-full flex flex-row justify-between border-t border-(--color-theme-stroke)">
      <div className="flex header-name flex-row">
        <div className="px-(--spacing-6) py-(--spacing-5) border-r border-(--color-theme-stroke)">
          <p className="text-md text-(--color-theme-foreground)">find me in:</p>
        </div>
        <div className="flex flex-row">
          {socialLinks?.map((social, index) => (
            <Link
              target="_blank"
              href={social.href}
              key={`${social.href}_${index}`}
              className="p-(--spacing-5) border-r border-r-(--color-theme-stroke) flex flex-row gap-(--spacing-3)"
            >
              {social?.icon}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/contact"
        key="contact"
        className="px-(--spacing-7) py-(--spacing-5) border-l border-l-(--color-theme-stroke)  flex flex-row gap-(--spacing-3) "
      >
        <p className="text-md text-(--color-theme-foreground)">@H-Timw</p>
        <RiGithubFill
          size={24}
          className="--color-primitive-slate-500"
        />
      </Link>
    </footer>
  );
}
