import { httpClient } from 'config';

const baseUrl = '/creator';

const getCreator = async (creatorId) => {
  const { data } = await httpClient.get(`${baseUrl}/${creatorId}`);

  return data;
};

const getAllCreators = async () => {
  const { data } = await httpClient.get(baseUrl);

  return data;
};

export default {
  getCreator,
  getAllCreators,
};
