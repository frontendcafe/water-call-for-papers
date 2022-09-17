import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { AccordionDefault } from "../../stories/Accordion/Accordion";
import Select from "../../stories/Select/Select";
import { timezones } from "../../mocks/timezones";
import RadioButtons from "../../stories/Radio/Radio";
import { InputText } from "../../stories/Input/InputText";

const options = [
  { title: "Presencial", isDisabled: false },
  { title: "Online", isDisabled: false },
  { title: "Híbrido", isDisabled: false },
];

const CreateEvent = () => {
  const [selected, setSelected] = useState<string>(options[0].title);
  const refInputStartDate = useRef(null);
  const refInputEndTime = useRef(null);

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
                <label
                  htmlFor="start-date"
                  className={`text-sm  text-gray-900  `}
                >
                  Fecha de inicio
                </label>

                <input
                  ref={refInputStartDate}
                  name="start-date"
                  id="start-date"
                  className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
                  type="date"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                <label htmlFor="end-date" className={`text-sm  text-gray-900 `}>
                  Fecha de finalización
                </label>
                <input
                  name="end-date"
                  id="end-date"
                  className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
                  type="date"
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
                <input
                  name="start-time"
                  id="start-time"
                  className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
                  type="time"
                />
              </div>
              <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                <label htmlFor="end-time" className={`text-sm  text-gray-900 `}>
                  Hora de finalización
                </label>
                <input
                  ref={refInputEndTime}
                  name="end-time"
                  id="end-time"
                  className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
                  type="time"
                />
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
          <div></div>
        </AccordionDefault>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CreateEvent;
