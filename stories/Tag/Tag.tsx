interface TagProps {
  label: string;
  primary: boolean;
  secondary: boolean;
  visible: boolean;
  hidden: boolean;
  size: string;
}

export const Tag = ({ label, ...props }: TagProps) => {
  return (
    <div
      className={`${props.primary && "bg-blue-400"} ${
        props.secondary && "bg-emerald-400"
      }  p-1.5 rounded-full w-1/5 text-center`}
    >
      {label}
    </div>
  );
};
