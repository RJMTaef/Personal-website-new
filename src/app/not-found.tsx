import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        Nothing here.
        <br />
        <em>Plenty to explore.</em>
      </h1>
      <p>This page could not be found. Let’s get you back to the work.</p>
      <Link href="/" className="button button-dark">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to the portfolio
      </Link>
    </main>
  );
}
