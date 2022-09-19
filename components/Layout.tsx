import React, { useEffect, useState } from "react";
import { SidebarDrawer } from "../stories/SidebarDrawer/SidebarDrawer";
import { EventData } from "../types/events-types";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    (async () => {
      // TODO: Add fetcher. And order?
      const response = await fetch("/api/events?limit=5");
      const { data } = await response.json();

      setEvents(data);
    })();
  }, []);

  return (
    <div className="app-layout">
      <SidebarDrawer events={events} />
      <div className="bg-secondary-50">{children}</div>
    </div>
  );
};

export default Layout;
