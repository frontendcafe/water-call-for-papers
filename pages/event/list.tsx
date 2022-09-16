import { ChangeEvent, useEffect, useState } from "react";
import { getAllEvents } from "../../lib/api-handlers";
import { Button } from "../../stories/Button/Button";
import { Card } from "../../stories/Card/Card";
import { CreateEventCard } from "../../stories/Card/CreateEventCard";
import { Icon } from "../../stories/Icon/Icon";
import { InputText } from "../../stories/Input/InputText";
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

const ListEvent = () => {
  const [events, setEvents] = useState<EventData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusQuery, setStatusQuery] = useState("");

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

    if (!statusQuery || statusQuery === eventStatusTodos) {
      return fetchEvents();
    }
    searchParams.append("status", statusQuery);

    fetchEvents(`?${searchParams.toString()}`);
  }, [statusQuery]);

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

  return (
    <section className="md:p-4">
      <header className="flex items-center justify-between p-4">
        <h2 className="inline-block text-3xl font-semibold">Mis eventos</h2>
        <StyledLink href="/event/create">
          <span className="font-medium sr-only md:not-sr-only">
            Crear evento
          </span>
          <Icon iconName="plusCircle" />
        </StyledLink>
      </header>
      <TabsGroup handler={tabHandler}>
        <TabsList>
          {charlas.map(({ type, disabled }) => (
            <Tab key={type} disabled={disabled}>
              {type}
            </Tab>
          ))}
        </TabsList>
        <TabsPanels>
          <TabsPanel>
            <FilterBar
              isLoading={isLoading}
              searchHandler={searchHandler}
              searchQuery={searchQuery}
            />
            <CardsGrid events={events} isLoading={isLoading} />
          </TabsPanel>
          <TabsPanel>
            <FilterBar
              isLoading={isLoading}
              searchHandler={searchHandler}
              searchQuery={searchQuery}
            />
            <CardsGrid events={events} isLoading={isLoading} />
          </TabsPanel>
          <TabsPanel>
            <FilterBar
              isLoading={isLoading}
              searchHandler={searchHandler}
              searchQuery={searchQuery}
            />
            <CardsGrid events={events} isLoading={isLoading} />
          </TabsPanel>
          <TabsPanel>
            <FilterBar
              isLoading={isLoading}
              searchHandler={searchHandler}
              searchQuery={searchQuery}
            />
            <CardsGrid events={events} isLoading={isLoading} />
          </TabsPanel>
        </TabsPanels>
      </TabsGroup>
    </section>
  );
};

export default ListEvent;

interface FilterBarProps {
  isLoading: boolean;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

// TODO: Maybe we can add this within the TabsPanel component, since is shared between all tabs
function FilterBar({ searchHandler, searchQuery }: FilterBarProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white md:rounded-xl md:rounded-tl-none">
      <Button
        // TODO: Enable when filter feature gets implemented
        disabled={true}
        size="small"
        variant="transparent"
      >
        <Icon iconName="adjustment" />{" "}
        <span className="sr-only md:not-sr-only">Filtros</span>{" "}
        <Icon iconName="arrowDown" size="small" />
      </Button>

      <InputText
        // TODO: Enable when search feature gets implemented
        disabled={true}
        idValue="search-bar"
        // TODO: Finish after refactor in issue #138
        label="This makes Typescript happy"
        onChange={searchHandler}
        placeholder="Buscar"
        value={searchQuery}
      />
    </div>
  );
}

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
      <div className="mt-4 bg-white md:rounded-xl">
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
