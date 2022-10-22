import { ChangeEvent, useEffect, useState } from "react";
import { getAllEvents } from "../../lib/api-handlers";
import { Card } from "../../stories/Card/Card";
import { CreateEventCard } from "../../stories/Card/CreateEventCard";
import { FilterBar } from "../../stories/FilterBar/FilterBar";
import { Icon } from "../../stories/Icon/Icon";
import { SelectedOption } from "../../stories/Radio/Radio";
import { Spinner } from "../../stories/Spinner/Spinner";
import { StyledLink } from "../../stories/StyledLink/StyledLink";
import { Tab } from "../../stories/TabsGroup/Tab";
import { TabsGroup } from "../../stories/TabsGroup/TabsGroup";
import { TabsList } from "../../stories/TabsGroup/TabsList";
import { TabsPanel } from "../../stories/TabsGroup/TabsPanel";
import { TabsPanels } from "../../stories/TabsGroup/TabsPanels";
import { EventData, EventStatus } from "../../types/events-types";

const eventStatusTodos = "Todos";
const charlas = [
  {
    type: eventStatusTodos,
    disabled: false,
  },
  {
    type: EventStatus.EnCurso,
    disabled: false,
  },
  {
    type: EventStatus.Borrador,
    disabled: false,
  },
  {
    type: EventStatus.Finalizado,
    disabled: false,
  },
];

const orderOptions = [
  { label: "Más viejo a más nuevo", value: "asc" },
  { label: "Más nuevo a más viejo", value: "desc" },
];

const ListEvent = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusQuery, setStatusQuery] = useState("");
  const [order, setOrder] = useState<SelectedOption>(orderOptions[0]);

  const fetchEvents = (params?: string) => {
    getAllEvents(params)
      .then(({ data }) => {
        setEvents(data as EventData[]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const searchParams = new URLSearchParams();

    if (statusQuery && statusQuery !== eventStatusTodos) {
      searchParams.append("status", statusQuery);
    }
    searchParams.append("order", order.value);

    fetchEvents(`?${searchParams.toString()}`);
  }, [statusQuery, order]);

  const tabHandler = (index: number) => {
    setStatusQuery(charlas[index].type);
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  if (error) {
    return <>{JSON.stringify({ error })}</>;
  }

  const filteredEvents = events.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="md:px-4">
      <TabsGroup handler={tabHandler}>
        <div className="sticky top-0 z-10 pt-11 md:p-0 bg-secondary-50 rounded-b-xl">
          <header className="flex items-center justify-between px-4 py-4 md:px-0">
            <h2 className="inline-block text-3xl font-semibold">Mis eventos</h2>
            <StyledLink href="/event/create">
              <span className="font-medium sr-only md:not-sr-only">
                Crear evento
              </span>
              <Icon iconName="plusCircle" />
            </StyledLink>
          </header>
          <TabsList>
            {charlas.map(({ type, disabled }) => (
              <Tab key={type} disabled={disabled}>
                {type}
              </Tab>
            ))}
          </TabsList>
          <FilterBar
            isLoading={isLoading}
            orderOnChange={setOrder}
            orderOptions={orderOptions}
            orderValue={order}
            searchHandler={searchHandler}
            searchQuery={searchQuery}
          />
        </div>
        <TabsPanels>
          {charlas.map(({ type }) => (
            <TabsPanel key={type}>
              <CardsGrid events={filteredEvents} isLoading={isLoading} />
            </TabsPanel>
          ))}
        </TabsPanels>
      </TabsGroup>
    </section>
  );
};

export default ListEvent;

interface CardsGrid {
  events: EventData[] | null;
  isLoading: boolean;
}

// TODO: Extract to its own component file? lots of checks.
function CardsGrid({ events, isLoading }: CardsGrid) {
  if (isLoading) {
    return (
      <div className="min-h-[28rem] flex items-center justify-center mt-4 bg-white md:rounded-xl">
        <Spinner />
      </div>
    );
  }

  if (events && events.length > 0) {
    return (
      <div className="my-4 bg-white md:rounded-xl">
        <p className="px-4 py-3 text-sm text-secondary-600">
          {events.length} eventos
        </p>
        <div className="grid gap-6 px-4 py-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
          <CreateEventCard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[28rem] flex items-center justify-center mt-4 bg-white md:rounded-xl">
      <div className="px-4 py-3 text-center">
        <img src="/img/Calendar.svg" alt="calendar" className="mb-3" />
        <h4 className="text-xl font-semibold text-secondary-700">
          Aún no hay eventos
        </h4>
        <p className="text-sm text-secondary-600">
          Crea un evento para empezar
        </p>
      </div>
    </div>
  );
}
