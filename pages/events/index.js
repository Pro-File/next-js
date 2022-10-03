import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Events = ({ eventList }) => {
  const [eventsData, setEventsData] = useState(eventList);
  const router = useRouter();

  const handleFilterSportsEvents = async () => {
    const res = await fetch("http://localhost:4000/events?category=sports");
    const data = await res.json();
    setEventsData(data);
    router.push(" /events?category=sports", undefined, { shallow: true });
  };
  return (
    <div>
      <button onClick={handleFilterSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {eventsData &&
        eventsData.map((event) => {
          return (
            <div key={event.id}>
              <h2>
                {event.title} {event.date} | {event.category}
              </h2>
              <h4>{event.description}</h4>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "?category=sports" : "";
  const res = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default Events;
