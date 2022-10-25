import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import { tw } from "../../lib/utils";
import { Spinner } from "../Spinner/Spinner";

interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "aria-label" | "aria-controls" | "type"
  > {
  /**
   * Button styles.
   */
  variant?: "primary" | "secondary" | "transparent" | "disclosure";
  /**
   * Button sizes.
   */
  size?: "small" | "normal" | "stretched";
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
  rounded?: "medium" | "full";
  /**
   * Click handler required for the button.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button text content or/and icon.
   */
  children?: React.ReactNode;
  /**
   * Applies styles to the button to render a only an icon and hides the text content.
   */
  icon?: boolean;
  classNames?: string;
  name?: string;
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
 * @param {string} classNames - Extra classNames.
 */
export const Button = ({
  children,
  disabled,
  icon,
  loading,
  onClick,
  rounded = icon ? "full" : "medium",
  size = "normal",
  variant = "primary",
  classNames = "",
  name = "button",
  ...props
}: ButtonProps) => {
  const mode = {
    primary: tw(
      "bg-primary-500 text-white",
      "hover:bg-primary-600",
      "focus:bg-primary-700",
      "active:bg-primary-800",
      "disabled:bg-secondary-50"
    ),
    secondary: tw(
      "bg-primary-50 text-primary-700",
      "hover:bg-primary-100",
      "focus:bg-primary-200",
      "active:bg-primary-300",
      "disabled:bg-white",
      "ring-1 ring-primary-700 disabled:ring-secondary-200"
    ),

    transparent: tw(
      "bg-transparent text-primary-500",
      "hover:bg-primary-50 hover:text-primary-700",
      "focus:bg-primary-200 focus:text-primary-700",
      "active:bg-primary-300 active:text-primary-700",
      "disabled:bg-transparent"
    ),

    disclosure: tw(
      "bg-primary-200 text-primary-900 text-xl",
      "hover:bg-primary-500",
      "focus:bg-primary-200",
      "active:bg-primary-200",
      "disabled:bg-secondary-50"
    ),
  };

  const button = {
    small: icon ? "" : "px-4 py-2",
    normal: icon ? "p-1" : "px-6 py-4",
    // NOTE: Maybe we can add 'stretched' as a boolean to be able to use it with
    // both 'small' and 'normal' sizes. It may break some components already using it.
    stretched: icon ? "p-1 w-full" : "py-4 w-full",
  };

  const statesStyles =
    "focus:outline-none active:shadow-md disabled:text-secondary-300 disabled:cursor-not-allowed";

  const borderRadius = {
    medium: "rounded-xl",
    full: "rounded-full",
  };

  const alignmentStyles = `inline-flex items-center ${
    variant === "disclosure"
      ? "justify-between px-4 py-3.5"
      : "justify-center gap-1"
  }`;

  return (
    <button
      name={name}
      className={tw(
        "font-medium text-base whitespace-nowrap",
        "transition-[colors,_drop_shadow] duration-100",
        alignmentStyles,
        borderRadius[rounded],
        button[size],
        mode[variant],
        statesStyles,
        classNames
      )}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {children}
      {loading && <Spinner />}
    </button>
  );
};
