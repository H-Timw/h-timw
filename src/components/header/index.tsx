"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const navLinks = [
    { href: "/", label: "_hello" },
    { href: "/about", label: "_about-me" },
    { href: "/projects", label: "_projects" },
    // { href: "/contact", label: "_contact-me" },
  ];
  return (
    <header className="flex flex-row justify-between border-b border-(--color-theme-stroke) w-full">
      <div className="flex header-name flex-row">
        <div className="w-[311px] px-(--spacing-6) py-(--spacing-5) border-r border-(--color-theme-stroke)">
          <p className="text-md text-(--color-theme-foreground)">h-timw</p>
        </div>
        <div className="flex flex-row">
          {navLinks?.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={`${navItem.href}_${index}`}
              className={clsx(
                "px-(--spacing-7) py-(--spacing-5) border-r border-r-(--color-theme-stroke)",
                {
                  "--color-heading-foreground border-b-2 border-b-(--color-primary-background)":
                    pathName === navItem.href,
                }
              )}
            >
              <p>{navItem.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="px-(--spacing-7) py-(--spacing-5) border-l border-(--color-theme-stroke)"
      >
        <p className="text-(--color-theme-foreground)">_contact-me</p>
      </button>
      <Link
        href="/contact"
        key="contact"
        className={clsx(
          "px-(--spacing-7) py-(--spacing-5) border-l border-l-(--color-theme-stroke)",
          {
            "--color-heading-foreground border-b-2 border-b-(--color-primary-background)":
              pathName === "/contact",
          }
        )}
      >
        <p>_contact-me</p>
      </Link>
    </header>
  );
}
