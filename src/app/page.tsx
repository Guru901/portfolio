"use client";

import Navbar from "@/components/navbar/navbar";
import Socials from "@/components/socials/socials";
import Projects from "@/components/projects/projects";
import { useEffect } from "react";
import smoothScroll from "@/components/smoothScroll";
import Loader from "@/components/loader/loader";

export default function Home() {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <main className="flex flex-col gap-10">
      <Loader />
      <Navbar />
      <Socials />
      <div className="pt-10 flex flex-col mx-auto">
        <h1 className="text-[12vw] md:text-[11vw] w-screen pl-[2vw] lg:text-[13vw] bold-font leading-[100%] bg-gradient-to-r from-[#3a3a3a] via-[#2a2a2a] to-[#0f0f0f] bg-clip-text text-transparent">
          Gurvinder is a
        </h1>
        <h1 className="text-[10vw] md:text-[10vw] lg:text-[12vw] bold-font leading-[100%] bg-gradient-to-r from-[#ffb74d] via-[#ff6f61] to-[#b71c1c] bg-clip-text text-transparent pl-[10vw]">
          web developer
        </h1>
      </div>
      <Projects />
    </main>
  );
}
