import axios from "./axiosClient";
import axiosClient from "./axiosClient";
import { loginStart, loginSuccess, loginFailed } from "../redux/authSlice";

class UserApi {
  login = (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
      return axios.post("/user/login", user);
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  getInfo = async (payload) => {
    const url = "/user";
    const response = await axiosClient.get(url, payload);
    return response.data;
  };

  getAllUser = (token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/users/all`;
    return axios.get(url, { headers: { "x-auth-token": token } });
  };
}

const userApi = new UserApi();
export default userApi;
