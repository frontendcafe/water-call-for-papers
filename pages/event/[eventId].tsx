import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getEventById } from "../../lib/api-handlers";
import { Spinner } from "../../stories/Spinner/Spinner";
import { EventData } from "../../types/events-types";
import { Icon } from "../../stories/Icon/Icon";
import { getDate, getTime } from "../../lib/utils";
import { TabsGroup } from "../../stories/TabsGroup/TabsGroup";
import { TabsList } from "../../stories/TabsGroup/TabsList";
import { Tab } from "../../stories/TabsGroup/Tab";
import { TabsPanels } from "../../stories/TabsGroup/TabsPanels";
import { TabsPanel } from "../../stories/TabsGroup/TabsPanel";
import Header from "../../components/Header";

const EventPage: NextPage = () => {
  const {
    query: { eventId },
  } = useRouter();

  const [event, setEvent] = useState<EventData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    if (!eventId) return;
    getEventById(String(eventId))
      .then(({ data }) => {
        setEvent(data as EventData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [eventId]);

  if (isLoading || !eventId) {
    return (
      <div className="grid h-screen place-content-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <>{JSON.stringify({ error })}</>;
  }

  const tabs = [
    {
      type: "Resumen",
      disabled: false,
    },
    {
      type: "Postulaciones",
      disabled: true,
    },
    {
      type: "Calendario",
      disabled: true,
    },
  ];

  return (
    <div className="pt-16 md:py-10 md:px-10">
      <Header title={event?.name ?? "Evento"} />
      <TabsGroup>
        <TabsList>
          {tabs.map(({ type, disabled }) => (
            <Tab key={type} disabled={disabled}>
              {type}
            </Tab>
          ))}
        </TabsList>
        <TabsPanels>
          {/* Begin Tab Resumen */}
          <TabsPanel>
            <section className="container flex flex-col gap-6 p-6 bg-white rounded-tl-none md:items-start md:flex-row rounded-xl md:mx-auto">
              <div className="flex flex-col flex-1 gap-6 px-3 py-4 bg-secondary-50 rounded-xl">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-normal">Organiza:</h4>
                    <span className="px-2 py-1 text-xs text-white rounded-full bg-secondary-600">
                      {typeof event?.daysLeft === "number"
                        ? `Faltan ${event?.daysLeft} días`
                        : event?.daysLeft}
                    </span>
                  </div>
                  <h2 className="mt-1 text-lg font-bold">
                    Service Design Club
                  </h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Icon iconName="calendar" />
                    <h4 className="font-semibold text-md">Fechas del evento</h4>
                  </div>
                  <p className="mt-2 text-sm">
                    {event && (
                      <>
                        {getDate(event?.startingDate)} -{" "}
                        {getDate(event?.endDate)}
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Icon iconName="clock" />
                    <h4 className="font-semibold text-md">
                      Horarios del evento
                    </h4>
                  </div>
                  <p className="mt-2 text-sm">
                    {event && (
                      <>
                        {getTime(event?.startingDate as Date)} -{" "}
                        {getTime(event?.endDate as Date)} ({event?.timezone})
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Icon iconName="photo" />
                    <h4 className="font-semibold text-md">Banner del evento</h4>
                  </div>
                  <div className="relative w-full h-40 mt-2 rounded-md bg-gradient-to-b from-primary-500 to-primary-500/25">
                    <Image
                      layout="fill"
                      src={event?.bannerUrl as string}
                      objectFit="cover"
                      alt={event?.name}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-md">Descripción</h4>
                  <p className="w-full text-sm">{event?.description}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-md">Modalidad</h4>
                  <p className="w-full text-sm">{event?.type}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Icon iconName="mapPin" />
                    <h4 className="font-semibold text-md">Locación</h4>
                  </div>
                  <p className="mt-2 text-sm">{event?.location}</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 px-3 py-4 md:w-2/5 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-md">Convocatoria</h4>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Icon iconName="calendar" />
                    <h4 className="font-semibold text-md">
                      Período de postulación
                    </h4>
                  </div>
                  <p className="mt-2 text-sm">
                    {getDate(event?.proposalsStartingDate as Date)} -{" "}
                    {getDate(event?.proposalsEndDate as Date)}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-md">
                    Requisitos postulantes
                  </h4>
                  <p className="w-full text-sm">{event?.type}</p>
                </div>
              </div>
            </section>
          </TabsPanel>
          {/* End Tab Resumen */}
          {/* Begin Tab Postulaciones */}
          <TabsPanel>Postulaciones</TabsPanel>
          {/* End Tab Postulaciones */}
          {/* Begin Tab Calendario */}
          <TabsPanel>Calendario</TabsPanel>
          {/* End Tab Calendario */}
        </TabsPanels>
      </TabsGroup>
    </div>
  );
};

export default EventPage;
