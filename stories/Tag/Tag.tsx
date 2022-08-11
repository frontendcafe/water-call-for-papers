interface TagProps {
  label: string;
  primary: boolean;
  secondary: boolean;
  visible: boolean;
  hidden: boolean;
  size: string;
}

export const Tag = ({ label, ...props }: TagProps) => {
  const primaryStyle = props.primary && "bg-blue-400";
  const secondaryStyle = props.secondary && "bg-emerald-400";
  const smallSize = props.size === "sm" && "text-sm py-px px-1";
  const MediumSize = props.size === "md" && "text-base py-px px-1";
  const LargeSize = props.size === "lg" && "text-lg py-px px-1";

  return (
    <div
      className={`${primaryStyle} ${secondaryStyle} ${smallSize} ${MediumSize} ${LargeSize}  p-1.5 rounded-full text-center`}
    >
      {label}
    </div>
  );
};
