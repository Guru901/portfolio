import HighlightedText from "../HighlightedText";

export default function Footer() {
  return (
    <footer className="w-screen lg:w-[calc(100vw-4rem)] min-h-[20vh] bg-[#F5F5F4] mx-auto">
      <div className="py-12 px-16 flex flex-col gap-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Thank You For Visiting <br /> Reach out to me{" "}
          <HighlightedText>here</HighlightedText>
          <HighlightedText className="border-none">,</HighlightedText>
        </h1>
        <h1 className="text-xl sm:text-[3vw] md:text-2xl font-semibold">
          © 2024 Designed and built By{" "}
          <HighlightedText>Gurvinder Singh</HighlightedText>
        </h1>
      </div>
    </footer>
  );
}
