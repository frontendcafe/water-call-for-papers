import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getEventById } from "../../lib/fetcher";
import { Spinner } from "../../stories/Spinner/Spinner";
import { EventData } from "../../types/events-types";

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

  return <>{JSON.stringify(event)}</>;
};

export default EventPage;
