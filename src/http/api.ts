import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}`
});

apiClient.interceptors.request.use(async (config) => {
  return config;
});

apiClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);
const api = apiClient;
export default api;
