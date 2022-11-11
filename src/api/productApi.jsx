import axiosClient from "./axiosClient";
import axios from "axios";

class ProductApi {
  getAll = (params) => {
    const url = "/product/all";
    return axiosClient.get(url, { params });
  };
  getDetail = (query) => {
    const url = `/product/${query}`;
    return axiosClient.get(url);
  };
  getImgProduct = (query) => {
    const url = `/product/photo/${query}`;
    return axiosClient.get(url);
  };
  postProduct = (payload, token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/product/`;
    return axios.post(url, payload, {
      headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
    });
  };
  getCategories = () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/product/categories`;
    return axios.get(url);
  };
  getDetailCategory = (query) => {
    const url = `/category/${query}`;
    return axiosClient.get(url);
  };
  putDetailCategory = (payload, query, token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/category/${query}`;
    return axios.put(url, payload, { headers: { "x-auth-token": token } });
  };
  postCategory = (payload, token) => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/category/`;
    return axios.post(url, payload, {
      headers: { "x-auth-token": token },
    });
  };
}

const productApi = new ProductApi();
export default productApi;
