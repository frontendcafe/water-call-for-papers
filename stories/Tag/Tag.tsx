interface TagProps {
  label: string;
  size?: "sm" | "md" | "lg";
  style?: "primary" | "secondary";
}

const styleList = {
  primary: "bg-blue-400",
  secondary: "bg-emerald-400",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Tag = ({ label, size = "md", style = "primary" }: TagProps) => {
  return (
    <div
      className={`${styleList[style]} ${styleList[size]} py-1.5 px-8 rounded-full text-center max-w-max`}
    >
      <span>{label}</span>
    </div>
  );
};
