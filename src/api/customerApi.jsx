import axios from "axios";

class CustomerApi {
  getAll = (token, order, sortBy) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/customer/all?order=${order}&sortBy=${sortBy}`;
    return axios.get(url, { headers: { "x-auth-token": token } });
  };
  getDetail = (token, id) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/customer/${id}`;
    return axios.get(url, { headers: { "x-auth-token": token } });
  };
  postCustomer = (token, data) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/customer/`;
    return axios.post(url, data, {
      headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
    });
  };
}

const customerApi = new CustomerApi();
export default customerApi;
