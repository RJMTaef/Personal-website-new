"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/#specialties", label: "Specialties" },
  { href: "/#work", label: "Selected work" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/#home"
          aria-label="Roslan Taef home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            rt<span>.</span>
          </span>
          <span>Roslan Taef</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="header-contact">
          Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
          }
        }}
      >
        {[...links, { href: "/#contact", label: "Let’s connect" }].map(
          (link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
