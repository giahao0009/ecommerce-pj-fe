import React, { useState, useEffect, useRef } from "react";
import ImageUploading from "react-images-uploading";
import SunEditor from "suneditor-react";
import productApi from "../../api/productApi";
import { useParams } from "react-router-dom";
import { Color } from "../../assets/styles/variable";
import { useSelector, useDispatch } from "react-redux";
import { toastSuccess, toastError } from "../../redux/toastSlice";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";

function ProductsEdit() {
  const { productId } = useParams();
  const [formState, setFormState] = useState({});
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state?.auth?.login?.currentUser?.accessToken
  );
  const editor = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await productApi.getDetail(productId);
      console.log(response);
      setFormState(response);
      setContents(response.description);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const res = await productApi.getCategories();
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const handleChangeDes = (content) => {
    setFormState({ ...formState, description: content });
  };

  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = () => {
    const update = async () => {
      try {
        const res = await productApi.updateProduct(productId, formState, token);
        console.log(res);
        dispatch(toastSuccess("Cập nhật thông tin sản phẩm thành công"));
      } catch (err) {
        console.log(err);
        dispatch(toastError("Cập nhật sản phẩm không thành công"));
      }
    };
    update();
  };

  const deleteProduct = () => {
    const deleteP = async () => {
      const res = await productApi.deleteProduct(productId, token);
      if (res.status === 200) {
        dispatch(toastSuccess("Xoá sản phẩm thành công"));
      } else {
        dispatch(toastError("Xoá sản phẩm thất bại"));
      }
      // try {
      //   await productApi.deleteProduct(productId, token);
      //   await dispatch(toastSuccess("Xoá sản phẩm thành công"));
      // } catch (err) {
      //   dispatch(
      //     toastError(
      //       "Xoá sản phẩm không thành công, do sản phẩm đang nằm trong giỏ hàng hoặc hoá đơn nào đó"
      //     )
      //   );
      // }
    };
    deleteP();
  };

  const handleDeleteProduct = () => {
    confirmAlert({
      title: "Xác nhận xoá sản phẩm",
      message: "Bạn có thực sự muốn thực hiện hành động xoá này",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const res = await productApi.deleteProduct(productId, token);
            if (res.status === 200) {
              dispatch(toastSuccess("Xoá sản phẩm thành công"));
            } else {
              dispatch(toastError("Xoá sản phẩm thất bại"));
            }
            dispatch(toastSuccess("Xoá sản phẩm thành công"));
            navigate("/admin/products");
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tên sản phẩm</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formState.name}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Đơn giá sản phẩm</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={formState.price}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Loại sản phẩm</label>
              <select
                className="form-select"
                value={formState.category}
                name="category"
                onChange={(e) => handleOnChange(e)}
              >
                {categories.map((item, index) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Số lượng</label>
              <input
                type="text"
                className="form-control"
                name="quantity"
                value={formState.quantity}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping</label>
              <select
                className="form-select"
                name="shipping"
                value={formState.shipping}
                onChange={(e) => handleOnChange(e)}
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <p className="mb-2">Hình ảnh sản phẩm</p>
            <div className="p-2 border border-warning border-3 rounded">
              <img
                className="img-fluid"
                src={`${process.env.REACT_APP_API_ENDPOINT}/product/photo/${productId}`}
              />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div className="col-12">
              <p className="mb-2"> Mô tả sản phẩm </p>
              <SunEditor
                autoFocus={false}
                getSunEditorInstance={getSunEditorInstance}
                lang="en"
                width="100%"
                height="100%"
                placeholder="Hãy điền mô tả sản phẩm nhé"
                onChange={handleChangeDes}
                setContents={contents}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <button onClick={handleUpdateProduct} className="btn btn-primary">
              Chỉnh sửa sản phẩm
            </button>
            <button
              onClick={handleDeleteProduct}
              className="btn btn-danger ms-2"
            >
              Xoá sản phẩm
            </button>
            <Link to={"/admin/products"}>
              <button className="btn btn-warning ms-2">Huỷ tạo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsEdit;
