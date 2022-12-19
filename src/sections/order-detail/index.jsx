import React, { useEffect, useState } from "react";
import { ProductListOrder, ProductList } from "./styled";
import { useParams } from "react-router-dom";
import axios from "axios";
import orderApi from "../../api/orderApi";
import { useDispatch, useSelector } from "react-redux";
import { toastError } from "../../redux/toastSlice";
import moment from "moment";

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

  const confirmOrder = () => {
    const confirm = async () => {
      const data = { status: 2 };
      const res = await orderApi.confirmOrder(id, data, token);
      window.location.reload();
    };
    confirm();
  };

  const destroyOrder = () => {
    const destroy = async () => {
      const data = { status: 0 };
      const res = await orderApi.destroyOrder(id, data, token);
      window.location.reload();
    };
    destroy();
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Mã đơn hàng</label>
        <input className="form-control" disabled value={"HD" + order._id} />
      </div>
      <div className="mb-3">
        <label className="form-label">Tình trạng</label>
        <select className="form-select" disabled value={order.status}>
          <option value={1}>Chưa xác nhận</option>
          <option value={2}>Xác nhận</option>
          <option value={3}>Hoàn thành</option>
          <option value={0}>Đã huỷ</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Thời gian tạo đơn</label>
        <input
          className="form-control"
          disabled
          value={moment(order.crearedAt).format("HH:MM - DD/MM/YYYY")}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tên người nhận</label>
        <input className="form-control" disabled value={order.cusName} />
      </div>
      <div className="mb-3">
        <label className="form-label">Số điện thoại người nhận</label>
        <input className="form-control" disabled value={order.cusPhone} />
      </div>
      <div className="mb-3">
        <label className="form-label">Tài khoản</label>
        <input className="form-control" disabled value={order?.account} />
      </div>
      <div className="mb-3">
        <label className="form-label">Địa chỉ giao hàng</label>
        <input
          className="form-control"
          disabled
          value={order.addressDelivery}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phương thức thanh toán</label>
        <input className="form-control" disabled value={order.paymentMethod} />
      </div>
      <ProductListOrder className="mb-3">
        <label className="form-label">Danh sách sản phẩm</label>
        <ProductList className="overflow-auto bg-light p-3">
          {order?.orderDetail?.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-3 row p-2"
                style={{ width: "100%" }}
              >
                <div className="col-3">
                  <img
                    src={`${process.env.REACT_APP_API_ENDPOINT}/product/photo/${item.productId}`}
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                </div>
                <div className="col-3 mt-5">
                  <label className="mb-2">Tên sản phẩm</label>
                  <p>{item.productName}</p>
                </div>
                <div className="col-3 mt-5">
                  <label className="mb-2">Số lượng</label>
                  <p>{item.quantity}</p>
                </div>
                <div className="col-3 mt-5">
                  <label className="mb-2">Đơn giá</label>
                  <p>{item.unitPrice}</p>
                </div>
                <hr className="mt-3" />
              </div>
            );
          })}
        </ProductList>
      </ProductListOrder>
      <div className="mb-3">
        <label className="form-label">Tổng tiền cần thanh toán</label>
        <input className="form-control" disabled value={order.amount} />
      </div>
      <div className="mb-3">
        {order.status === 1 ? (
          <button className="btn btn-primary" onClick={confirmOrder}>
            Xác nhận đơn hàng
          </button>
        ) : (
          <button className="btn btn-primary" disabled>
            Xác nhận đơn hàng
          </button>
        )}
        {order.status === 1 ? (
          <button className="btn btn-danger ms-2" onClick={destroyOrder}>
            Huỷ đơn hàng
          </button>
        ) : (
          <button className="btn btn-danger ms-2" disabled>
            Huỷ đơn hàng
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;
