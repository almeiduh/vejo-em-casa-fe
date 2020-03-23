import { httpClient } from 'config';

const baseUrl = '/events';

const getAllEvents = async (categoryId = '', creatorId = '') => {
  const url = `${baseUrl}?categoryId=${categoryId}&creatorId=${creatorId}`;

  const { data } = await httpClient.get(url);

  return data;
};

const getEvent = async (eventId) => {
  const { data } = await httpClient.get(`${baseUrl}/${eventId}`);

  return data;
};

export default {
  getAllEvents,
  getEvent,
};
