import { httpClient } from 'config';

const baseUrl = '/subscribeUser';

const subscribeUser = async (email) => httpClient.post(baseUrl, { email });

export default {
  subscribeUser,
};
