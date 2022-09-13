import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { tw } from "../../lib/utils";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
}

// TODO: Reuse with sidebar StyledLink
export const StyledLink = ({
  children,
  href = "#",
  ...props
}: StyledLinkProps) => {
  const linkStyle = tw(
    "rounded-full md:rounded-xl",
    "p-4 md:px-6 font-medium",
    "justify-center",
    "bg-primary-500 text-white",
    "hover:bg-primary-600",
    "focus:bg-primary-700",
    "active:bg-primary-800"
  );

  return (
    <Link href={href}>
      <a
        className={tw(
          "inline-flex items-center gap-2",
          "outline-none",
          "transition-colors duration-75",
          linkStyle
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
