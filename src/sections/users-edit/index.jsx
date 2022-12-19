import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastSuccess, toastError } from "../../redux/toastSlice";
import moment from "moment";

function UsersEdit() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state.auth.login?.currentUser?.accessToken
  );
  const currentId = useSelector((state) => state.auth.login?.userInfo?.user.id);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const featchData = async () => {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/users/${accountId}`;
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": accessToken,
        },
      });
      setUser(res.data);
    };
    featchData();
  }, []);

  const disableAccount = () => {
    const disable = async () => {
      try {
        if (accountId == currentId) {
          dispatch(
            toastError(
              "Không được tự động cập nhật tình trạng tài khoản hiện đang đăng nhập"
            )
          );
          return;
        }
        const url = `${process.env.REACT_APP_API_ENDPOINT}/users/disable/${accountId}`;
        const data = {};
        const res = await axios.patch(url, data, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": accessToken,
          },
        });
        console.log(res);
        dispatch(toastSuccess("Khoá tài khoản thành công"));
        window.location.reload();
      } catch (err) {
        console.log(err);
        dispatch(toastError("Khoá tài khoản thất bại"));
      }
    };
    disable();
  };

  const updateAccount = () => {
    const update = async () => {
      try {
        if (accountId == currentId) {
          dispatch(
            toastError(
              "Không được tự động cập nhật thông tin tài khoản hiện đang đăng nhập"
            )
          );
          return;
        }
        const url = `${process.env.REACT_APP_API_ENDPOINT}/users/${accountId}`;

        const res = await axios.patch(url, user, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": accessToken,
          },
        });
        dispatch(toastSuccess("Cập nhật thông tin tài khoản thành công"));
      } catch (err) {
        console.log(err);
        dispatch(toastError("Cập nhật tài khoản thất bại"));
      }
    };
    update();
  };

  const enableAccount = () => {
    const enable = async () => {
      try {
        if (accountId == currentId) {
          dispatch(
            toastError(
              "Không được tự động cập nhật tình trạng tài khoản hiện đang đăng nhập"
            )
          );
          return;
        }
        const url = `${process.env.REACT_APP_API_ENDPOINT}/users/enable/${accountId}`;
        const data = {};
        const res = await axios.patch(url, data, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": accessToken,
          },
        });
        console.log(res);
        dispatch(toastSuccess("Khôi phục tài khoản thành công"));
        window.location.reload();
      } catch (err) {
        console.log(err);
        dispatch(toastError("Khôi phục tài khoản thất bại"));
      }
    };
    enable();
  };

  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label className="form-label">Mail</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={user?.email}
              disabled
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tên tài khoản</label>
            <input
              type="text"
              name="name"
              value={user?.name}
              className="form-control"
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Vai trò</label>
            <select
              className="form-select"
              name="role"
              value={user?.role}
              onChange={handleOnchange}
            >
              <option selected>Lựa chọn vai trò</option>
              <option value="1">Admin</option>
              <option value="2">Quản lý</option>
              <option value="0">Khách hàng</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Ngày khởi tạo</label>
            <input
              type="text"
              name="name"
              className="form-control"
              disabled
              value={moment(user?.createdAt).format("DD/MM/YYYY")}
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ngày cập nhật gần nhất</label>
            <input
              type="text"
              name="name"
              className="form-control"
              disabled
              value={moment(user?.updatedAt).format("DD/MM/YYYY")}
              onChange={handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tình trạng tài khoản</label>
            <select
              className="form-select"
              value={user?.status}
              disabled
              onChange={handleOnchange}
            >
              <option selected>Lựa chọn vai trò</option>
              <option value="1">Kích hoạt</option>
              <option value="0">Vô hiệu hoá</option>
            </select>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary me-2" onClick={updateAccount}>
              Cập nhật tài khoản
            </button>
            {user?.status == 0 && (
              <button
                className="btn btn-secondary me-2"
                onClick={enableAccount}
              >
                Khôi phục tài khoản
              </button>
            )}

            {user?.status == 1 && (
              <button className="btn btn-danger" onClick={disableAccount}>
                Vô hiệu hoá tài khoản
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersEdit;
