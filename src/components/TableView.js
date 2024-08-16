import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const { Column } = Table;

const TableView = ({ data = [] }) => {
  return (
    <Table dataSource={data} rowKey="id" pagination={false}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="User" dataIndex="user" key="user" />
      <Column title="Category" dataIndex="category" key="category" />
      <Column title="Details" dataIndex="details" key="details" />
      <Column title="IP Address" dataIndex="ipAddress" key="ipAddress" />
      <Column title="Data" dataIndex="timeStamp" key="timeStamp" />
    </Table>
  );
};

TableView.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableView;
