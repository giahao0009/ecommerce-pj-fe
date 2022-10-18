import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function Products() {
  const products = [
    {
      id: 1,
      name: "Gia Hao",
      price: 1000,
    },
    {
      id: 2,
      name: "Gia Hao",
      price: 1000,
    },
    {
      id: 3,
      name: "Gia Hao",
      price: 1000,
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true,
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];
  return (
    <div>
      <BootstrapTable
        striped
        hover
        keyField="id"
        data={products}
        columns={columns}
      ></BootstrapTable>
    </div>
  );
}

export default Products;
