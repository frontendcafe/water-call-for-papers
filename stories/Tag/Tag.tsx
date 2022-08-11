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
  const smallSize = props.size === "sm" && "text-sm";
  const MediumSize = props.size === "md" && "text-base";
  const LargeSize = props.size === "lg" && "text-lg";

  return (
    <div
      className={`${primaryStyle} ${secondaryStyle} ${smallSize} ${MediumSize} ${LargeSize}  p-1.5 rounded-full text-center`}
    >
      {label}
    </div>
  );
};
