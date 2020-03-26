import { httpClient } from 'config';

const baseUrl = '/events';

const getAllEvents = async ({
  categoryId,
  creatorId,
  page = 0,
  pageSize = 10,
}) => {
  const {
    data: { content },
  } = await httpClient.get(baseUrl, {
    params: {
      categoryId,
      creatorId,
      page,
      pageSize,
    },
  });

  return content;
};

const getEvent = async (eventId) => {
  const { data } = await httpClient.get(`${baseUrl}/${eventId}`);

  return data;
};

export default {
  getAllEvents,
  getEvent,
};
