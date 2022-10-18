import { FaProductHunt, FaFileInvoiceDollar, FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiHumanPyramid } from "react-icons/gi";

const iconStyle = {
  fontSize: "20px",
  margin: "0 10px 0 0",
};

const menuList = [
  {
    value: "option-1",
    label: "Trang chủ",
    path: "/admin/dashboard",
    icon: <AiFillHome style={iconStyle} />,
  },
  {
    value: "option-2",
    label: "Sản phẩm",
    path: "/admin/products",
    icon: <FaProductHunt style={iconStyle} />,
  },
  {
    value: "option-3",
    label: "Đơn hàng",
    path: "/admin/orders",
    icon: <FaFileInvoiceDollar style={iconStyle} />,
  },
  {
    value: "option-4",
    label: "Khách hàng",
    path: "/admin/customers",
    icon: <GiHumanPyramid style={iconStyle} />,
  },
  {
    value: "option-5",
    label: "Người dùng",
    path: "/admin/users",
    icon: <FaUserAlt style={iconStyle} />,
  },
];

export default menuList;
