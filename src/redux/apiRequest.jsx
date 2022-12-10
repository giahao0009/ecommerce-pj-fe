import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailed,
} from "./authSlice";
import { toastSuccess, toastError } from "./toastSlice";
import { getOrders } from "./orderSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/user/login`,
      user
    );
    dispatch(loginSuccess(res.data));
    dispatch(toastSuccess("Đăng nhập thành công"));
    navigate("/admin/dashboard");
  } catch (error) {
    dispatch(loginFailed());
    dispatch(toastError("Đăng nhập thất bại"));
  }
};

export const logoutUser = async (dispatch, navigate, accessToken) => {
  dispatch(logoutStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/user/logout`
    );
    dispatch(logoutSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(logoutFailed());
  }
};

export const getAllOrderByAdmin = async (dispatch, accessToken) => {
  try {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/all`;
    const res = await axios.get(url, {
      headers: { "x-auth-token": accessToken },
    });
    dispatch(getOrders(res.data));
  } catch (err) {
    console.log(err);
    dispatch(toastError("Không thể lấy dữ liệu đơn hàng"));
  }
};
