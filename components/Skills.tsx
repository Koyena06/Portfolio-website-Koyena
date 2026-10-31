import { Binary, Braces, Atom, Triangle, Database, GitBranch, Puzzle } from "lucide-react"

const skills = [
  { name: "Data Structures and Algorithms", Icon: Binary },
  { name: "TypeScript", Icon: Braces },
  { name: "React", Icon: Atom },
  { name: "Next.js", Icon: Triangle },
  { name: "PostgreSQL", Icon: Database },
  { name: "Git", Icon: GitBranch },
  { name: "Problem Solving", Icon: Puzzle },
]

export default function Skills() {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-5">Skills</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map(({ name, Icon }) => (
          <li key={name} className="card flex items-center gap-3 px-4 py-4">
            <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl"
              style={{ background: "var(--raised)", color: "var(--accent)" }}>
              <Icon size={20} strokeWidth={1.7} />
            </span>
            <span className="text-sm leading-snug">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
