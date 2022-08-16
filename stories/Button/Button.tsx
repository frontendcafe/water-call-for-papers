import React, { ButtonHTMLAttributes, MouseEvent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button styles.
   */
  variant?: "primary" | "secondary" | "transparent";
  /**
   * Button sizes.
   */
  size?: "small" | "medium" | "large" | "stretched";
  /**
   * Indicates that the button is disabled, this prevents the button from being clickable.
   */
  disabled?: boolean;
  /**
   * Indicates that the button is in a loading state, this prevents the button from being clickable.
   */
  loading?: boolean;
  /**
   * Button rounded corners. Default is "md".
   */
  rounded?: "small" | "medium" | "full";
  /**
   * Click handler required for the button.
   */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button text content or/and icon.
   */
  children?: React.ReactNode;
  /**
   * Applies styles to the button to render a only an icon and hides the text content.
   */
  icon?: boolean;
}

/**
 * A button that can be styled in a variety of ways.
 * @param {React.ReactNode} children - The content of the button, can be text or icon, or both.
 * @param {boolean} disabled - The disabled state of the button, this prevents the button from being clickable.
 * @param {boolean} icon - The content of the button.
 * @param {boolean} loading - Triggers the disabled state of the button, this prevents the button from being clickable.
 * @param {function} onClick - The click handler for the button.
 * @param {string} rounded - The rounded corners of the button, small, medium, or full (circle in icons).
 * @param {string} size - The size of the button, can be small, medium, large, or stretched (takes all width of parent).
 * @param {string} variant - The variant of the button, can be primary, secondary, or transparent.
 */
export const Button = ({
  children,
  disabled,
  icon,
  loading,
  onClick,
  rounded = icon ? "full" : "small",
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const mode = {
    primary: "bg-[#667080] text-[#FFFFFF] active:bg-[#5d6572]",
    secondary:
      "bg-transparent ring-1 ring-[#667080] text-[#667080] active:bg-[#F5F5F5]",
    transparent: "bg-transparent text-[#667080] active:bg-[#F5F5F5]",
  };

  const button = {
    small: icon ? "p-1" : "text-xs px-6 py-2 ",
    medium: icon ? "p-2" : "text-base px-8 py-2 ",
    large: icon ? "p-4" : "text-lg px-12 py-2 ",
    // TODO: Come back to this later.
    stretched: icon ? "p-2 w-full" : "px-6 py-2 w-full",
  };

  const disabledStyles =
    "disabled:cursor-not-allowed disabled:bg-[#ADB2BA] disabled:text-[#FFFFFF]";

  const focusStyles =
    "focus:outline-2 focus:ring-1 focus:ring-[#BAC0CA] focus:outline-offset-2 focus:outline-dashed focus:outline-neutral-400";

  const borderRadius = {
    small: "rounded-md",
    medium: "rounded-xl",
    full: "rounded-full",
  };

  const alignmentStyles = "inline-flex items-center justify-center gap-1";

  return (
    <button
      className={`${alignmentStyles} font-bold ${borderRadius[rounded]} ${focusStyles} ${mode[variant]} ${button[size]} ${disabledStyles}`}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {React.Children.map(children, (child) =>
        typeof child === "string" ? (
          <span className={`${icon ? "sr-only" : ""} whitespace-nowrap`}>
            {child}
          </span>
        ) : (
          child
        )
      )}
    </button>
  );
};
