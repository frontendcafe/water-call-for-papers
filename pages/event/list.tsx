import React, { useEffect, useState } from "react";
import { getAllEvents } from "../../lib/api-handlers";
import { Spinner } from "../../stories/Spinner/Spinner";
import { EventData } from "../../types/events-types";

const ListEvent = () => {
  const [events, setEvents] = useState<EventData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllEvents()
      .then(({ data }) => {
        setEvents(data as EventData[]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <>{JSON.stringify({ error })}</>;
  }

  return <>{JSON.stringify({ events })}</>;
};

export default ListEvent;
