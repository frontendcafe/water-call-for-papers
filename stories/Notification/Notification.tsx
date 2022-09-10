import React, { HTMLAttributes, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface ToastProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "aria-live" | "role"> {
  /** Toast title, mandatory. */
  title: string;

  /** Toast description, optional. */
  description?: string;

  /** Title icon. */
  icon?: React.ReactNode;

  /** Action buttons. */
  children?: React.ReactNode;

  /** Color type,  */
  color?: "warning" | "notification" | "error" | "toast";

  /** If present specify when the component will disappear, has to be in SECONDS */
  timer?: number;
}

export const Notification = ({
  title,
  description,
  icon,
  children,
  timer,
  color = timer ? "toast" : "notification",
  ...props
}: ToastProps) => {
  const [active, setActive] = useState(true);

  // Convert timer parameter from seconds to milliseconds.
  const convertToSeconds = (time: number) => time * 1000;

  // After render evaluate if timer has been defined, if it has, runs setTimeout and set state to false.
  useEffect(() => {
    if (timer) {
      setTimeout(() => setActive(false), convertToSeconds(timer));
    }
  }, []);

  function handleActive() {
    setActive(false);
  }

  const CloseButton = () => (
    <Button
      icon
      variant="transparent"
      onClick={handleActive}
      aria-label="Cerrar notificación"
    >
      <Icon iconName="xMark" className="text-primary-600" aria-hidden />
    </Button>
  );

  const contentStyle = `flex grow font-normal ${icon ? "gap-2" : "flex-col"}`;

  // Return component with specific styles if there is an icon or not.
  const Content = () => {
    const titleStyles = timer ? "text-primary-600" : "text-black";
    const descriptionStyles = timer
      ? "text-secondary-600"
      : "text-secondary-800";
    return (
      <div className={contentStyle}>
        {icon && icon}
        <div>
          <h4 className={`text-lg font-semibold ${titleStyles}`}>{title}</h4>
          {description && (
            <p className={`text-sm ${descriptionStyles}`}>{description}</p>
          )}
        </div>
      </div>
    );
  };

  // Depending on color prop, specify variant type for container element.
  const variant = {
    notification: "bg-secondary-50 border-secondary-300 text-secondary-600",
    warning: "bg-warning-50 border-warning-300 text-warning-600",
    error: "bg-alert-100 border-alert-700 text-alert-700",
    toast:
      "shadow-md text-primary-600 bg-white text-secondary-600 border-primary-600",
  };

  return (
    <>
      {active && (
        <div
          className={`${variant[color]} w-full flex items-center gap-4 border-l-[6px] rounded-md p-4 relative mt-[40vh] `}
          {...props}
        >
          <Content />
          {children && <div className="flex gap-4">{children}</div>}
          {timer && <CloseButton />}
        </div>
      )}
    </>
  );
};
