import React, { useEffect, useState } from "react";
import { ProductListOrder } from "./styled";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toastError } from "../../redux/toastSlice";

function OrderDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});
  const token = useSelector(
    (state) => state?.auth?.login?.currentUser?.accessToken
  );
  useEffect(() => {
    const featchData = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ENDPOINT}/order/${id}`;
        const res = await axios.get(url, {
          headers: { Accept: "application/json", "x-auth-token": token },
        });
        setOrder(res.data);
      } catch (err) {
        console.log(err);
        dispatch(toastError("Không thể lấy dữ liệu"));
      }
    };
    featchData();
  }, []);
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Mã đơn hàng</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Tình trạng</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Thời gian tạo đơn</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Tên người nhận</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Số điện thoại người nhận</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Địa chỉ giao hàng</label>
        <input className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Phương thức thanh toán</label>
        <input className="form-control" disabled />
      </div>
      <ProductListOrder className="mb-3">
        <label className="form-label">Danh sách sản phẩm</label>
        <div className="scrollspy-example bg-light p-3"></div>
      </ProductListOrder>
    </div>
  );
}

export default OrderDetail;
