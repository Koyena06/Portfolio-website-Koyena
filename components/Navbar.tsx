import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]
export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 backdrop-blur-sm">
      <Link href="/" style={{ color: 'var(--accent)' }}
        className="text-xl font-bold tracking-widest uppercase font-serif">
        KS
      </Link>
      <ul className="flex gap-8 text-sm tracking-wider uppercase">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}
              style={{ color: 'var(--muted)' }}
              className="hover:text-[--accent] transition-colors duration-200">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}