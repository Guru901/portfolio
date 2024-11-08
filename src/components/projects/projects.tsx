import HighlightedText from "@/components/HighlightedText";

export default function Projects() {
  return (
    <div className="lg:px-[60px] pt-10 flex flex-col gap-3 md:gap-14">
      <h1 className="px-4 lg:px-0 text-[#1e1e1e] text-[13vw] md:text-[8vw]  lg:text-[8vw] xl:text-[77px] font-bold leading-normal">
        Things <HighlightedText>I have</HighlightedText>
        <br />
        created
      </h1>
      <div className="flex flex-col gap-5 justify-center">
        <div className="rounded-[15px] bg-[#f3f3f3] w-full items-center justify-center flex lg:flex-row flex-col lg:gap-8 py-5 px-4 lg:p-8 md:p-4">
          <img
            src={"/project-1.png"}
            className="w-screen lg:w-[836px] object-cover sm:p-2 md:p-4 lg:p-8"
            alt="project 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="bg-gradient-to-r from-[#3a3a3a] to-[#0f0f0f] bg-clip-text text-transparent text-[24px] md:text-[36px] font-bold italic leading-normal">
              Social Media App
            </h1>
            <p className="text-[#000] font-[500] text-[20px]  md:text-[26px] leading-[123%]">
              A platform to make friends and talk about anything Anonymously
            </p>
          </div>
        </div>
        <div className="rounded-[15px] bg-[#f3f3f3] w-full items-center justify-center flex lg:flex-row-reverse flex-col lg:gap-8 py-5 px-2 lg:p-8 md:p-4">
          <img
            src={"/project-2.png"}
            className="w-screen lg:w-[836px] object-cover sm:p-2 md:p-4 lg:p-8"
            alt="project 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="bg-gradient-to-r from-[#3a3a3a] to-[#0f0f0f] bg-clip-text text-transparent text-[24px] md:text-[36px] font-bold italic leading-normal">
              Progress Tracking App
            </h1>
            <p className="text-[#000] font-[500] text-[20px]  md:text-[26px] leading-[123%]">
              The Best way to track your Progress
            </p>
          </div>
        </div>
        <div className="rounded-[15px] bg-[#f3f3f3] w-full items-center justify-center flex lg:flex-row flex-col lg:gap-8 py-5 px-4 lg:p-8 md:p-4">
          <img
            src={"/project-1.png"}
            className="w-screen lg:w-[836px] object-cover sm:p-2 md:p-4 lg:p-8"
            alt="project 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="bg-gradient-to-r from-[#3a3a3a] to-[#0f0f0f] bg-clip-text text-transparent text-[24px] md:text-[36px] font-bold italic leading-normal">
              Social Media App
            </h1>
            <p className="text-[#000] font-[500] text-[20px]  md:text-[26px] leading-[123%]">
              A platform to make friends and talk about anything Anonymously
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
