const skills = [
  {name: "Data Structures and Algorithms", icon:"📊"},
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔀" },
  {name: "Problem Solving", icon:"📝"},
]

export default function Skills() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text)' }}>Skills</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div key={s.name}
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-md hover:border-[--accent] transition-colors duration-200">
            <span className="text-2xl">{s.icon}</span>
            <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--muted)' }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}