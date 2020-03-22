import { httpClient } from 'config';

const baseUrl = '/events';

const getAllEvents = async (categoryId = '', creatorId = '') => {
  const url = `${baseUrl}?categoryId=${categoryId}&creatorId=${creatorId}`;

  return httpClient.get(url);
};

const getEvent = async (eventId) => httpClient.get(`${baseUrl}/${eventId}`);

export default {
  getAllEvents,
  getEvent,
};
