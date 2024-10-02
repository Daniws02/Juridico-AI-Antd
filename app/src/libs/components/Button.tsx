import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import 'antd/dist/antd.css'; // Importar o CSS do Ant Design

// Definindo as props do componente
interface CustomButtonProps extends ButtonProps {
    loading?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ loading, disabled, type, children, icon }) => {
    return (
        <Button
            loading={loading}
            disabled={disabled}
            type={type}
            style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #ff7a18, #e52e71)',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: '15px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                boxShadow: '0 3px 10px rgba(255, 115, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff9966, #ff5e62)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 7px 20px rgba(255, 115, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff7a18, #e52e71)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(255, 115, 0, 0.3)';
            }}
            icon={icon}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
