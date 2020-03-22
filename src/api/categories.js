import { httpClient } from 'config';

const baseUrl = '/categories';

const getAllCategories = async () => httpClient.get(baseUrl);

export default {
  getAllCategories,
};
