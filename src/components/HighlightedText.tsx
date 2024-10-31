export default function HighlightedText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="relative text-transparent bg-gradient-to-r from-[#ffb74d] to-[#b71c1c] bg-clip-text underline decoration-4 decoration-[#ffb74d]">
      {children}
    </span>
  );
}
