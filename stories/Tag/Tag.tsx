import { MouseEvent } from "react";
import { Button } from "../Button/Button";
import { XMarkIcon } from "../Icon/Icon.stories";

interface TagProps {
  label: string;
  size?: string;
  backgroundColor?: string;
  color?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({
  label,
  size,
  backgroundColor,
  color,
  onClick,
}: TagProps) => {
  return (
    <div
      className={`font-medium rounded-full py-1 px-2 max-w-max flex flex-row justify-between items-center gap-2 text-${size}  text-${color}  bg-${backgroundColor}`}
    >
      <span>{label}</span>
      {onClick && (
        <Button size="normal" icon variant="transparent" onClick={onClick}>
          <XMarkIcon size="small" theme="neutral" iconName="xmark" />
        </Button>
      )}
    </div>
  );
};
