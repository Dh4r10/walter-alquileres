import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import MenuAnt from './MenuAnt';
import BreadcrumbCN from './BreadCrumb';
import { totalRutas } from '@/utils/paths';

import './MenuLateral.scss';

const MenuLateral = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="menu-lateral h-full overflow-auto">
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
      <div className="menu-lateral__content mx-4">
        <div className="flex items-center">
          <BreadcrumbCN rutas={totalRutas} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default MenuLateral;
