import Link from "next/link";
import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link href="/#home" className="footer-brand">
          rt<span>.</span>
        </Link>
        <p>© {new Date().getFullYear()} Roslan Taef</p>
        <span>Thoughtfully built. Always evolving.</span>
        <Link href="/#home" className="back-top">
          Back to top
          <ArrowUp size={15} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
