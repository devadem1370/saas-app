"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn } from "@clerk/nextjs"

const publicNavItems = [
  {label:"Home", href: "/"},
  {label: "Companions",  href:"/companions" },
];

const privateNavItems = [
  {label: "My Journey", href: '/my-journey'},
];
const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className="flex item-center gap-4">
      {publicNavItems.map(({label, href})=>(
        <Link href={href} key={label} className={cn(pathname === href && "text-primary font-semibold")}>
          {label}
        </Link>
      ))}
      <SignedIn>
        {privateNavItems.map(({label, href})=>(
          <Link href={href} key={label} className={cn(pathname === href && "text-primary font-semibold")}>
            {label}
          </Link>
        ))}
      </SignedIn>
    </nav>
  )
}

export default NavItems
