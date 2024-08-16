import React from 'react';
import { Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
                Dashboard
            </Menu.Item>
           
        </Menu>
    );
};

export default Sidebar;
