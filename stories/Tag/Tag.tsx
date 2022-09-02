import { MouseEvent } from "react";
import { Button } from "../Button/Button";
import { XMarkIcon } from "../Icon/Icon.stories";

interface TagProps {
  label: string;
  size?: string;
  backgroundClassName?: string;
  textColorClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({
  label,
  size,
  backgroundClassName,
  textColorClassName,
  onClick,
}: TagProps) => {
  return (
    <div
      className={`font-medium rounded-full py-1 px-2 max-w-max flex flex-row justify-between items-center gap-2 text-${size}  text-${textColorClassName}  bg-${backgroundClassName}`}
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
