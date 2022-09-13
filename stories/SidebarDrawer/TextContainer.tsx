export interface TextContainerProps {
  isOpen: boolean;
  truncate?: boolean;
  children?: React.ReactNode;
}

export const TextContainer = ({
  isOpen,
  truncate,
  children,
}: TextContainerProps) => {
  const textStyles = isOpen ? "md:opacity-100" : "md:sr-only md:opacity-0";
  const textOverflow = truncate ? "truncate max-w-[10ch]" : "";

  return (
    <span className={`duration-300 ${textOverflow} ${textStyles}`}>
      {children}
    </span>
  );
};
