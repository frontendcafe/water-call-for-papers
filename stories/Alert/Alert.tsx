import { HTMLAttributes } from "react";

type AllowAttrib = "aria-live" | "role";
interface AlertProps extends Pick<HTMLAttributes<HTMLDivElement>, AllowAttrib> {
  /**
   * Type of alert, by default its color grey (notification).
   */
  type: "notification" | "warning";
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
  title,
  text,
  type = "notification",
  children,
  ...props
}: AlertProps) => {
  const variant = {
    notification: "bg-secondary-50 border-secondary-300 text-secondary-600 ",
    warning: "bg-warning-50 border-warning-300 text-warning-600",
  };

  return (
    <div
      className={`w-full p-4 border-l-[6px] rounded-md ${variant[type]}`}
      {...props}
    >
      {title && <h3 className="font-semibold">{title}</h3>}
      {text && <p className="text-sm">{text}</p>}
      {children}
    </div>
  );
};
