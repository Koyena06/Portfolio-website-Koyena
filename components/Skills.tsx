const skills = ["TypeScript", "React", "Next.js", "PostgreSQL", "MySQL"]
export default function Skills() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}