// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/pages/Home";
import EventsPage from "./components/pages/Events";
import EventDetailPage from "./components/pages/EventDetail";
import NewEventPage from "./components/pages/NewEvent";
import EditEventPage from "./components/pages/EditEvent";

import RootLayout from "./components/pages/Root";
import ErrorPage from "./components/pages/Error";
import EventsRootLayout from "./components/pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index route (or default route); the alternative would be: path: ''
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { path: "", element: <EventsPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
