import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastSuccess, toastError } from "../../redux/toastSlice";

function ProductCategoriesEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [data, setData] = useState("");
  const user = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    const featchData = async () => {
      const response = await productApi.getDetailCategory(categoryId);
      setData(response);
    };
    featchData();
  }, []);

  const handleUpdate = () => {
    try {
      const putData = async () => {
        const res = await productApi.putDetailCategory(
          { name: data.name },
          categoryId,
          user.accessToken
        );
        dispatch(toastSuccess("Sửa chữa thông tin loại sản phẩm thành công"));
      };
      putData();
    } catch (err) {
      dispatch(toastError("Sửa chữa thông tin loại sản phẩm thất bại"));
    }
  };

  const handleDelete = () => {
    let confirmOk = window.confirm("Bạn có muốn xoá");
    if (confirmOk) {
      try {
        const deleteC = async () => {
          const res = await productApi.deleteCategory(
            categoryId,
            user.accessToken
          );
          console.log(res);
          navigate("/admin/products/category");
        };
        deleteC();
      } catch (err) {
        dispatch(toastError("Không thể xoá loại sản phẩm"));
      }
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tên loại</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mã loại</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data._id}
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày khởi tạo</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={moment(data.createdAt).format("DD/MM/YYYY")}
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày cập nhật gần nhất</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={moment(data.updatedAt).format("DD/MM/YYYY")}
                disabled
              />
            </div>
            <button onClick={handleUpdate} className="btn btn-primary">
              Sửa chữa
            </button>
            <button onClick={handleDelete} className="btn btn-danger ms-2">
              Xoá
            </button>
            <button className="btn btn-warning ms-2">Huỷ tạo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoriesEdit;
