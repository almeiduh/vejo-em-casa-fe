import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCreatorDetail,
  getCreatorDetailAsync,
} from 'state/creators/creatorsSlice';
import {
  getAllEventsAsync,
  getEventDetailAsync,
  getEventDetail,
  getEvents,
} from 'state/events/eventsSlice';
import Sidebar from 'components/Sidebar/Sidebar';
import TodaysEvents from 'components/TodaysEvents/TodaysEvents';

const Home = (props) => {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  const eventDetail = useSelector(getEventDetail);
  const creatorDetail = useSelector(getCreatorDetail);

  useEffect(() => {
    dispatch(getAllEventsAsync());
    dispatch(getEventDetailAsync(1));

    dispatch(getCreatorDetailAsync(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="vec-flex">
      <Sidebar />
      <div className="vec-block vec-px-4">
        <TodaysEvents />
        <div>
          {' '}
          <b> events:</b>
          {JSON.stringify(events)}{' '}
        </div>
        <div>
          {' '}
          <b> eventsDetails:</b> {JSON.stringify(eventDetail)}{' '}
        </div>
        <div>
          {' '}
          <b> creatorDetail:</b>
          {JSON.stringify(creatorDetail)}{' '}
        </div>
      </div>
    </div>
  );
};

export default Home;
