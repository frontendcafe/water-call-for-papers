import { MouseEvent } from "react";

interface ButtonProps {
  /**
   * Button styles.
   */
  variant?: "primary" | "secondary" | "outlined" | "icon";
  /**
   * Button sizes.
   */
  size?: "small" | "medium" | "large" | "stretched";
  /**
   * Required aria-label to describe the button.
   */
  ariaLabel: string;
  /**
   * Opcional label to describe the button.
   */
  label?: string;
  /**
   * Indicates that the button is disabled, this prevents the button from being clickable.
   */
  disabled?: boolean;
  /**
   * Indicates that the button is in a loading state, this prevents the button from being clickable.
   */
  loading?: boolean;
  /**
   * Button type, in *this case* by default is "type='button'".
   */
  type: "submit" | "reset" | "button";
  /**
   * The icon to display on the button. By default it is displayed to the left of the text (if it exists).
   */
  icon?: React.ReactNode;
  /**
   * The icon to display on the button. By default it is displayed to the right of the text (if it exists).
   */
  rightIcon?: React.ReactNode;
  /**
   * Button rounded corners. Default is "base".
   */
  rounded?: "base" | "md" | "lg";
  /**
   * Click handler required for the button.
   */
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  ariaLabel,
  disabled,
  icon,
  label,
  loading,
  onClickHandler,
  rightIcon,
  rounded = "base",
  size = "medium",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const mode = {
    primary: "bg-[#667080] text-[#FFFFFF] active:bg-[#5d6572]",
    secondary: "bg-[#eef1f4] text-[#667080] active:bg-[#fff1f4]",
    outlined:
      "bg-transparent ring-1 ring-[#667080] text-[#667080] active:bg-[#F5F5F5]",
    icon: "bg-transparent text-[#667080] py-1 px-2 active:bg-[#F5F5F5]",
  };

  const button = {
    small: "px-4 py-2 text-xs",
    medium: "px-5 py-2 text-sm",
    large: "px-6 py-3 text-base",
    stretched: "w-full px-6 py-3 text-base",
  };

  const disabledStyles = disabled
    ? "disabled:cursor-not-allowed disabled:bg-[#b3b8c0] disabled:text-[#FFFFFF]"
    : "";

  const focusStyles =
    "focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-neutral-400";

  const borderRadius = {
    base: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  return (
    <button
      aria-disabled={loading || disabled}
      aria-label={ariaLabel}
      className={` align-middle font-medium ${borderRadius[rounded]} ${focusStyles} ${mode[variant]} ${button[size]} ${disabledStyles}`}
      disabled={loading || disabled}
      type={type}
      onClick={onClickHandler}
      {...props}
    >
      {icon}
      {label && <span className="mx-1 align-middle">{label}</span>}
      {rightIcon}
    </button>
  );
};
