import axios from 'axios';

const ApiService = {
  fetchData: async ({ url, method, data }) => {
    try {
      const response = await axios.request({
        url,
        method,
        data,
      });

      return response.data;
    } catch (error) {
      throw new Error('Ошибка при выполнении запроса.');
    }
  },
};

export default ApiService;
