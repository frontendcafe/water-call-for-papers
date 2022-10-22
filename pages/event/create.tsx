import { ChangeEvent, useState } from "react";
import { InputText } from "../../stories/Input/InputText";
import { TextArea } from "../../stories/TextArea/TextArea";
import { InputFile } from "../../stories/InputFile/InputFile";
import { AccordionDefault } from "../../stories/Accordion/Accordion";
import { DayPicker } from "../../stories/DayPicker/DayPicker";

import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";

const Create = () => {
  const [data, setData] = useState({
    EventName: "",
    OrganizationName: "",
    Themes: "",
    Description: "",
    StartDate: new Date(),
    EndDate: new Date(),
    Requirements: "",
  });
  const [dataError, setDataError] = useState({
    EventName: "",
    OrganizationName: "",
    Themes: "",
    Description: "",
    Requirements: "",
  });

  const handleValidation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9\s]+$/g);
    const validation = regex.test(e.target.value);

    if (
      ["OrganizationName", "EventName", "Description", "Requirements"].includes(
        e.currentTarget.name
      )
    ) {
      setData({ ...data, [e.currentTarget.name]: e.target.value });
      if (!validation) {
        setDataError({
          ...dataError,
          [e.currentTarget.name]:
            "Este campo solo puede tener letras y numeros",
        });
      } else {
        setDataError({ ...dataError, [e.currentTarget.name]: "" });
      }
    }
  };

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

  return (
    <form className="grid gap-14 mx-auto w-full lg:max-w-xl bg-white">
      <AccordionDefault title="Datos Generales">
        <InputText
          label="Nombre de la organización (*)"
          placeholder="Ingrese el nombre de la organización"
          idValue="OrganizationName"
          value={data.OrganizationName}
          onChange={handleValidation}
          error={dataError.OrganizationName}
          maxLength={50}
          description="Máximo 50 caracteres"
          required
        />

        <InputText
          label="Nombre del evento (*)"
          placeholder="Ingrese el nombre del evento"
          idValue="EventName"
          value={data.EventName}
          onChange={handleValidation}
          error={dataError.EventName}
          maxLength={50}
          description="Máximo 50 caracteres"
          required
        />

        {/* Agregar componente para los temas */}

        <InputText
          label="Temas (*)"
          placeholder="Ingrese hasta 5 temas"
          idValue="Themes"
          value={data.Themes}
          onChange={handleValidation}
          required
        />

        <TextArea
          label="Descripción (*)"
          value={data.Description}
          placeholder="El evento se trata de..."
          idValue="Description"
          isLabelVisible={true}
          onChange={handleValidation}
          error={dataError.Description}
          maxLength={280}
          description="Máximo 280 caracteres"
          required
        />

        <InputFile label="Banner del evento" placeholder="Cargar imagen" />
      </AccordionDefault>

      <AccordionDefault title="Convocatoria postulantes">
        <div className="grid gap-1">
          <div className="grid gap-0.5">
            <p className="text-base font-semibold">
              Período de postulación (*)
            </p>
            <p className="text-xs">
              Durante este período los speakers podrán postularse para
              participar de tu evento.
            </p>
          </div>
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
    </form>
  );
};

export default Create;
