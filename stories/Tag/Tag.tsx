import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export interface TagProps {
  label: string;
  size?: keyof typeof fontSize;
  status?: keyof typeof mode;
  isSelected?: boolean;
  onClick?(value: string): void;
  onDelete?(value: string): void;
}

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

const TagWrapper = ({
  onClick,
  children,
}: {
  onClick?(): void;
  children: React.ReactNode;
}) => {
  return onClick ? (
    <Button size="normal" icon variant="transparent" onClick={onClick}>
      {children}
    </Button>
  ) : (
    <>{children}</>
  );
};

export const Tag = ({
  label,
  size = "md",
  status = "format",
  isSelected = false,
  onClick = undefined,
  onDelete = undefined,
}: TagProps) => {
  const classNames = `font-medium rounded-full max-w-max flex flex-row justify-between items-center gap-2 ${fontSize[size]} ${mode[status]}`;
  return (
    <TagWrapper onClick={onClick && (() => onClick(label))}>
      {onDelete ? (
        <div className={classNames}>
          <span>{label}</span>
          <Button
            size="normal"
            icon
            variant="transparent"
            onClick={() => onDelete(label)}
          >
            <Icon size="small" iconName="xMark" />
            <span className="sr-only">eliminar tag</span>
          </Button>
        </div>
      ) : (
        <div className={classNames}>
          <span>{label}</span>
          {isSelected && (
            <>
              <Icon size="small" iconName="check" />
              <span className="sr-only">tag seleccionada</span>
            </>
          )}
        </div>
      )}
    </TagWrapper>
  );
};
