import { MouseEvent } from "react";
import { Button } from "../Button/Button";
import { CloseTags } from "../Icons/CloseTag";

interface TagProps {
  label: string;
  size?: "xs" | "sm" | "md" | "lg";
  style?:
    | "primary"
    | "secondary"
    | "passed"
    | "dismissed"
    | "check"
    | "format"
    | "topic";
  color?: "black" | "red" | "green" | "violet" | "white";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const styleList = {
  primary: "blue-100",
  secondary: "emerald-400",
  passed: "bg-[#EFFFED]",
  dismissed: "bg-[#FEE9E5]",
  check: "bg-[#F3F3F3]",
  format: "bg-[#E7FFFE]",
  topic: "bg-[#F3EAFF]",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  black: "text-black",
  red: "text-red-700",
  green: "text-teal-700",
  violet: "text-violet-700",
  white: "text-white",
};

export const Tag = ({
  label,
  size = "md",
  style = "primary",
  color = "black",
  onClick,
}: TagProps) => {
  return (
    <div
      className={` ${styleList[style]} ${styleList[size]} ${styleList[color]} font-medium rounded-full py-1 px-2 max-w-max flex flex-row justify-between items-center gap-2`}
    >
      <span>{label}</span>
      {onClick && (
        <Button size="normal" icon variant="transparent" onClick={onClick}>
          <CloseTags />
        </Button>
      )}
    </div>
  );
};
