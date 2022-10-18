import axios from "./axiosClient";

const userApi = {
  signIn: (payload) => {
    const url = "/user/login";
    return axiosClient.post(url, payload);
  },

  getInfo: async (payload) => {
    const url = "/user";
    const response = await axiosClient.get(url, payload);
    return response.data;
  },
};

export default userApi;
