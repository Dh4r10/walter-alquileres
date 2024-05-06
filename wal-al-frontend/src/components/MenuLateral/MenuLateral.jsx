import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu, ConfigProvider } from 'antd';

import { ITEMS } from './MenuLateralConstans';
import { getLevelKeys } from './MenuLateralFunctions';

import './MenuLateral.scss';

const levelKeys = getLevelKeys(ITEMS);

const MenuLateral = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
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
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBorderRadius: 'none',
              },
            },
          }}
        >
          <Menu
            className="menu-lateral__component-ant"
            mode="inline"
            defaultSelectedKeys={['231']}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            inlineCollapsed={collapsed}
            items={ITEMS}
          />
        </ConfigProvider>
      </div>
      <div className="grid mx-4">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export default MenuLateral;
