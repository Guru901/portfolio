export default function HighlightedText({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <span
      {...props}
      className="relative text-transparent bg-gradient-to-r from-[#ffb74d] to-[#b71c1c] bg-clip-text underline decoration-2 decoration-[#ffb74d]"
    >
      {children}
    </span>
  );
}
