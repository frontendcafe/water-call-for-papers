import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getEventById } from "../../lib/fetcher";
import { Spinner } from "../../stories/Spinner/Spinner";
import { EventData } from "../../types/events-types";
import { Icon } from "../../stories/Icon/Icon";

const EventPage: NextPage = () => {
  const {
    query: { eventId },
  } = useRouter();

  const [event, setEvent] = useState<EventData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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
    return <Spinner />;
  }

  if (error) {
    return <>{JSON.stringify({ error })}</>;
  }

  return (
    <section className="container mx-auto grid gap-6 px-4 py-3 md:grid-cols-12">
      <div className="py-4 px-3 bg-secondary-50 rounded-xl md:col-span-9 flex flex-col gap-6">
        <div className="flex flex-col">
          <h4 className="text-sm font-normal">Organiza:</h4>
          {/* {event?.organizers.map((organizer, idx) => (
            <h2 key={idx} className="text-lg font-bold">
              {organizer.fullName}
            </h2>
          ))} */}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Icon iconName="calendar" />
            <h4 className="text-md font-semibold">Fechas del evento</h4>
          </div>
          <p className="mt-2 text-sm">
            {/* {event?.startingDate} - {event?.endDate} */}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Icon iconName="clock" />
            <h4 className="text-md font-semibold">Horarios del evento</h4>
          </div>
          <p className="mt-2 text-sm">
            {/* {event?.startingDate} - {event?.endDate} */}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Icon iconName="photo" />
            <h4 className="text-md font-semibold">Banner del evento</h4>
          </div>
          <div className="relative w-full">
            <Image
              width={350}
              height={161}
              src={event?.bannerUrl as string}
              objectFit="cover"
              alt={event?.name}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-md font-semibold">Descripción</h4>
          <p className="text-sm w-full">{event?.description}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-md font-semibold">Modalidad</h4>
          <p className="text-sm w-full">{event?.type}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Icon iconName="mapPin" />
            <h4 className="text-md font-semibold">Locación</h4>
          </div>
          <p className="mt-2 text-sm">{event?.location}</p>
        </div>
      </div>

      <div className="py-4 px-3 bg-secondary-50 rounded-xl flex flex-col gap-6 md:col-span-3">
        <h4 className="text-md font-semibold">Convocatoria</h4>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Icon iconName="calendar" />
            <h4 className="text-md font-semibold">Período de postulación</h4>
          </div>
          <p className="mt-2 text-sm">
            {/* {event?.proposalsStartingDate} - {event?.proposalsEndDate} */}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-md font-semibold">Requisitos postulantes</h4>
          <p className="text-sm w-full">{event?.type}</p>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
