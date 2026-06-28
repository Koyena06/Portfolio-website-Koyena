import Link from "next/link"

export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-28 px-4">
      <p style={{ color: 'var(--accent)' }} className="text-sm tracking-[0.3em] uppercase">
        Welcome to my portfolio
      </p>
      <h1 className="text-6xl font-bold leading-tight" style={{ color: 'var(--text)' }}>
        Hi, I'm <br />
        <span style={{ color: 'var(--accent)' }}>Koyena Sutradhar</span>
      </h1>
      <p style={{ color: 'var(--muted)' }} className="text-lg max-w-xl leading-relaxed">
        Full-stack developer & cloud enthusiast — building clean, purposeful web experiences.
      </p>
      <div className="flex gap-4 mt-2">
        <Link href="/projects"
          style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          className="px-6 py-3 rounded-sm text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
          View Projects
        </Link>
        <Link href="/contact"
          style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          className="px-6 py-3 rounded-sm text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}