import { ChangeEvent, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { TextArea } from "../TextArea/TextArea";
import { DayPicker } from "../DayPicker/DayPicker";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";

export const AccordionTres = (): JSX.Element => {
  const [data, setData] = useState({
    StartDate: new Date(),
    EndDate: new Date(),
    Requirements: "",
  });

  const [dataError, setDataError] = useState({
    Requirements: "",
  });

  const handleDateChange = (date: Date, toModify: string) => {
    const selectedDate = new Date(date);
    if (toModify === "EndDate" && isAfter(selectedDate, data.StartDate)) {
      setData({ ...data, [toModify]: selectedDate });
    }
    if (toModify === "StartDate") {
      setData({ ...data, StartDate: selectedDate, EndDate: selectedDate });
      if (isBefore(selectedDate, data.EndDate)) {
        setData({ ...data, StartDate: selectedDate });
      }
    }
  };

  const handleValidation = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // TODO When all the text is selected with CTRL + A and the DEL key is pressed, is taken as an error.
    const regex = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9\s]+$/g);
    const validation = regex.test(event.target.value);

    if (validation) {
      setData({
        ...data,
        [event.currentTarget.name]: event.target.value,
      });
      setDataError({ Requirements: "" });
    } else {
      setDataError({
        ...dataError,
        Requirements: "Este campo solo puede contener letras y números.",
      });
    }
  };

  const BtnDisclosure = ({ openStatus }: { openStatus: boolean }) => (
    <Disclosure.Button as={Button} variant="disclosure" size="stretched">
      Convocatoria postulantes
      {openStatus ? (
        <Icon iconName="chevronDown" />
      ) : (
        <Icon iconName="chevronUp" />
      )}
    </Disclosure.Button>
  );

  const Information = () => (
    <div className="grid gap-0.5">
      <p className="text-base font-semibold">Período de postulación (*)</p>
      <p className="text-xs">
        Durante este período los speakers podrán postularse para participar de
        tu evento.
      </p>
    </div>
  );

  const DayPickers = () => (
    <div className="sm:grid sm:grid-cols-2 gap-4">
      <DayPicker
        date={data.StartDate}
        label="Fecha de inicio"
        onChange={(date) => handleDateChange(date, "StartDate")}
      />
      <DayPicker
        date={data.EndDate}
        label="Fecha de finalización"
        onChange={(date) => handleDateChange(date, "EndDate")}
      />
    </div>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <BtnDisclosure openStatus={open} />
          <form>
            <Disclosure.Panel as="div" className="grid gap-4">
              <div className="grid gap-1 grow mt-4">
                <Information />
                <DayPickers />
              </div>
              <TextArea
                label="Requisitos de los postulantes (*)"
                isLabelVisible
                idValue="Requirements"
                maxLength={500}
                placeholder={
                  "Indique qué requisitos deben cumplir las personas interesadas para ser admitidas."
                }
                rows={6}
                value={data.Requirements}
                onChange={handleValidation}
                error={dataError.Requirements}
              />
            </Disclosure.Panel>
          </form>
        </>
      )}
    </Disclosure>
  );
};
