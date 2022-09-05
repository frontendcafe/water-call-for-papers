import { MouseEvent } from "react";
import { Button } from "../Button/Button";
import { XMarkIcon } from "../Icon/Icon.stories";

interface TagProps {
  label: string;
  size?: "sm" | "md" | "lg";
  status?: "approved" | "reprobate" | "review" | "theme" | "format" | "event";
  backgroundClassName?: string;
  textColorClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({
  label,
  size = "md",
  status = "format",
  onClick,
}: TagProps) => {
  const mode = {
    review: "bg-[#F3F3F3] text-[#393939] ",
    approved: "bg-[#D1FADF] text-[#245938]",
    reprobate: "bg-[#FECACA] text-[#A1321A]",
    event: "bg-black/50 backdrop-blur-sm text-[#F3F3F3]",
    theme: "bg-[#EDDFFF] text-[#3B0085]",
    format: "bg-[#E7FFFE] text-[#124C47]",
  };

  const fontSize = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-1 text-base",
    lg: "px-4 py-1 text-lg",
  };

  return (
    <div
      className={`font-medium rounded-full max-w-max flex flex-row justify-between items-center gap-2 ${fontSize[size]}  ${mode[status]}`}
    >
      <span>{label}</span>
      {onClick && (
        <Button size="normal" icon variant="transparent" onClick={onClick}>
          <XMarkIcon size="small" theme="neutral" iconName="xmark" />
          <span className="sr-only">eliminar tag</span>
        </Button>
      )}
    </div>
  );
};
