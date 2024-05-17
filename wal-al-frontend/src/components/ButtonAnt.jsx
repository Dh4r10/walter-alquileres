import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const ButtonAnt = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: '4px',
                },
                components: {
                    Button: {
                        colorBorderBg: 'red'
                    }
                }
            }}
        >
            <Space direction="vertical" size="large">
                <Space.Compact size="large" className="w-full min-w-28">
                    <Button className='w-full text-sm' icon={<FontAwesomeIcon icon={faPlus} className='text-xs' />} iconPosition='start'>
                        Crear usuario
                    </Button>
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};
export default ButtonAnt;