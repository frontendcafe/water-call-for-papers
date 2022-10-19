import { ChangeEvent, useState } from "react";
import { TextArea } from "../TextArea/TextArea";
import { DayPicker } from "../DayPicker/DayPicker";
import { AccordionDefault } from "../Accordion/Accordion";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";

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
    if (
      (toModify === "EndDate" && isAfter(selectedDate, data.StartDate)) ||
      isEqual(selectedDate, data.StartDate)
    ) {
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
    // TODO When all the text is selected with CTRL + A and the DEL key is pressed, is taken as an error
    // TODO Add support for symbols?
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
    <div className="grid sm:grid-cols-2 gap-4">
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
    <AccordionDefault title="Convocatoria postulantes">
      <div className="grid gap-1">
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
    </AccordionDefault>
  );
};
