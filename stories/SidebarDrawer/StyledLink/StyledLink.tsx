import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { tw } from "../../../lib/utils";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "transparent";
}

export const StyledLink = ({
  children,
  href = "#",
  variant = "transparent",
  ...props
}: StyledLinkProps) => {
  const linkStyle = {
    primary: tw(
      "rounded-full",
      "py-3 font-medium",
      "justify-center",
      "bg-primary-500 text-white",
      "hover:bg-primary-600",
      "focus:bg-primary-700",
      "active:bg-primary-800"
    ),
    transparent: tw(
      "rounded-md",
      "p-2",
      "bg-transparent text-secondary-200",
      "hover:bg-secondary-800/25 hover:text-secondary-100",
      "focus:bg-secondary-800/50 focus:text-secondary-100",
      "active:bg-secondary-800 active:text-secondary-50"
    ),
  };

  return (
    <Link href={href}>
      <a
        className={tw(
          "flex items-center gap-2",
          "outline-none",
          "transition-colors duration-75",
          linkStyle[variant]
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
