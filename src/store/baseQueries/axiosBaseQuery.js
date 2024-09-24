import { API } from "../../service/api";

export const axiosBaseQuery =
  ({ baseUrl = "", headers = {} } = {}) =>
  async ({ url, method, params, body }) => {
    try {
      const result = await API({
        url: new URL(url, baseUrl).toString(),
        method,
        data: body,
        params,
        headers: {
          "Accept-Language": "en-US,en;q=0.9",
          ...headers,
        },
      });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
