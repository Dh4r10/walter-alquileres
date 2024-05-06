import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './MenuLateral.scss';
import MenuAnt from './MenuAnt';

const MenuLateral = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="menu-lateral h-full">
      <div className="w-full bg-white">
        <div className="menu-lateral__boton border-b-[1px]">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className="rounded-none w-20 h-14 border-r-[1px]"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <div className="w-full flex justify-center items-center bg-white border-r-[1px]">
            <img
              className="w-28"
              src="/img/logo_menu_lateral.png"
              alt="Walter logo pequeño"
            />
          </div>
        </div>
        <MenuAnt collapsed={collapsed} />
      </div>
      <div className="grid mx-4">{children}</div>
    </div>
  );
};
export default MenuLateral;
