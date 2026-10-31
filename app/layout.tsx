import SiteChrome from '@/components/SiteChrome'
import './globals.css'

export const metadata = {
  title: "Koyena Sutradhar - Developer",
  description: "Portfolio of Koyena Sutradhar, a full-stack developer.",
}

// Applies saved theme/cursor before first paint to avoid a flash.
const initScript = `try{var d=document.documentElement,t=localStorage.getItem('kv-theme'),c=localStorage.getItem('kv-cursor');d.dataset.theme=(t==='light'?'light':'dark');d.dataset.cursor=(c==='orb'||c==='crosshair')?c:'classic'}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.dataset.cursor='classic'}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" data-cursor="classic" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: initScript }} /></head>
      <body>
        <SiteChrome />
        <main>{children}</main>
      </body>
    </html>
  )
}
