import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>{" "}
      {/* "eventId" here is the same introduced in App.js line 43 & 45 */}
    </>
  );
}

export default EventDetailPage;
