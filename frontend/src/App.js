import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import Home from './Pages/Home';
import EventPage , {loader as eventLoader} from './Pages/EventPage';
import EventDetailPage, {loader as eventDetailLoader} from './Pages/EventDetailPage';
import NewEventPage from './Pages/NewEventPage';
import EditEventPage from './Pages/EditEventPage';
import EventLayout from './Pages/EventLayout';
import ErrorPage from './Pages/ErrorPage';

const route = createBrowserRouter([
  {
    path: '/', element: <Root />,errorElement: <ErrorPage/> ,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <EventLayout />,
        children: [
          { index: true, element: <EventPage />, loader: eventLoader},
          { path: ':eventId', element: <EventDetailPage />, loader: eventDetailLoader },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> }
        ]
      },

    ]
  }

])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
