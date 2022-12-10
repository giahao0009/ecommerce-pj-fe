import React, { useEffect } from "react";
import Table from "../../components/table";
import { Color } from "../../assets/styles/variable";
import { useSelector, useDispatch } from "react-redux";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import { getAllOrderByAdmin } from "../../redux/apiRequest";
import Icon from "../../assets/icons";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function OrderSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(
    (state) => state?.auth?.login?.currentUser?.accessToken
  );
  const orderList = useSelector((state) => state?.order?.orders);
  const styleIcon = {
    marginRight: "20px",
    fontSize: "30px",
  };
  const orders = orderList.map((item) => {
    return {
      orderCode: item._id,
      dateCreate: moment(item.crearedAt).format("DD/MM/YYYY"),
      customerName: item.cusName,
      status: item.status,
      amount: item.amount,
      detailButton: (
        <button
          className="btn btn-warning me-1"
          onClick={() => {
            navigate(`/admin/order/${item._id}`);
          }}
        >
          Chi tiết
        </button>
      ),
    };
  });

  const selectOptions = {
    0: "Đã huỷ",
    1: "Chưa xác nhận",
    2: "Đã xác nhận",
    3: "Hoàn thành",
  };

  const columns = [
    {
      dataField: "orderCode",
      text: "Mã đơn hàng",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
    {
      dataField: "dateCreate",
      text: "Ngày tạo đơn",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      filter: textFilter(),
    },
    {
      dataField: "customerName",
      text: "Khách hàng",
      sort: true,
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      filter: textFilter(),
    },
    {
      dataField: "status",
      text: "Trạng thái",

      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
      formatter: (cell) => selectOptions[cell],
      filter: selectFilter({ options: selectOptions }),
    },
    {
      dataField: "detailButton",
      text: "Chi tiết",
      headerAlign: "center",
      headerStyle: {
        backgroundColor: Color.orangeColor,
        color: Color.whiteColor,
      },
    },
  ];

  useEffect(() => {
    getAllOrderByAdmin(dispatch, token);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-10 d-flex justify-content-start">
          <Card
            icon="BsFillBagCheckFill"
            title="Đơn hoàn thành"
            content="100"
            styleIcon={styleIcon}
            style={{ marginRight: "10px" }}
          />
          <Card
            icon="BsFillBagXFill"
            title="Đơn chưa hoàn thành"
            content="100"
            styleIcon={styleIcon}
          />
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <button className="btn btn-primary d-flex justify-content-end align-items-center">
            <Icon icon="BsPlusLg" style={{ marginRight: "10px" }} />
            Tạo đơn hàng
          </button>
        </div>
      </div>
      <div>
        <Table data={orders} labels={columns} filter={filterFactory()} />
      </div>
    </div>
  );
}

export default OrderSection;
