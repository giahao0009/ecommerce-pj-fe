import React, { useRef, useState } from "react";
import productApi from "../../api/productApi";
import { useSelector } from "react-redux";

function ProductCategoriesCreate(edit) {
  const [name, setName] = useState("");
  const [rerender, setRerender] = useState(false);
  const user = useSelector((state) => state.auth.login?.currentUser);

  const onSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const category = {
          name: name,
        };
        const res = await productApi.postCategory(category, user.accessToken);
        console.log(res);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tên loại</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Tạo loại sản phẩm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProductCategoriesCreate;
