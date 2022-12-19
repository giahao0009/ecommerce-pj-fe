import React, { useEffect, useState } from "react";
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
import orderApi from "../../api/orderApi";
import moment from "moment";

function OrderSection() {
  const [countUnconfirm, setCountUnconfirm] = useState(0);
  const [countConfirm, setCountConfirm] = useState(0);
  const [countSuccess, setCountSuccess] = useState(0);
  const [countFail, setCountFail] = useState(0);
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
      orderCode: "HD" + item._id,
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

  useEffect(() => {
    const countUnconfirmOrder = async () => {
      const res = await orderApi.getCountUnconfirmOrder(token);
      setCountUnconfirm(res.data.count);
    };
    countUnconfirmOrder();
  }, []);

  useEffect(() => {
    const countConfirmOrder = async () => {
      const res = await orderApi.getCountConfirmOrder(token);
      setCountConfirm(res.data.count);
    };
    countConfirmOrder();
  }, []);

  useEffect(() => {
    const countSuccessOrder = async () => {
      const res = await orderApi.getCountSuccess(token);
      setCountSuccess(res.data.count);
    };
    countSuccessOrder();
  }, []);

  useEffect(() => {
    const countFailOrder = async () => {
      const res = await orderApi.getCountSuc(token);
      setCountFail(res.data.count);
    };
    countFailOrder();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-3">
          <Card
            icon="BsFillBagCheckFill"
            title="Chưa xác nhận"
            content={countUnconfirm}
            styleIcon={styleIcon}
          />
        </div>
        <div className="col-3">
          <Card
            icon="BsFillBagXFill"
            title="Đã xác nhận"
            content={countConfirm}
            styleIcon={styleIcon}
          />
        </div>
        <div className="col-3">
          <Card
            icon="BsFillBagXFill"
            title="Hoàn thành"
            content={countSuccess}
            styleIcon={styleIcon}
          />
        </div>
        <div className="col-3">
          <Card
            icon="BsFillBagXFill"
            title="Bị huỷ"
            content={countFail}
            styleIcon={styleIcon}
          />
        </div>
      </div>
      <div>
        <Table data={orders} labels={columns} filter={filterFactory()} />
      </div>
    </div>
  );
}

export default OrderSection;
