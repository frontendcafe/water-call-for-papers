import { MouseEvent } from "react";

interface ButtonProps {
  /**
   * Estilos de botón.
   */
  variant?: "primary" | "secondary" | "outlined" | "icon";
  /**
   * Tamaño del botón
   */
  size?: "small" | "medium" | "large" | "stretched";
  /**
   * Label requerida para describir el botón.
   */
  ariaLabel: string;
  /**
   * Label opcional para describiendo el botón.
   */
  label?: string;
  /**
   * Indica que el botón esta deshabilitad, esto previene que se pueda hacer click en el botón.
   */
  disabled?: boolean;
  /**
   * Indica que el botón esta cargando, esto previene que se pueda hacer click en el botón.
   */
  loading?: boolean;
  /**
   * Tipo de botón, en este caso por defecto es "button".
   */
  type: "submit" | "reset" | "button";
  /**
   * El icono para mostrar en el botón. Por defecto se muestra a la izquierda del texto (si este existe).
   */
  icon?: React.ReactNode;
  /**
   * El icono para mostrar en el botón. Por defecto se muestra a la derecha del texto (si este existe).
   */
  rightIcon?: React.ReactNode;
  /**
   * Borde redondeado del botón. Por defecto es "md".
   */
  rounded?: "base" | "md" | "lg";
  /**
   * Click handler requerido para el botón
   */
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;

  children?: React.ReactNode;

  // TODO: These two are only for the storybook. Remove it when we have a proper styles for it.
  /**
   * Color de fondo de botón
   */
  backgroundColor?: string;
  /**
   * Color de texto de botón
   */
  color?: string;
}

export const Button = ({
  ariaLabel,
  backgroundColor,
  children,
  color,
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
      style={{ backgroundColor, color }}
      type={type}
      onClick={onClickHandler}
      {...props}
    >
      {icon}
      {label ? <span className="mx-1 align-middle">{label}</span> : children}
      {rightIcon}
    </button>
  );
};
