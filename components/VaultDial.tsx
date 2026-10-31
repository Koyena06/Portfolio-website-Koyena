// Decorative vault door; rotates with page scroll via the --p CSS variable.
export default function VaultDial() {
  const ticks = Array.from({ length: 60 }, (_, i) => i)
  const bolts = Array.from({ length: 8 }, (_, i) => i)
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Vault dial that turns as you scroll"
      className="w-full max-w-[380px] h-auto">
      <circle cx="200" cy="200" r="190" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="176" fill="none" stroke="var(--line)" strokeWidth="1" />
      {bolts.map((i) => {
        const a = (i * 45 * Math.PI) / 180
        return <circle key={i} cx={200 + 183 * Math.cos(a)} cy={200 + 183 * Math.sin(a)} r="3" fill="var(--line-strong)" />
      })}
      <g className="dial-rot">
        {ticks.map((i) => {
          const a = (i * 6 * Math.PI) / 180
          const long = i % 5 === 0
          const r1 = long ? 146 : 154
          return (
            <line key={i}
              x1={200 + r1 * Math.sin(a)} y1={200 - r1 * Math.cos(a)}
              x2={200 + 162 * Math.sin(a)} y2={200 - 162 * Math.cos(a)}
              stroke={long ? "var(--text)" : "var(--line-strong)"} strokeWidth={long ? 1.6 : 1} />
          )
        })}
      </g>
      <circle cx="200" cy="200" r="126" fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />
      <g className="dial-rot-rev">
        <circle cx="200" cy="200" r="98" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 7" />
        {[0, 120, 240].map((d) => (
          <g key={d} transform={`rotate(${d} 200 200)`}>
            <rect x="194" y="118" width="12" height="46" rx="6" fill="var(--raised)" stroke="var(--line-strong)" />
          </g>
        ))}
      </g>
      <circle cx="200" cy="200" r="34" fill="var(--raised)" stroke="var(--line-strong)" />
      <circle cx="200" cy="200" r="7" fill="var(--accent)" />
      <path d="M200 30 l-7 -12 h14 z" fill="var(--accent)" />
    </svg>
  )
}
