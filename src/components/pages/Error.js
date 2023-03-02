import EventsNavigation from "../EventsNavigation";

function ErrorPage() {
  return (
    <>
      <EventsNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
