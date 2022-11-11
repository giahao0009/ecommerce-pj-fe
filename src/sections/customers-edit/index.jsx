import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customerApi from "../../api/customerApi";
import { useParams } from "react-router-dom";
import { toastError } from "../../redux/toastSlice";
import SilverRankingImg from "../../assets/image/silver_rank.png";
import GoldRankingImg from "../../assets/image/gold_rank.png";
import DiamondRankingImg from "../../assets/image/diamond_rank.png";
import BronzoRankingImg from "../../assets/image/bronzo_rank.png";

function CustomersEdit() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const { customerId } = useParams();
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState(null);
  useEffect(() => {
    const featchData = async () => {
      try {
        const res = await customerApi.getDetail(user.accessToken, customerId);
        console.log(res.data);
        setCustomer(res.data);
      } catch (err) {
        console.log(err);
        dispatch(toastError("Không thể lấy dữ liệu khách hàng"));
      }
    };
    featchData();
  }, []);
  return (
    <div>
      <h2 className="h2 mb-3">Thông tin khách hàng</h2>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <labeL className="form-label">Tên khách hàng</labeL>
            <input
              type="text"
              name="cusName"
              className="form-control"
              value={customer.cusName}
            />
          </div>
          <div className="mb-3">
            <labeL className="form-label">Số điện thoại</labeL>
            <input
              type="text"
              name="cusName"
              className="form-control"
              value={customer.cusPhone}
            />
          </div>
          <div className="mb-3">
            <labeL className="form-label">Mail khách hàng</labeL>
            <input
              type="text"
              name="cusName"
              className="form-control"
              value={customer.cusMail}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <labeL className="form-label">Điểm tích luỹ</labeL>
            <input
              type="text"
              name="cusName"
              className="form-control"
              value={customer.cusScore}
            />
          </div>
          <div className="mb-3" style={{ position: "relative" }}>
            <labeL className="form-label">Hạng tích luỹ</labeL>
            <input
              type="text"
              name="cusName"
              className="form-control"
              value={customer.ranking}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "30px",
              }}
            >
              <img
                alt="img-ranking"
                src={BronzoRankingImg}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100">
              Thay đổi thông tin
            </button>
          </div>
        </div>
      </div>
      <h3 className="h3 mb-3">Giỏ hàng hiện tại</h3>
      <div className="row"></div>
    </div>
  );
}
export default CustomersEdit;
