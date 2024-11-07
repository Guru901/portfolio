"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  { name: "About Me", href: "/about-me" },
  { name: "Things I Create", href: "/projects" },
  { name: "Reach out!", href: "/react-out" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="bg-gradient-to-r from-[#1d1d1d] to-[#838383] bg-clip-text text-transparent text-[28px] sm:text-[32px] font-bold underline decoration-black pt-[22px] pl-[25px]">
              Gurvinder <br /> Singh
            </h1>
          </Link>
        </div>
        <div className="hidden gap-9 pr-[74px] md:flex">
          {links.map((link) => (
            <Link
              onMouseDown={() => {
                router.push(link.href);
              }}
              prefetch={true}
              className="h-min"
              key={link.name}
              href={link.href}
            >
              <p className="text-[#1d1d1d] font-[600] text-[20px] md:text-[24px] leading-normal">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
