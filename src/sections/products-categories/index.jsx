import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Color } from "../../assets/styles/variable";
import { textFilter } from "react-bootstrap-table2-filter";
import Table from "../../components/table";
import productApi from "../../api/productApi";
import moment from "moment";

function ProductsCategories() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = [
    {
      dataField: "_id",
      text: "ID Loại",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "name",
      text: "Tên loại",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      filter: textFilter({}),
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
      text: "Ngày cập nhật gần nhất",
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
  useEffect(() => {
    const featchData = async () => {
      const res = await productApi.getCategories();
      console.log(res.data);
      let convertList = res.data.map((item) => {
        return {
          ...item,
          createdAt: moment(item.createdAt).format("DD/MM/YYYY"),
          updatedAt: moment(item.updatedAt).format("DD/MM/YYYY"),
          editButton: (
            <button
              className="btn btn-warning me-1"
              onClick={() => navigate(item._id)}
            >
              Edit
            </button>
          ),
        };
      });
      setData(convertList);
    };
    featchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-2">
          <Link to="create">
            <button className="btn btn-primary">Thêm loại sản phẩm</button>
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

export default ProductsCategories;
