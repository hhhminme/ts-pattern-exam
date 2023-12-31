import axios from "axios";

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function post<Request = unknown, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.post<Response>(url, data).then((res) => res.data);
  },
};
