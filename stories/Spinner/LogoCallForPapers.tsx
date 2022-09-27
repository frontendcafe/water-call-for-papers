import { SVGProps } from "react";

export function LogoCallForPapers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="inline w-8 h-8"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 32H21.8333L32 21.3H10.3333L0 32Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M32 21.2998H10.1667L-9.53674e-07 10.6998H21.6667L32 21.2998Z"
        fill="white"
        fillOpacity="0.8"
      />
      <path
        d="M0 10.7002H21.8333L32 0.000195503H10.3333L0 10.7002Z"
        fill="white"
      />
    </svg>
  );
}
