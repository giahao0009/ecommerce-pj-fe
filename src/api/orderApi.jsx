import axios from "axios";

class OrderApi {
  getCountUnconfirmOrder = (token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/countUnconfirm`;
    return axios.get(url, {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    });
  };
  getCountConfirmOrder = (token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/countConfirm`;
    return axios.get(url, {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    });
  };
  getCountSuccess = (token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/countSuccess`;
    return axios.get(url, {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    });
  };
  getCountFail = (token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/countFail`;
    return axios.get(url, {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    });
  };
  confirmOrder = (id, data, token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/confirmOrder/${id}`;
    return axios.patch(url, data, {
      headers: { "x-auth-token": token, "Content-Type": "application/json" },
    });
  };
  destroyOrder = (id, data, token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/order/destroyOrder/${id}`;
    return axios.patch(url, data, {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    });
  };
}

const orderApi = new OrderApi();
export default orderApi;
