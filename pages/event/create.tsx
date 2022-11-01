import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";

import { AccordionDefault } from "../../stories/Accordion/Accordion";
import { Button } from "../../stories/Button/Button";
import { DayPicker } from "../../stories/DayPicker/DayPicker";
import { InputText } from "../../stories/Input/InputText";
import { InputFile } from "../../stories/InputFile/InputFile";
import { RadioButtons, SelectedOption } from "../../stories/Radio/Radio";
import Select, { SelectValue } from "../../stories/Select/Select";
import { TextArea } from "../../stories/TextArea/TextArea";
import { TimePicker } from "../../stories/TimePicker/TimePicker";

import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";

import freepikCharacter from "../../public/img/freepik--Character--inject-25.svg";

import { createEvent, createTopic, getAllTopics } from "../../lib/api-handlers";
import { checkInputValue } from "../../lib/utils";
import { timezones } from "../../mocks/timezones";
import ComboboxComponent from "../../stories/Combobox/Combobox";
import { Icon } from "../../stories/Icon/Icon";
import { Notification } from "../../stories/Notification/Notification";
import { EventData, EventStatus, EventType } from "../../types/events-types";

const modalityOptions = [
  { title: "Presencial", isDisabled: false, value: EventType.Presencial },
  { title: "Online", isDisabled: false, value: EventType.Virtual },
  { title: "Híbrido", isDisabled: false, value: EventType.Hibrido },
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
    Location: "",
  });

  const [dataError, setDataError] = useState({
    EventName: "",
    OrganizationName: "",
    Themes: "",
    Description: "",
    Requirements: "",
    Location: "",
  });

  const [selected, setSelected] = useState<SelectedOption>(modalityOptions[0]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [timeZoneSelected, setTimeZoneSelected] = useState<SelectValue>();

  const [topics, setTopics] = useState<{ id: string; label: string }[]>();
  const [topicsSelected, setTopicsSelected] = useState<Set<string>>();

  // booleanos para renderizar o no el mensaje de error
  const [isNotStartTimeValue, setIsNotStartTimeValue] = useState(true);
  const [isNotEndTimeValue, setIsNotEndTimeValue] = useState(true);
  const [isNotStartDateValue, setIsNotStarDateValue] = useState(true);
  const [isNotEndDateValue, setIsNotEndDateValue] = useState(true);
  const [isNotTimeZoneValue, setIsNotTimeZoneValue] = useState(true);

  const [showNotificationError, setShowNotificationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllTopics()
      // @ts-ignore
      .then((res: { data: { id: string; description: string }[] }) => {
        const topicsSet: { id: string; label: string }[] = [];
        if (res.data) {
          res.data.map(({ id, description }) =>
            topicsSet.push({ id, label: description })
          );
        }
        return setTopics(topicsSet);
      })
      .catch(() => setTopics([]));
  }, []);

  const createTopicHandler = async (value: string) => {
    try {
      await createTopic({ description: value });
      const newTopicsSelected = new Set(topicsSelected);
      newTopicsSelected.add(value);
      setTopicsSelected(newTopicsSelected);
    } catch (error) {
      setShowNotificationError(true);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    status: EventStatus = EventStatus.EnCurso
  ) => {
    setShowNotificationError(false);
    setIsLoading(true);
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
      return;
    }

    const event: EventData = {
      name: data.EventName,
      type: selected.value as EventType,
      description: data.Description,
      talks: [],
      startingDate: new Date(),
      endDate: new Date(),
      bannerUrl: "/img/placeholder.png",
      location: data.Location,
      organizers: [{ fullName: data.OrganizationName, email: "test@fec.com" }],
      status,
      proposalsStartingDate: startDate!,
      proposalsEndDate: endDate!,
      timezone:
        timeZoneSelected?.value ??
        timezones.find((tz) => tz.name.includes("Buenos Aires"))?.value!,
    };

    try {
      await createEvent(event);
      // router.push("/event/list");
    } catch (error) {
      setShowNotificationError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleValidation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9\s]+$/g);
    const validation = regex.test(e.target.value);
    if (
      [
        "OrganizationName",
        "EventName",
        "Description",
        "Requirements",
        "Location",
      ].includes(e.currentTarget.name)
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
    <div className="flex flex-col flex-1 mx-auto pt-14 md:px-10 lg:container md:py-8">
      <h1 className="px-4 py-4 mb-4 text-3xl font-semibold md:px-0">
        Crear Evento
      </h1>
      <div className="flex bg-white md:rounded-xl">
        <form
          className="flex flex-col flex-1 p-4 space-y-4 lg:col-span-9"
          onSubmit={handleSubmit}
        >
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
            <ComboboxComponent
              id="topics"
              label="Temas (*)"
              actionLabel={
                <button className="flex flex-row gap-2 text-blue-600">
                  <Icon iconName="plus" size="medium" />
                  <span>Crear tema</span>
                </button>
              }
              placeholder="Ingrese hasta 5 temas"
              valuesSelected={topicsSelected!}
              options={topics}
              onChange={setTopicsSelected}
              actionHandler={createTopicHandler}
              noOptionsLabel={"Aún no hay temas"}
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
          <AccordionDefault title="Fecha y localización">
            <div className="">
              <div className="mb-2 text-base font-semibold text-gray-900 ">
                Fechas del evento
              </div>
              <div className="flex flex-col sm:flex-row gap-x-4">
                <div className="flex flex-col flex-1">
                  <DayPicker
                    placeholder="dd/mm/aaaa"
                    id={"fecha-inicio"}
                    date={startDate}
                    onChange={setStartDate}
                    label="Fecha de inicio"
                    isValue={isNotStartDateValue}
                    errorMessage="Este Campo es requerido"
                  />
                </div>
                <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                  <DayPicker
                    placeholder="dd/mm/aaaa"
                    id={"fecha-finalizacion"}
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
                placeholder="Seleccionar huso horario"
                label="TimeZone"
                isLabelVisible={true}
                timeZoneSelected={timeZoneSelected}
                setTimeZoneSelected={setTimeZoneSelected}
                isValue={isNotTimeZoneValue}
                errorMessage="Este Campo es requerido"
              ></Select>
            </div>
            <div className="">
              <div className="mb-2 text-base font-semibold text-gray-900 ">
                Horario del evento
              </div>
              <div className="flex flex-col sm:flex-row gap-x-4">
                <div className="flex-1">
                  <TimePicker
                    placeholder="00:00"
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
                    placeholder="00:00"
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
                onSelectedChange={(value: SelectedOption) => setSelected(value)}
                value={selected}
                defaultValue={modalityOptions[0].value}
              ></RadioButtons>
            </div>
            <div className="pb-6">
              <InputText
                label="Localización"
                placeholder="Ingrese localización"
                idValue="Location"
                value={data.Location}
                onChange={handleValidation}
                error={dataError.Location}
              />
            </div>
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
              <div className="grid gap-4 sm:grid-cols-2">
                <DayPicker
                  placeholder="dd/mm/aaaa"
                  id={"fecha-inicio-postulacion"}
                  date={data.StartDate}
                  label="Fecha de inicio"
                  onChange={(date) => handleDateChange(date, "StartDate")}
                  isValue={true}
                  errorMessage={""}
                />
                <DayPicker
                  placeholder="dd/mm/aaaa"
                  id={"fecha-finalizacion-postulacion"}
                  date={data.EndDate}
                  label="Fecha de finalización"
                  onChange={(date) => handleDateChange(date, "EndDate")}
                  isValue={true}
                  errorMessage={""}
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
          <div className="flex justify-between gap-4 mt-14">
            <Button
              name="borrador"
              disabled={true}
              variant="secondary"
              classNames="w-1/2"
            >
              Guardar borrador
            </Button>
            <Button classNames="w-1/2" name="crear" loading={isLoading}>
              Crear Evento
            </Button>
          </div>
          {showNotificationError && (
            <Notification
              title="Algo salió Mal"
              description="Hubo un problema al enviar el formulario. Por favor vuelve a intentarlo."
              color="error"
            />
          )}
        </form>
        <div className="relative hidden lg:block lg:w-1/3 xl:w-auto">
          <div className="sticky left-0 px-8 mt-8">
            <Image src={freepikCharacter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
