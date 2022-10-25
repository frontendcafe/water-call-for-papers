import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { tw } from "../../lib/utils";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  rounded?: "full" | "medium";
  variant?: "primary" | "transparent";
  classNames?: string;
}

export const StyledLink = ({
  children,
  href = "#",
  rounded = "medium",
  variant = "transparent",
  classNames = "",
  ...props
}: StyledLinkProps) => {
  const linkStyle = {
    primary: tw(
      "p-4 md:py-3 font-medium",
      "justify-center",
      "bg-primary-600 text-white",
      "hover:bg-primary-700",
      "focus:bg-primary-800",
      "active:bg-primary-900"
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

  const borderRadius = {
    medium: "rounded-full md:rounded-xl",
    full: "rounded-full",
  };

  return (
    <Link href={href}>
      <a
        className={tw(
          "flex items-center gap-2",
          "outline-none",
          "transition-colors duration-75",
          linkStyle[variant],
          borderRadius[rounded],
          classNames
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
