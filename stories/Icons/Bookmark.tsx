export function Bookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L1 19V3z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
