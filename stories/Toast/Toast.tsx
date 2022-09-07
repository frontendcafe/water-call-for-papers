import React, { HTMLAttributes, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface Content {
  /** Toast title. */
  title: string;

  /** Toast description. */
  description?: string;

  /** Title icon. */
  icon?: React.ReactNode;
}

interface ActionButtons {
  /** Left button */
  leftSideBtn?: React.ReactNode;

  /** Right button */
  rightSideBtn?: React.ReactNode;
}

interface ToastProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "aria-live" | "role"> {
  /** Children, text, button, link, or a combination.
   */
  content: Content;

  /** Action buttons. */
  actionButtons?: ActionButtons;

  /** If present specify when the component will disappear. Optional value in SECONDS, default value is 10 seconds.
   */
  timer?: number;
}

// Tiene que ser anunciado por los lectores de pantalla

export const Toast = ({
  content,
  actionButtons,
  timer = 10000,
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
    <Button icon variant="transparent" onClick={handleActive}>
      <Icon
        iconName="xMark"
        className="text-[#4B64EF]"
        aria-label="Icono para cerrar Toast"
      />
    </Button>
  );

  const ButtonGroup = () => (
    <div className="flex gap-4 h-10">
      {actionButtons?.leftSideBtn}
      {actionButtons?.rightSideBtn}
    </div>
  );

  const Title = ({ text }: { text: string }) => (
    <h4 className="text-base font-semibold text-[#4B64EF]">{text}</h4>
  );

  const Description = ({ text }: { text: string }) => (
    <p className="text-sm font-normal text-[#727272]">{text}</p>
  );

  return (
    <>
      {active && (
        <div
          role="alert"
          className="flex items-center gap-4 rounded-md shadow-md bg-[#FFFFFF] border-l-[6px] border-[#4B64EF] p-3"
        >
          <div className="grow text-base font-semibold flex gap-2">
            {content.icon}
            <div className="flex flex-col">
              <Title text={content.title} />
              {content.description && (
                <Description text={content.description} />
              )}
            </div>
          </div>
          {actionButtons && <ButtonGroup />}
          <CloseButton />
        </div>
      )}
    </>
  );
};
