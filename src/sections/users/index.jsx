import React, { useEffect } from "react";
import Table from "../../components/table";
import { textFilter } from "react-bootstrap-table2-filter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../redux/toastSlice";
import userApi from "../../api/userApi";
import { useQuery } from "react-query";
import { Color } from "../../assets/styles/variable";
import { selectFilter } from "react-bootstrap-table2-filter";
import moment from "moment";

function UsersSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login?.currentUser);

  const featchDataUsers = async () => {
    try {
      const response = await userApi.getAllUser(user.accessToken);
      console.log(response);
      let convertList = response.map((item) => {
        return {
          ...item,
          avatar: (
            <div>
              <img
                src={item.avatar}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
          ),
          role:
            item.role === 1 ? (
              <div className="text-bg-danger p-2 rounded">Admin</div>
            ) : item.role === 2 ? (
              <div className="text-bg-warning p-2 rounded">Quản lý</div>
            ) : (
              <div className="text-bg-primary p-2 rounded">Khách hàng</div>
            ),
          createdAt: moment(item.createdAt).format("DD/MM/YYYY"),
          updatedAt: moment(item.updatedAt).format("DD/MM/YYYY"),
          editButton: (
            <button
              className="btn btn-warning me-1"
              onClick={() => {
                navigate(item._id);
              }}
            >
              Edit
            </button>
          ),
        };
      });
      return convertList;
    } catch (err) {
      console.log(err);
      dispatch(toastError("Không thể lấy danh sách người dùng"));
    }
  };

  const selectOptions = {
    0: "Khách hàng",
    1: "Admin",
    2: "Quản lý",
  };

  const { data } = useQuery(["users"], featchDataUsers);

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "avatar",
      text: "Avatar",
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },

    {
      dataField: "name",
      text: "Tên người dùng",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      filter: textFilter({}),
    },
    {
      dataField: "role",
      text: "Vai trò",
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "email",
      text: "Mail",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "createdAt",
      text: "Ngày khởi tạo",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "updatedAt",
      text: "Ngày cập nhật",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "editButton",
      text: "Edit",
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
  ];
  return (
    <div className="container-fluid">
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          navigate("create");
        }}
      >
        Thêm tài khoản
      </button>
      <Table data={data} labels={columns} />
    </div>
  );
}

export default UsersSection;
