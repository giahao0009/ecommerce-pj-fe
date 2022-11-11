import React from "react";
import Table from "../../components/table";
import { Color } from "../../assets/styles/variable";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import Icon from "../../assets/icons";
import Card from "../../components/card";

function OrderSection() {
  const styleIcon = {
    marginRight: "20px",
    fontSize: "30px",
  };
  const orders = [
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 0,
      amount: "277,000",
    },
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 1,
      amount: "277,000",
    },
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 1,
      amount: "277,000",
    },
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 0,
      amount: "277,000",
    },
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 0,
      amount: "277,000",
    },
    {
      orderCode: "SON00016",
      dateCreate: "15/10/2022 14:47",
      customerName: "Khách lẻ",
      status: 0,
      amount: "277,000",
    },
  ];

  const selectOptions = {
    0: "Hoàn thành",
    1: "Chưa hoàn thành",
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
  ];

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
