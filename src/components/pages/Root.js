import { Outlet } from "react-router-dom";

import EventsNavigation from "../EventsNavigation";

function RootLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
