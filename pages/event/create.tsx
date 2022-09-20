import React, { useState } from "react";
import Image from "next/image";
import { AccordionDefault } from "../../stories/Accordion/Accordion";
import Select from "../../stories/Select/Select";
import { timezones } from "../../mocks/timezones";
import RadioButtons from "../../stories/Radio/Radio";
import { DayPicker } from "../../stories/DayPicker/DayPicker";
import { TimePicker } from "../../stories/TimePicker/TimePicker";
import { InputText } from "../../stories/Input/InputText";
import { SidebarDrawer } from "../../stories/SidebarDrawer/SidebarDrawer";
import freepikCharacter from "../../public/img/freepik--Character--inject-25.svg";

const options = [
  { title: "Presencial", isDisabled: false },
  { title: "Online", isDisabled: false },
  { title: "Híbrido", isDisabled: false },
];

interface TimeOptions {
  hour: "2-digit";
  minute: "2-digit";
}

const CreateEvent = () => {
  const formatTimeOptions: TimeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const DATE = new Date().toLocaleTimeString("es-ES", formatTimeOptions);
  const [selected, setSelected] = useState<string>(options[0].title);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>(DATE);
  const [endTime, setEndTime] = useState<string>(DATE);

  return (
    <div className="flex bg-slate-100">
      <SidebarDrawer events={[]} />
      <div className="flex flex-1 pt-20 md:pt-4 max-w-[1440px]">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-8 px-4">Crear Evento</h1>

          <form className="bg-white p-4">
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
                      <TimePicker
                        id="start-time"
                        label="Hora de inicio"
                        time={startTime}
                        setTime={setStartTime}
                      />
                    </div>
                    <div className="flex flex-col flex-1 last:mt-8 sm:last:mt-0">
                      <TimePicker
                        id="end-time"
                        label="Hora de finalización"
                        time={endTime}
                        setTime={setEndTime}
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
