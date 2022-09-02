export interface TextContainerProps {
  open: boolean;
  truncate?: boolean;
  children?: React.ReactNode;
}

export const TextContainer = ({
  open,
  truncate,
  children,
}: TextContainerProps) => {
  const textStyles = open
    ? "opacity-0 md:opacity-100"
    : "opacity-100 md:sr-only md:opacity-0";
  const textOverflow = truncate ? "truncate max-w-[10ch]" : "";

  return (
    <span className={`duration-300 ${textOverflow} ${textStyles}`}>
      {children}
    </span>
  );
};
