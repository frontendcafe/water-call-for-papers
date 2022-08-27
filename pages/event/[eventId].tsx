import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getEventById } from "../../lib/fetcher";
import { Spinner } from "../../stories/Icons/Spinner";

const Event: NextPage = () => {
  const {
    query: { eventId },
  } = useRouter();

  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!eventId) return;
    getEventById(String(eventId))
      .then(({ data }) => {
        setEvent(data as Event);
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
    return <Layout>{JSON.stringify({ error })}</Layout>;
  }

  return <Layout>{JSON.stringify(event)}</Layout>;
};

export default Event;
