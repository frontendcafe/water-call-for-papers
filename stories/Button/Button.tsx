import { ButtonHTMLAttributes, MouseEvent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
   * Indicates that the button is disabled, this prevents the button from being clickable.
   */
  disabled?: boolean;
  /**
   * Indicates that the button is in a loading state, this prevents the button from being clickable.
   */
  loading?: boolean;
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

  children?: React.ReactNode;
}

export const Button = ({
  ariaLabel,
  children,
  disabled,
  icon,
  loading,
  onClickHandler,
  rightIcon,
  rounded = "base",
  size = "medium",
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

  const disabledStyles =
    "disabled:cursor-not-allowed disabled:bg-[#b3b8c0] disabled:text-[#FFFFFF]";

  const focusStyles =
    "focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-neutral-400";

  const borderRadius = {
    base: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`align-middle font-medium ${borderRadius[rounded]} ${focusStyles} ${mode[variant]} ${button[size]} ${disabledStyles}`}
      disabled={loading || disabled}
      onClick={onClickHandler}
      {...props}
    >
      {icon}
      {children && <span className="mx-1 align-middle">{children}</span>}
      {rightIcon}
    </button>
  );
};
