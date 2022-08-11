interface TagProps {
  label: string;
  primary: boolean;
  secondary: boolean;
  hidden: boolean;
  size: string;
}

export const Tag = ({ label, ...props }: TagProps) => {
  const primaryStyle = props.primary && "bg-blue-400";
  const secondaryStyle = props.secondary && "bg-emerald-400";
  const smallSize = props.size === "sm" && "text-sm";
  const mediumSize = props.size === "md" && "text-base";
  const largeSize = props.size === "lg" && "text-lg";
  const hidden = props.hidden && "opacity-0";

  return (
    <div
      className={`${primaryStyle} ${secondaryStyle} ${smallSize} ${mediumSize} ${largeSize} ${hidden} p-1.5 rounded-full text-center`}
    >
      <label>{label}</label>
    </div>
  );
};

// <Tag />
