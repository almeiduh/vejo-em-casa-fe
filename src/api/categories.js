import { httpClient } from 'config';

const baseUrl = '/categories';

const getAllCategories = async () => {
  const { data } = await httpClient.get(baseUrl);

  return data;
};

export default {
  getAllCategories,
};
