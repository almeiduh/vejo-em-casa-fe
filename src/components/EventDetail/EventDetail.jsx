import React from 'react';
import moment from 'moment';

const EventDetail = ({ event }) => (
  <div className="vec-block">
    <div className="vec-w-full vec-h-40 vec-bg-gray-600 vec-mb-2">IMAGE</div>
    <Category category={event.category.name} />
    <div className="vec-flex vec-justify-between vec-items-end">
      <CreatorAndTitle creator={event.creator.name} title="Title" />
      <DateTime time={event.time} />
    </div>
  </div>
);

const Category = ({ category }) => (
  <div className="vec-text-xs vec-mb-2">{category}</div>
);

const CreatorAndTitle = ({ creator, title }) => (
  <div className="vec-block vec-font-bold">
    <div>{title}</div>
    <div className="vec-text-xs">{creator}</div>
  </div>
);

const DateTime = ({ time }) => {
  const momentTime = moment(time);
  const date = momentTime.format('DD.MM.YYYY');
  const hour = momentTime.format('HH[H]mm');
  return (
    <div className="vec-block vec-text-right vec-text-xs">
      <div>{date}</div>
      <div>{hour}</div>
    </div>
  );
};

export default EventDetail;
