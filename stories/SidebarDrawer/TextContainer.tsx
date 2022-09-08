export interface TextContainerProps {
  status: boolean;
  truncate?: boolean;
  children?: React.ReactNode;
}

export const TextContainer = ({
  status,
  truncate,
  children,
}: TextContainerProps) => {
  const textStyles = status ? "md:opacity-100" : "md:sr-only md:opacity-0";
  const textOverflow = truncate ? "truncate max-w-[10ch]" : "";

  return (
    <span className={`duration-300 ${textOverflow} ${textStyles}`}>
      {children}
    </span>
  );
};
