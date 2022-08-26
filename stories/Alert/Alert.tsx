interface AlertProps {
  /**
   * Type of alert, by default its color grey (notification).
   */
  type: "alert" | "warning" | "valid" | "error";
  /**
   * aria-live required attribute
   */
  "aria-live": "off" | "polite" | "assertive";
  /**
   * Title of the alert, can be optional
   */
  title?: string;
  /**
   * Text of the alert
   */
  text?: string;
  /**
   * Alert children elements.
   */
  children?: React.ReactNode;
}

export const Alert = ({
  "aria-live": ariaLive,
  title,
  text,
  type = "alert",
  children,
  ...props
}: AlertProps) => {
  const variant = {
    alert: "bg-secondary-50 border-secondary-300 text-secondary-600 ",
    error: "bg-alert-50 border-alert-300 text-alert-600",
    warning: "bg-warning-50 border-warning-300 text-warning-600",
    valid: "bg-valid-50 border-valid-300 text-valid-600",
  };

  return (
    <div
      aria-live={ariaLive}
      className={`w-full p-4 border-l-[6px] rounded-md ${variant[type]}`}
      {...props}
    >
      {title && <h3 className="font-semibold">{title}</h3>}
      {text && <p className="text-sm">{text}</p>}
      {children}
    </div>
  );
};
