import Link from "next/link";

interface StyledLinkProps {
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
    primary:
      "bg-primary-600 text-white py-3 font-medium justify-center rounded-full hover:bg-primary-700 focus:bg-primary-800 active:bg-primary-900",
    transparent:
      "bg-transparent text-secondary-200 rounded-full p-2 hover:bg-secondary-800 focus:bg-secondary-900",
  };

  return (
    <Link href={href}>
      <a className={`flex items-center gap-2 ${linkStyle[variant]}`} {...props}>
        {children}
      </a>
    </Link>
  );
};
