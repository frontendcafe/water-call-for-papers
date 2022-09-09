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

  /** Left action button. */
  leftActionButton?: React.ReactNode;

  /** Right action button */
  rightActionButton?: React.ReactNode;

  /** If present specify when the component will disappear. Optional value in SECONDS, default value is 10 seconds.
   */
  timer?: number;
}

/**
 * @param {string} title - Component title.
 * @param {string} description - Component description, optional.
 * @param {icon} icon - Icon rendered at left side of title, optional.
 * @param {React.ReactNode}
 * @returns
 */
export const Toast = ({
  title,
  description,
  icon,
  leftActionButton,
  rightActionButton,
  timer = 10,
}: ToastProps) => {
  const [active, setActive] = useState(true);

  // Convert timer parameter from seconds to milliseconds.
  const convertToSeconds = (time: number) => time * 1000;

  // After render run setTimeout, when time is completed set active to false.
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, convertToSeconds(timer));
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

  const ButtonGroup = () => (
    <div className="flex gap-4 h-10">
      {leftActionButton}
      {rightActionButton}
    </div>
  );

  const Title = ({ title }: { title: ToastProps["title"] }) => (
    <h4 className="text-base font-semibold text-primary-600">{title}</h4>
  );

  const Description = ({
    description,
  }: {
    description: ToastProps["description"];
  }) => <p className="text-sm font-normal text-secondary-600">{description}</p>;

  const contentStyle = `flex grow text-base font-semibold ${
    icon ? "gap-2" : "flex-col"
  }`;

  const Content = () => (
    <div className={contentStyle}>
      {icon ? (
        <>
          {icon}
          <div>
            <Title title={title} />
            {description && <Description description={description} />}
          </div>
        </>
      ) : (
        <>
          <Title title={title} />
          {description && <Description description={description} />}
        </>
      )}
    </div>
  );

  return (
    <>
      {active && (
        <div
          role="alert"
          className="flex items-center gap-4 rounded-md shadow-md bg-white border-l-[6px] text-primary-600 p-3 relative mt-[40vh]"
        >
          <Content />
          {(leftActionButton || rightActionButton) && <ButtonGroup />}
          <CloseButton />
        </div>
      )}
    </>
  );
};
