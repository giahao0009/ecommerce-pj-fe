import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { TableContainer } from "./styled";
import PropTypes from "prop-types";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";

Table.propTypes = {
  data: PropTypes.array,
  labels: PropTypes.array,
  filter: PropTypes.func,
};

Table.defaultProps = {
  data: [],
  labels: [],
  filter: null,
};

function Table({ labels, data, filter }) {
  return (
    <TableContainer>
      <BootstrapTable
        keyField="id"
        striped
        hover
        bordered={true}
        data={data}
        columns={labels}
        columnStyle={{ backgroundColor: "red" }}
        filter={filterFactory()}
        filterPosition="top"
        pagination={paginationFactory()}
      />
    </TableContainer>
  );
}

export default Table;
