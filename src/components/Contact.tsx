"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(portfolioData.person.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    timer.current = setTimeout(() => setCopyState("idle"), 4000);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">04 / LET’S CONNECT</p>
          <span>Good work starts with a conversation.</span>
        </div>
        <div className="contact-main">
          <h2>
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <div className="contact-copy">
            <p>
              A website to design, a data challenge, or a team with something
              interesting to build. I’d like to hear about it.
            </p>
            <a
              className="button button-cream"
              href={`mailto:${portfolioData.person.email}`}
            >
              Start a conversation
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="email-copy">
            <a href={`mailto:${portfolioData.person.email}`}>
              {portfolioData.person.email}
            </a>
            <button
              aria-label={
                copyState === "copied"
                  ? "Email address copied"
                  : "Copy email address"
              }
              onClick={copyEmail}
            >
              {copyState === "copied" ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
            <span className="copy-status" role="status">
              {copyState === "copied"
                ? "Copied!"
                : copyState === "error"
                  ? "Please select and copy the address."
                  : ""}
            </span>
          </div>
          <div className="contact-socials">
            <a
              href={portfolioData.person.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={portfolioData.person.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
