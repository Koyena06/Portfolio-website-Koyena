import Image from "next/image"
const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"]
export default function About() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/profile.png"
          alt="Koyena Sutradhar"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold">Koyena Sutradhar</h2>
          <p className="text-gray-500">Full-Stack Developer, Cloud Enthusiast</p>
        </div>
        <p className="text-gray-600 leading-relaxed text-center max-w-xl">
         Hi, I'm Koyena, a B.Tech student at XIM University, Bhubaneswar, originally from Jamshedpur. I enjoy building things that live on the web, whether it's designing clean user interfaces or developing full-stack applications that solve real problems.

        I'm passionate about full-stack development, cloud computing, problem solving, and exploring new programming languages. When I'm not coding, you'll probably find me solving LeetCode problems, reading a good novel, or playing the guitar.

        I love learning by building, participating in hackathons, and turning ideas into projects that challenge me to grow as a developer. My goal is simple: keep learning, keep creating, and build technology that makes a difference.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}