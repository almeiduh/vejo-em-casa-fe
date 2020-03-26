import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
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

const slider = (
  <AwesomeSlider cssModule={AwesomeSliderStyles} organicArrows={false}>
    <div data-src="https://vcguesthouse.eu/media/k2/items/cache/feb4274796d93ff716e9650163a77fb8_XL.jpg" />
    <div data-src="https://quidgest.com/wp-content/uploads/2019/11/topo-destaque-2.jpg" />
    <div data-src="https://quidgest.com/wp-content/uploads/2019/08/qday-backdrop-quidgest.jpg" />
  </AwesomeSlider>
);

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
        <div>{slider}</div>
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
