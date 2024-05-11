import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, ConfigProvider } from 'antd';

const InputWitchIcon = () => (
    <ConfigProvider theme={{
        token: {
            borderRadius: "none"
        }
    }}>
        <Space direction="vertical" size="middle">
            <Space.Compact size="large" className='w-full'>
                <Input addonBefore={<SearchOutlined />} placeholder="Buscar" />
            </Space.Compact>
        </Space>
    </ConfigProvider>
);
export default InputWitchIcon;