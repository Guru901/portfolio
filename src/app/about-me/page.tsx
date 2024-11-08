import Footer from "@/components/Footer/Footer";
import React from "react";
import HighlightedText from "@/components/HighlightedText";
import Navbar from "@/components/navbar/navbar";
import MouseFollower from "@/components/mouseFollower";
import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="flex flex-col gap-20">
      <MouseFollower />
      <Navbar />
      <div className="flex w-screen justify-center gap-12">
        <div className="w-[22rem]">
          <img
            src={"/gurvinder.jpg"}
            alt="Gurvinder"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full max-w-lg flex flex-col gap-8">
          <h1 className="text-4xl font-bold leading-normal">
            Hi, I m <HighlightedText>Gurvinder Singh</HighlightedText>
          </h1>
          <h2 className="text-3xl font-semibold leading-normal">
            I am mostly a <HighlightedText>software developer</HighlightedText>{" "}
            and <HighlightedText>sometimes a designer</HighlightedText> from{" "}
            <HighlightedText>India.</HighlightedText>
          </h2>
          <div>
            <h2 className="text-3xl font-semibold leading-normal">
              As a designer i like stuff that isn’t obvious and ordinary.
            </h2>
            <h2 className="text-3xl font-semibold leading-normal">
              As a developer i like things that are fast and performant🔥.
            </h2>
          </div>
          <h2 className="text-2xl font-semibold">
            So if you are interested, hit me up{" "}
            <Link href={"/react-out"}>
              <HighlightedText>here.</HighlightedText>
            </Link>
          </h2>
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </main>
  );
}
