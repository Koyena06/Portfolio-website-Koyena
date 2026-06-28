import Link from "next/link";

const links=[
    {href:"/", label:"Home"},
    {href:"/projects", label:"Projects"},
    {href:"/about",label:"About"},
    {href:"/contact", label:"Contact"},
];
export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-6 py-4 border-b">
            <Link href="/" className="font-bold text-lg">Your Name</Link>
            <ul className="flex gap-6 text-sm">
                {links.map((l)=>(
                    <li key={l.href}>
                        <Link href={l.href} className="hover:underline">{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}