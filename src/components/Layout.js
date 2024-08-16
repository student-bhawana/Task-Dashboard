import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "../components/Dashboard";
import { useDispatch } from "react-redux";
import {
  GET_DASHBOARD_LISTING,
  SET_DASHBOARD_LISTING,
} from "../store/Action/webAction";
import { apiGet } from "../services/apiFetch";
import { pathObj } from "../services/pathObj";
import axios from "axios";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [loading, setLoading] = useState(false);
  const dispach = useDispatch();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    dispach(GET_DASHBOARD_LISTING());
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "16px" }}>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
