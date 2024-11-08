import HighlightedText from "../HighlightedText";

export default function Footer() {
  return (
    <footer className="rounded-lg w-screen lg:w-[calc(100vw-4rem)] bg-[#F5F5F4] mx-auto">
      <div className="md:py-12 px-14 md:px-16 flex flex-col md:gap-16 gap-10 py-8">
        <h1 className="text-[7vw] md:text-6xl font-bold">
          Thank You For Visiting <br /> Reach out to me{" "}
          <HighlightedText>here</HighlightedText>
          <HighlightedText className="border-none">,</HighlightedText>
        </h1>
        <h1 className="text-xl sm:text-[3vw] md:text-2xl font-semibold">
          © 2024 Designed and built by{" "}
          <HighlightedText>Gurvinder Singh</HighlightedText>
        </h1>
      </div>
    </footer>
  );
}
