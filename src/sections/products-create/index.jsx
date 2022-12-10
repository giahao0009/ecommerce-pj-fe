import React, { useState, useRef, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { Color } from "../../assets/styles/variable";
import { Link } from "react-router-dom";
import SunEditor from "suneditor-react";
import { useDispatch } from "react-redux";
import productApi from "../../api/productApi";
import { useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../redux/toastSlice";
import axios from "axios";

function ProductsCreate() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const editor = useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [shipping, setShipping] = useState(true);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [categories, setCategories] = useState([]);

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  // const onChangeForm = (e) => {
  //   setFormState({ ...formState, [e.target.name]: e.target.value });
  //   console.log(formState);
  // };

  const handleChangeDes = (content) => {
    setDescription(content);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    // formData.append("category", "633d5e51a89f262af18a08b4");
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("shipping", shipping);
    formData.append("description", description);
    formData.append("photo", photo);
    const postData = async () => {
      try {
        const res = await productApi.postProduct(formData, user.accessToken);
        console.log(res);
        dispatch(toastSuccess("Thêm sản phẩm thành công"));
        window.location.reload();
      } catch (err) {
        console.log(err);
        dispatch(toastError("Thêm sản phẩm thất bại"));
      }
    };
    postData();
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await productApi.getCategories();
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="container-fluid">
      <form onSubmit={(e) => onSubmitForm(e)}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tên sản phẩm</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Đơn giá sản phẩm</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Loại sản phẩm</label>
              <select
                className="form-select"
                value={category}
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>Loại sản phẩm</option>
                {categories.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Số lượng</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping</label>
              <select
                className="form-select"
                name="shipping"
                value={shipping}
                onChange={(e) => setShipping(e.target.value)}
              >
                <option value={true} selected>
                  True
                </option>
                <option value={false}>False</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <label className="form-label">Lựa chọn hình ảnh sản phẩm</label>
            <input
              className="form-control"
              type="file"
              name="photo"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <p className="mb-2"> Mô tả sản phẩm </p>
            <SunEditor
              getSunEditorInstance={getSunEditorInstance}
              lang="en"
              width="100%"
              height="100%"
              placeholder="Hãy điền mô tả sản phẩm nhé"
              onChange={handleChangeDes}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <button type="submit" className="btn btn-primary">
              Tạo sản phẩm
            </button>
            <Link to={"/admin/products"}>
              <button className="btn btn-warning ms-2">Huỷ tạo</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductsCreate;
