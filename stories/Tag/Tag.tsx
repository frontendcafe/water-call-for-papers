interface TagProps {
  label: string;
  primary: boolean;
  secondary: boolean;
  visible: boolean;
  hidden: boolean;
  size: string;
}

export const Tag = ({ label, ...props }: TagProps) => {
  return <div>{label}</div>;
};
