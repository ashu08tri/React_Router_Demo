import { useLoaderData,json} from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventDetailPage() {
  const data = useLoaderData()
 
  return (<>
    <h1>Details</h1>
    <EventsList events={data.event}/>
    </>
  )
}
export const loader = async({params}) => {
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id);

  if(!response.ok){
    throw json({message: 'Could not fetch details for this event'},{
      status: 500
    })
  }else{
    return response;
  }

}