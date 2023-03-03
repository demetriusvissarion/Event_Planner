import { Outlet } from "react-router-dom";

import EventsNavigation from "../EventsNavigation";

function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventRootLayout;
