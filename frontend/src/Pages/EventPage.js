import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
     <EventsList events={events} />
    </>
  );
}

export default EventPage;

export const loader = async () => {

  const response = await fetch('http://localhost:8080/events');

if (!response.ok) {

throw json(
  {message: 'Could Not Fetch Events'},
  {status: 500}
  )
} else {
return response;
}
};
