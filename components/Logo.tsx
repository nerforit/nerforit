import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`logo ${dark ? "logo-dark" : ""}`}>
      <span className="logo-mark">N</span>
      <span>NERFORIT</span>
    </Link>
  );
}
