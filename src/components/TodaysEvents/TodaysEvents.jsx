import React from 'react';
import EventDetail from '../EventDetail/EventDetail';

const mockedEvents = [
  {
    id: 2,
    approved: true,
    category: {
      id: 2,
      name: 'Aulas',
    },
    creator: {
      id: 2,
      name: 'System of a down',
      photo: 'sysphoto',
      donationUrl: 'www.google.com',
    },
    streamUrl: 'www.slbenfica.pt',
    time: '2020-03-25T20:24:14',
  },
  {
    id: 1,
    approved: true,
    category: {
      id: 1,
      name: 'Musica',
    },
    creator: {
      id: 1,
      name: 'Quim Barreiros',
      photo: 'quimphoto',
      donationUrl: 'www.sapo.pt',
    },
    streamUrl: 'www.google.com',
    time: '2020-03-23T20:23:50',
  },
  {
    id: 1,
    approved: true,
    category: {
      id: 1,
      name: 'Musica',
    },
    creator: {
      id: 1,
      name: 'Quim Barreiros',
      photo: 'quimphoto',
      donationUrl: 'www.sapo.pt',
    },
    streamUrl: 'www.google.com',
    time: '2020-03-23T20:23:50',
  },
  {
    id: 1,
    approved: true,
    category: {
      id: 1,
      name: 'Musica',
    },
    creator: {
      id: 1,
      name: 'Quim Barreiros',
      photo: 'quimphoto',
      donationUrl: 'www.sapo.pt',
    },
    streamUrl: 'www.google.com',
    time: '2020-03-23T20:23:50',
  },
  {
    id: 1,
    approved: true,
    category: {
      id: 1,
      name: 'Musica',
    },
    creator: {
      id: 1,
      name: 'Quim Barreiros',
      photo: 'quimphoto',
      donationUrl: 'www.sapo.pt',
    },
    streamUrl: 'www.google.com',
    time: '2020-03-23T20:23:50',
  },
];

const TodaysEvents = () => {
  return (
    <div className="vec-mt-8 vec-block">
      <Title />
      <div className="vec-flex vec-flex-wrap">
        {mockedEvents.map((event, index) => (
          <EventDetailContainer event={event} index={index} />
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
