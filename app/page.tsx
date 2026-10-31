import { ArrowUpRight, Mail } from "lucide-react"
import Typewriter from "@/components/Typewriter"
import LiveClock from "@/components/LiveClock"
import VaultDial from "@/components/VaultDial"
import AboutPhoto from "@/components/AboutPhoto"
import Skills from "@/components/Skills"
import ProjectCard from "@/components/Projects"
import { projects } from "@/data/projects"

const lately = [
  { t: "Converge", c: "font-semibold" },
  { t: "Leaflet.js", c: "mono font-medium text-[1.15rem]" },
  { t: "Next.js", c: "font-semibold tracking-tight" },
  { t: "TypeScript", c: "font-light italic" },
  { t: "PostgreSQL", c: "mono font-medium text-[1.15rem]" },
]

export default function Page() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="panel">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Typewriter />
              <p className="mt-8 max-w-md text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Full-stack developer and cloud enthusiast, building clean, purposeful web experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-solid">View projects <ArrowUpRight size={16} /></a>
                <a href="#contact" className="btn btn-ghost">Get in touch</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <VaultDial />
              <LiveClock />
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <p className="mono text-[.72rem] tracking-[0.16em]" style={{ color: "var(--muted)" }}>LATELY IN THE VAULT</p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-5 items-center text-[1.45rem]"
              style={{ color: "var(--muted)", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              {lately.map((l) => <li key={l.t} className={l.c}>{l.t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="panel">
        <div className="wrap">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-start">
            <AboutPhoto />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl sm:text-5xl font-normal">About me</h2>
              <p className="text-xl font-medium" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Full-Stack Developer, Cloud Enthusiast
              </p>
              <div className="flex flex-col gap-4 leading-relaxed max-w-[34rem]" style={{ color: "var(--muted)" }}>
                <p>Hi, I&apos;m Koyena, a B.Tech student at XIM University, Bhubaneswar, originally from Jamshedpur. I enjoy building things that live on the web, whether it&apos;s designing clean user interfaces or developing full-stack applications that solve real problems.</p>
                <p>I&apos;m passionate about full-stack development, cloud computing, problem solving, and exploring new programming languages. When I&apos;m not coding, you&apos;ll probably find me solving LeetCode problems, reading a good novel, or playing the guitar.</p>
                <p>I love learning by building, participating in hackathons, and turning ideas into projects that challenge me to grow as a developer. My goal is simple: keep learning, keep creating, and build technology that makes a difference.</p>
              </div>
            </div>
          </div>
          <div className="mt-16"><Skills /></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="panel">
        <div className="wrap">
          <h2 className="text-4xl sm:text-5xl font-normal mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="panel">
        <div className="wrap">
          <h2 className="text-4xl sm:text-6xl font-normal leading-tight max-w-2xl">Let&apos;s build something together.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            I&apos;m open to full-time roles, internships and freelance projects. Best way to reach me:
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:koyena.sutradhar@gmail.com" className="btn btn-solid"><Mail size={16} /> Email me</a>
            <a href="https://github.com/Koyena06" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub <ArrowUpRight size={16} /></a>
            <a href="https://linkedin.com/in/kosu" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </>
  )
}
