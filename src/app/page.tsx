"use client";

import Navbar from "@/components/navbar/navbar";
import Socials from "@/components/socials/socials";
import Projects from "@/components/projects/projects";
import { useEffect, useState } from "react";
import smoothScroll from "@/components/smoothScroll";
import Loader from "@/components/loader/loader";
import MouseFollower from "@/components/mouseFollower";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    smoothScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className={`flex flex-col ${isMobile ? "gap-7" : "gap-10"} pb-3 md:pb-10`}
    >
      <MouseFollower />
      <Loader />
      <Navbar />
      <Socials />
      <div className="flex flex-col mx-auto pl-6 md:p-0 pt-10">
        <span
          className={`text-[19vw] md:text-[14vw] w-screen md:pl-[2vw] lg:text-[13vw] bold-font leading-[100%] bg-gradient-to-r from-[#3a3a3a] via-[#2a2a2a] to-[#0f0f0f] bg-clip-text text-transparent`}
        >
          Gurvinder is a {isMobile ? "web" : ""}
        </span>
        <span
          className={` ${
            isMobile ? "text-[18vw]" : "text-[12vw]"
          } md:text-[12vw] lg:text-[12vw] bold-font leading-[100%] bg-gradient-to-r from-[#ffb74d] via-[#ff6f61] to-[#b71c1c] bg-clip-text text-transparent md:pl-[10vw]`}
        >
          {isMobile ? "developer" : "web developer"}
        </span>
      </div>
      <Projects />
      <Footer />
    </main>
  );
}
