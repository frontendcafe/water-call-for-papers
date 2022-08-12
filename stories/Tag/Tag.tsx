interface TagProps {
  label: string;
  hidden?: boolean | undefined;
  size?: "sm" | "md" | "lg";
  style: "primary" | "secondary";
}

export const Tag = ({ label, ...props }: TagProps) => {
  const smallSize = props.size === "sm" && "text-sm";
  const mediumSize = props.size === "md" && "text-base";
  const largeSize = props.size === "lg" && "text-lg";
  const hidden = props.hidden && "opacity-0";
  const primaryStyle = props.style === "primary" && "bg-blue-400";
  const secondaryStyle = props.style === "secondary" && "bg-emerald-400";

  return (
    <div
      className={`${primaryStyle} ${secondaryStyle} ${smallSize} ${mediumSize} ${largeSize} ${hidden} p-1.5 rounded-full text-center`}
    >
      <label>{label}</label>
    </div>
  );
};

// <Tag />
