import { httpClient } from 'config';

const baseUrl = '/category';

const getAllCategories = async () => {
  const { data } = await httpClient.get(baseUrl);

  return data;
};

const getCategory = async (categoryId) => {
  const { data } = await httpClient.get(`${baseUrl}/${categoryId}`);

  return data;
};

export default {
  getAllCategories,
  getCategory,
};
