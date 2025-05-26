import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="flex items-center justify-between py-4 bg-[var(--bg-scorefy-bg)] w-full">
      <div className="flex flex-col items-center w-full justify-center text-white/70 font-blinker text-sm">
        <p>© 2025 Scorefy</p>
        <div className="flex flex-row items-center justify-center">
          <Link href="/about" passHref>
            <p className="ml-4">Our Story</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="ml-4">Contact</p>
          </Link>
          <Link href="/privacy-policy" passHref>
            <p className="ml-4">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
