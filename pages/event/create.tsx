import React, { useState } from "react";
import Image from "next/image";

import { AccordionDefault } from "../../stories/Accordion/Accordion";
import Select, { SelectValue } from "../../stories/Select/Select";
import RadioButtons from "../../stories/Radio/Radio";
import { DayPicker } from "../../stories/DayPicker/DayPicker";
import { TimePicker } from "../../stories/TimePicker/TimePicker";
import { InputText } from "../../stories/Input/InputText";
import { SidebarDrawer } from "../../stories/SidebarDrawer/SidebarDrawer";
import { Button } from "../../stories/Button/Button";

import freepikCharacter from "../../public/img/freepik--Character--inject-25.svg";

import { timezones } from "../../mocks/timezones";

const modalityOptions = [
  { title: "Presencial", isDisabled: false },
  { title: "Online", isDisabled: false },
  { title: "Híbrido", isDisabled: false },
];

const CreateEvent = () => {
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
    const inputsValues = [startTime, endTime, startDate, endDate];
    const isEmptyValue = inputsValues.some(
      (value) => value === undefined || value === null
    );

    if (!startTime) {
      setIsNotStartTimeValue(false);
    } else {
      setIsNotStartTimeValue(true);
    }
    if (!endTime) {
      setIsNotEndTimeValue(false);
    } else {
      setIsNotEndTimeValue(true);
    }

    if (!startDate) {
      setIsNotStarDateValue(false);
    } else {
      setIsNotStarDateValue(true);
    }
    if (!endDate) {
      setIsNotEndDateValue(false);
    } else {
      setIsNotEndDateValue(true);
    }

    if (!timeZoneSelected) {
      setIsNotTimeZoneValue(false);
    } else {
      setIsNotTimeZoneValue(true);
    }

    if (isEmptyValue) {
      e.preventDefault();
      return;
    }
    // console.log("submit");
    e.preventDefault();
  };

  return (
    <div className="flex bg-slate-100">
      <SidebarDrawer events={[]} />
      <div className="flex flex-1 pt-20 md:pt-4 max-w-[1440px]">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-8 px-4">Crear Evento</h1>

          <form className="bg-white p-4" onSubmit={handleSubmit}>
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
  );
};

export default CreateEvent;
