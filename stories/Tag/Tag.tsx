import { MouseEvent } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const mode = {
  review: "bg-[#F3F3F3] text-[#393939] ",
  approved: "bg-[#D1FADF] text-[#245938]",
  reprobate: "bg-[#FECACA] text-[#A1321A]",
  event: "bg-black/50 backdrop-blur-sm text-[#F3F3F3]",
  theme: "bg-[#EDDFFF] text-[#3B0085]",
  format: "bg-[#E7FFFE] text-[#124C47]",
  comboLabels: "bg-[#E5E5FF] text-[#003FC1]",
};

const fontSize = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-1 text-base",
  lg: "px-4 py-1 text-lg",
};

export interface TagProps {
  label: string;
  size?: keyof typeof fontSize;
  status?: keyof typeof mode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({
  label,
  size = "md",
  status = "format",
  onClick,
}: TagProps) => {
  return (
    <div
      className={`font-medium rounded-full max-w-max flex flex-row justify-between items-center gap-2 ${fontSize[size]}  ${mode[status]}`}
    >
      <span>{label}</span>
      {onClick && (
        <Button size="normal" icon variant="transparent" onClick={onClick}>
          <Icon size="small" iconName="xMark" />
          <span className="sr-only">eliminar tag</span>
        </Button>
      )}
    </div>
  );
};
