import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getAllEvents } from "../../lib/fetcher";
import { Spinner } from "../../stories/Icons/Spinner";

const ListEvent = () => {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllEvents()
      .then(({ data }) => {
        setEvents(data as Event[]);
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
    return <Layout>{JSON.stringify({ error })}</Layout>;
  }

  return <Layout>{JSON.stringify({ events })}</Layout>;
};

export default ListEvent;
