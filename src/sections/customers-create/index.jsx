import React, { useState } from "react";
import BronzoRankingImg from "../../assets/image/bronzo_rank.png";
import SilverRankingImg from "../../assets/image/silver_rank.png";
import GoldRankingImg from "../../assets/image/gold_rank.png";
import DiamondRankingImg from "../../assets/image/diamond_rank.png";
import rankingList from "../../constant/ranking";
import customerApi from "../../api/customerApi";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../redux/toastSlice";

function CustomersCreate() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [cusName, setCusName] = useState("");
  const [cusPhone, setCusPhone] = useState("");
  const [cusMail, setCusMail] = useState("");
  const [cusScore, setCusScore] = useState(0);
  const [ranking, setRanking] = useState("Đồng");

  const setEmpty = () => {
    setCusName("");
    setCusPhone("");
    setCusMail("");
    setCusScore(0);
    setRanking("Đồng");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const data = { cusName, cusPhone, cusMail, cusScore, ranking };
        const res = await customerApi.postCustomer(user.accessToken, data);
        console.log(res);
        dispatch(toastSuccess("Thêm thông tin khách hàng thành công"));
        setEmpty();
      } catch (e) {
        console.log(e);
        dispatch(toastError("Thêm thông tin khách hàng thất bại"));
      }
    };
    postData();
  };

  return (
    <div className="container-fluid">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <labeL className="form-label">Tên khách hàng</labeL>
              <input
                type="text"
                name="cusName"
                className="form-control"
                value={cusName}
                onChange={(e) => {
                  setCusName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <labeL className="form-label">Số điện thoại</labeL>
              <input
                type="text"
                name="cusName"
                className="form-control"
                value={cusPhone}
                onChange={(e) => {
                  setCusPhone(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <labeL className="form-label">Mail khách hàng</labeL>
              <input
                type="text"
                name="cusName"
                className="form-control"
                value={cusMail}
                onChange={(e) => {
                  setCusMail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <labeL className="form-label">Điểm tích luỹ</labeL>
              <input
                type="number"
                name="cusName"
                className="form-control"
                value={cusScore}
                onChange={(e) => {
                  setCusScore(e.target.value);
                }}
              />
            </div>
            <div className="mb-3" style={{ position: "relative" }}>
              <labeL className="form-label">Hạng tích luỹ</labeL>
              <input
                type="text"
                name="ranking"
                className="form-control"
                value={
                  cusScore <= 100
                    ? "Đồng"
                    : cusScore <= 500
                    ? "Bạc"
                    : cusScore <= 1000
                    ? "Vàng"
                    : "Kim cương"
                }
                onChange={(e) => setRanking(e.target.value)}
                disabled
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
                  src={
                    cusScore <= 100
                      ? BronzoRankingImg
                      : cusScore <= 500
                      ? SilverRankingImg
                      : cusScore <= 1000
                      ? GoldRankingImg
                      : DiamondRankingImg
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100">Thêm khách hàng</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomersCreate;
