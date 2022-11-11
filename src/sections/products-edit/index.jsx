import React, { useState, useEffect, useRef } from "react";
import ImageUploading from "react-images-uploading";
import SunEditor from "suneditor-react";
import productApi from "../../api/productApi";
import { useParams } from "react-router-dom";
import { Color } from "../../assets/styles/variable";
import { Link } from "react-router-dom";


function ProductsEdit() {
  const { productId } = useParams();
  const [formState, setFormState] = useState({});
  const [images, setImages] = useState([
    {
      data_url:
        process.env.REACT_APP_API_ENDPOINT + `/product/photo/${productId}`,
    },
  ]);
  const maxNumber = 69;
  const editor = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await productApi.getDetail(productId);
      setFormState(response);
    };
    fetchData();
  }, []);

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const handleChangeDes = (content) => {
    setFormState({ ...formState, description: content });
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onClickImage = (e, onImageUpload) => {
    e.preventDefault();
    onImageUpload();
  };

  const onClickRemoveAll = (e, onImageRemoveAll) => {
    e.preventDefault();
    onImageRemoveAll();
  };

  console.log(images);

  return (
    <div className="container-fluid">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tên sản phẩm</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formState.name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Đơn giá sản phẩm</label>
              <input
                type="text"
                className="form-control"
                value={formState.price}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mã loại sản phẩm</label>
              <input
                type="text"
                className="form-control"
                value={formState.category}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Số lượng</label>
              <input
                type="text"
                className="form-control"
                value={formState.quantity}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping</label>
              <input
                type="text"
                className="form-control"
                value={formState.shipping}
              />
            </div>
          </div>
          <div className="col-6">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={
                      isDragging
                        ? { color: "red" }
                        : {
                            outline: "none",
                            border: "none",
                            background: `${Color.orangeColor}`,
                            padding: "10px",
                            color: `${Color.whiteColor}`,
                            borderRadius: "10px",
                          }
                    }
                    onClick={(e) => onClickImage(e, onImageUpload)}
                    {...dragProps}
                  >
                    Lựa chọn hình ảnh sản phẩm
                  </button>
                  &nbsp;
                  <button
                    onClick={(e) => onClickRemoveAll(e, onImageRemoveAll)}
                    style={{
                      outline: "none",
                      border: "none",
                      background: `${Color.orangeColor}`,
                      padding: "10px",
                      color: `${Color.whiteColor}`,
                      borderRadius: "10px",
                    }}
                  >
                    Remove image
                  </button>
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item"
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          height: "350px",
                        }}
                        src={image["data_url"]}
                        alt="Hình ảnh"
                      />
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
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

export default ProductsEdit;
