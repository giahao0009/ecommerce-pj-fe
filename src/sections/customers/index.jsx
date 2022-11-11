import React, { useEffect, useState } from "react";
import Table from "../../components/table";
import { Color } from "../../assets/styles/variable";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { toastError } from "../../redux/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import customerApi from "../../api/customerApi";
import moment from "moment";

function CustomersSection() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const columns = [
    {
      dataField: "_id",
      text: "Customer ID",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "cusName",
      text: "Tên khách hàng",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "cusPhone",
      text: "Số điện thoại",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "cusMail",
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

  const featchDataCustomer = async () => {
    try {
      const res = await customerApi.getAll(user.accessToken, "asc", "cusName");
      const convertList = res.data.map((item) => {
        return {
          _id: item._id,
          cusName: item.cusName,
          cusPhone: item.cusPhone,
          cusMail: item.cusMail,
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
      setData(convertList);
    } catch (err) {
      console.log(err);
      dispatch(toastError("Không thể lấy dữ liệu khách hàng"));
    }
  };
  useQuery(["customers"], featchDataCustomer);

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-12 d-flex justify-content-end align-items-center">
          <Link to="create">
            <button className="btn btn-primary">Thêm khách hàng</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Table data={data} labels={columns} />
        </div>
      </div>
    </div>
  );
}

export default CustomersSection;
