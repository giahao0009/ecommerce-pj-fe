import React, { useEffect, useState } from "react";
import { toastSuccess, toastError } from "../../redux/toastSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

function UsersCreate() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createAccount = () => {
    const create = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ENDPOINT}/user/register`;
        const res = await axios.post(url, user, {
          headers: { "Content-Type": "Application/json" },
        });
        dispatch(toastSuccess("Tạo tài khoản thành công"));
      } catch (err) {
        console.log(err);
        dispatch(toastError("Tạo tài khoản thất bại"));
      }
    };
    create();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label className="form-label">Tên tài khoản</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={user?.name}
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mail</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={user?.email}
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={user?.password}
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={createAccount}>
              Tạo tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCreate;
