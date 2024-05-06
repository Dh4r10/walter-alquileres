import React, { useState } from 'react';

import { getLevelKeys } from './MenuLateralFunctions';
import { ITEMS } from './MenuLateralConstans';

import { ConfigProvider, Menu } from 'antd';

const levelKeys = getLevelKeys(ITEMS);

const MenuAnt = (props) => {
  const { collapsed } = props;

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

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
  );
};

export default MenuAnt;
