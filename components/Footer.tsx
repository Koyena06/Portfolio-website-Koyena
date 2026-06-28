export default function Footer() {
  return (
    <footer className="border-t mt-20 px-6 py-6 text-sm text-gray-500">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span>© {new Date().getFullYear()} Koyena Sutradhar</span>
        <div className="flex gap-4">
          <a href="https://github.com/Koyena06" target="_blank" className="hover:text-gray-900">
            GitHub
          </a>
          <a href="https://linkedin.com/in/kosu" target="_blank" className="hover:text-gray-900">
            LinkedIn
          </a>
          <a href="mailto:koyena.sutradhar@email.com" className="hover:text-gray-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}