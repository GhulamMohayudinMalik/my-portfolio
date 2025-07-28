'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 transition ${
        isActive ? 'outline-2 outline-green-400 bg-emerald-950 p-2 rounded-3xl' : 'hover:outline-2 outline-green-400 hover:bg-emerald-950 p-2 rounded-3xl transition-all duration-75'
      }`}
    >
      {children}
    </Link>
  );
}
