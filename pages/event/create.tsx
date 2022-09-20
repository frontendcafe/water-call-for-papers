import React, { useState } from "react";
import { AccordionDefault } from "../../stories/Accordion/Accordion";
import Select from "../../stories/Select/Select";
import { timezones } from "../../mocks/timezones";
import RadioButtons from "../../stories/Radio/Radio";
import { DayPicker } from "../../stories/DayPicker/DayPicker";
import { TimePicker } from "../../stories/TimePicker/TimePicker";
import { InputText } from "../../stories/Input/InputText";

const options = [
  { title: "Presencial", isDisabled: false },
  { title: "Online", isDisabled: false },
  { title: "Híbrido", isDisabled: false },
];

const CreateEvent = () => {
  const [selected, setSelected] = useState<string>(options[0].title);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>(
    new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [endTime, setEndTime] = useState<string>(
    new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  return (
    <form>
      <input type="text" />
      <div className="p-4">
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
                />
              </div>
              <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                <DayPicker
                  date={endDate}
                  onChange={setEndDate}
                  label="Fecha de finalización"
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
            ></Select>
          </div>

          <div className="">
            <div className=" text-base font-semibold text-gray-900 mb-2">
              Horario del evento
            </div>
            <div className="flex flex-col sm:flex-row gap-x-4">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="start-time"
                  className={`text-sm  text-gray-900 `}
                >
                  Hora de inicio
                </label>
                <TimePicker time={startTime} onChange={setStartTime} />
              </div>
              <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                <label htmlFor="end-time" className={`text-sm  text-gray-900 `}>
                  Hora de finalización
                </label>
                <TimePicker time={endTime} onChange={setEndTime} />
              </div>
            </div>
          </div>
          <div>
            <RadioButtons
              label="Modalidad (*)"
              options={options}
              onSelectedChange={(value: string) => setSelected(value)}
              value={selected}
              defaultValue={options[0].title}
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
    </form>
  );
};

export default CreateEvent;
