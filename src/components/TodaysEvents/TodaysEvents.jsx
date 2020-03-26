import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllEventsAsync, getEvents } from 'state/events/eventsSlice';

import EventDetail from '../EventDetail/EventDetail';

const TodaysEvents = () => {
  const events = useSelector(getEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="vec-mt-8 vec-block">
      <Title />
      <div className="vec-flex vec-flex-wrap">
        {(events || []).map((event, index) => (
          <EventDetailContainer key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

const EventDetailContainer = ({ event, index }) => {
  const classes = `vec-w-1/4 vec-mb-10 ${index % 4 !== 3 ? 'vec-pr-5' : ''}`;

  return (
    <div className={classes}>
      <EventDetail event={event} />
    </div>
  );
};

const Title = () => (
  <div className="vec-flex vec-text-2xl vec-items-center vec-mb-8">
    <span className="vec-flex-none vec-mr-3">
      Eventos<span className="vec-font-bold">Hoje</span>
    </span>
    <hr className="vec-w-full" />
  </div>
);

export default TodaysEvents;
