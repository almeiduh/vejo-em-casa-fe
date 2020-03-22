import { httpClient } from 'config';

const baseUrl = '/creator';

const getCreator = async (creatorId) =>
  httpClient.get(`${baseUrl}/${creatorId}`);

export default {
  getCreator,
};
