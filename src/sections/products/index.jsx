import React, { useState, useEffect } from "react";
import { Color } from "../../assets/styles/variable";
import Table from "../../components/table";
import { textFilter } from "react-bootstrap-table2-filter";
import Button from "../../components/button";
import { ProductControlWrapper, LinkCategory } from "./styled";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import productApi from "../../api/productApi";
import moment from "moment";
import { toastError } from "../../redux/toastSlice";
import { useQuery } from "react-query";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const featchDataProducts = async () => {
    try {
      const params = { order: "asc", limit: 10, sortBy: "name" };
      const response = await productApi.getAll(params);
      let convertList = response.map((item) => {
        return {
          ...item,
          category: item.category.name,
          createdAt: moment(item.createdAt).format("DD/MM/YYYY"),
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
    } catch (e) {
      console.log(e);
      dispatch(toastError("Hiển thị sản phẩm không thành công"));
    }
  };
  const { data, error, isError, isLoading } = useQuery(
    ["products"],
    featchDataProducts
  );

  const columns = [
    {
      dataField: "_id",
      text: "Product ID",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },

    {
      dataField: "name",
      text: "Sản phẩm",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      filter: textFilter({}),
    },
    {
      dataField: "category",
      text: "Mã loại",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "brand",
      text: "Nhãn hiệu",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "quantity",
      text: "Tồn kho",
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
    <div>
      <ProductControlWrapper>
        <Link to="category">
          <LinkCategory>Loại sản phẩm</LinkCategory>
        </Link>
        <Link to="create">
          <Button>Thêm sản phẩm</Button>
        </Link>
      </ProductControlWrapper>
      <Table data={data} labels={columns} />
    </div>
  );
}

export default Products;
