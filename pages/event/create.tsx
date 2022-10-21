import React, { useState } from "react";
import { ChangeEvent } from "react";
import Image from "next/image";

import { AccordionDefault } from "../../stories/Accordion/Accordion";
import Select, { SelectValue } from "../../stories/Select/Select";
import RadioButtons from "../../stories/Radio/Radio";
import { DayPicker } from "../../stories/DayPicker/DayPicker";
import { TimePicker } from "../../stories/TimePicker/TimePicker";
import { InputText } from "../../stories/Input/InputText";
import { Button } from "../../stories/Button/Button";
import { TextArea } from "../../stories/TextArea/TextArea";
import { InputFile } from "../../stories/InputFile/InputFile";

import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";

import freepikCharacter from "../../public/img/freepik--Character--inject-25.svg";

import { timezones } from "../../mocks/timezones";
import { checkInputValue } from "../../lib/utils";

const modalityOptions = [
  { title: "Presencial", isDisabled: false },
  { title: "Online", isDisabled: false },
  { title: "Híbrido", isDisabled: false },
];

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

  const [selected, setSelected] = useState<string>(modalityOptions[0].title);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [timeZoneSelected, setTimeZoneSelected] = useState<SelectValue>();

  // booleanos para renderizar o no el mensaje de error
  const [isNotStartTimeValue, setIsNotStartTimeValue] = useState(true);
  const [isNotEndTimeValue, setIsNotEndTimeValue] = useState(true);
  const [isNotStartDateValue, setIsNotStarDateValue] = useState(true);
  const [isNotEndDateValue, setIsNotEndDateValue] = useState(true);
  const [isNotTimeZoneValue, setIsNotTimeZoneValue] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsValues = [
      startTime,
      endTime,
      timeZoneSelected,
      startDate,
      endDate,
    ];
    const isEmptyValue = inputsValues.some(
      (value) => value === undefined || value === null
    );

    checkInputValue(startDate, setIsNotStarDateValue);
    checkInputValue(endDate, setIsNotEndDateValue);
    checkInputValue(timeZoneSelected, setIsNotTimeZoneValue);
    checkInputValue(startTime, setIsNotStartTimeValue);
    checkInputValue(endTime, setIsNotEndTimeValue);
    if (isEmptyValue) {
      e.preventDefault();
      return;
    }
  };
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
    <>
      <div className="flex bg-slate-100">
        <div className="flex flex-1 pt-20 md:pt-4 max-w-[1440px]">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-8 px-4">Crear Evento</h1>

            <form
              className="bg-white p-4 flex flex-col space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="">
                <AccordionDefault title="Fecha y localización">
                  <div className="">
                    <div className=" text-base font-semibold text-gray-900 mb-2">
                      Fechas del evento
                    </div>
                    <div className="flex flex-col sm:flex-row gap-x-4">
                      <div className="flex flex-col flex-1">
                        <DayPicker
                          date={startDate}
                          onChange={setStartDate}
                          label="Fecha de inicio"
                          isValue={isNotStartDateValue}
                          errorMessage="Este Campo es requerido"
                        />
                      </div>
                      <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                        <DayPicker
                          date={endDate}
                          onChange={setEndDate}
                          label="Fecha de finalización"
                          isValue={isNotEndDateValue}
                          errorMessage="Este Campo es requerido"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Select
                      values={timezones}
                      placeholder="Service Design Club"
                      label="TimeZone"
                      isLabelVisible={true}
                      timeZoneSelected={timeZoneSelected}
                      setTimeZoneSelected={setTimeZoneSelected}
                      isValue={isNotTimeZoneValue}
                      errorMessage="Este Campo es requerido"
                    ></Select>
                  </div>

                  <div className="">
                    <div className=" text-base font-semibold text-gray-900 mb-2">
                      Horario del evento
                    </div>
                    <div className="flex flex-col sm:flex-row gap-x-4">
                      <div className="flex-1">
                        <TimePicker
                          id="start-time"
                          label="Hora de inicio"
                          time={startTime}
                          setTime={setStartTime}
                          isValue={isNotStartTimeValue}
                          errorMessage="Este Campo es requerido"
                        />
                      </div>
                      <div className="flex-1 last:mt-8 sm:last:mt-0">
                        <TimePicker
                          id="end-time"
                          label="Hora de finalización"
                          time={endTime}
                          setTime={setEndTime}
                          isValue={isNotEndTimeValue}
                          errorMessage="Este Campo es requerido"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <RadioButtons
                      label="Modalidad (*)"
                      options={modalityOptions}
                      onSelectedChange={(value: string) => setSelected(value)}
                      value={selected}
                      defaultValue={modalityOptions[0].title}
                    ></RadioButtons>
                  </div>
                  <div>
                    <InputText
                      label="Localización"
                      placeholder="Ingrese localización"
                      idValue="localización"
                      description=""
                      value=""
                    />
                  </div>
                </AccordionDefault>
              </div>
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

                <InputFile
                  label="Banner del evento"
                  placeholder="Cargar imagen"
                />
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
              <div className="mt-14">
                <Button>Crear Evento</Button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block relative w-80">
            <div className="sticky top-4 left-0">
              <Image src={freepikCharacter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
