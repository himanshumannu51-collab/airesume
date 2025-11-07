import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="border-b border-[var(--border)] bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
          NextResume
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/builder" className="hover:text-[var(--primary)]">Builder</Link>
          <Link href="/templates" className="hover:text-[var(--primary)]">Templates</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
