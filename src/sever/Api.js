
import axios from "axios";

const baseUrl = "https://semester3shoprunner.azurewebsites.net/api";
const token = localStorage.getItem("currentUser");

const instance = axios.create({
  baseURL: baseUrl,
  // withCredentials: true,
});
instance.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const NO_RETRY_HEADER = "x-no-retry";

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (
      error.config &&
      error.response &&
      +error.response.status === 401 &&
      !error.config.headers[NO_RETRY_HEADER] &&
      error.config.url === "/auth/refresh-token"
    ) {
      const access_token = localStorage.getItem("dataRefresh");
      error.config.headers[NO_RETRY_HEADER] = "true";
      if (access_token) {
        error.config.headers["Authorization"] = `Bearer ${access_token}`;
        localStorage.setItem("currentUser", access_token);
        return instance.request(error.config);
      }
    }

    if (
      error.config &&
      error.response &&
      error.config.url === "/auth/refresh-token"
    ) {
      window.localStorage.removeItem("dataRefresh");
      window.localStorage.removeItem("currentUser");
      //   message.error("Err Internet Connection");
      window.location.href = "/login";
    }
    return error?.response?.data ?? Promise.reject(error);
  }
);

export default instance;
