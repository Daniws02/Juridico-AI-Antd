import React, { useState } from 'react';
import './style.css';
import { Layout, Menu, Card, Row, Col } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(true); // Estado para colapsar o Sider

  // Funções para lidar com o mouse
  const handleMouseEnter = () => {
    setCollapsed(false); // Expandir o Sider
  };

  const handleMouseLeave = () => {
    setCollapsed(true); // Colapsar o Sider
  };

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Sider
        style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #6253e1, #04befe)',
        }}
        collapsible
        collapsed={collapsed} // Usa o estado para controle de colapso
        onMouseEnter={handleMouseEnter} // Aumenta o Sider ao passar o mouse
        onMouseLeave={handleMouseLeave}
        trigger={null} // Diminui o Sider ao retirar o mouse
      >
        <div
          style={{
            textAlign: 'center',
            padding: '24px',
            color: '#fff',
            fontSize: collapsed ? '5px' : '20px', // Ajusta o tamanho da fonte
            transition: 'font-size 0.3s',
          }}
        >
          Dashboard
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
          }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined style={{ color: '#ffffff' }} />} >
            Início
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined style={{ color: '#ffffff' }} />} >
            Usuários
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined style={{ color: '#ffffff' }} />} >
            Relatórios
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined style={{ color: '#ffffff' }} />} >
            Configurações
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined style={{ color: '#ffffff' }} />} >
            Sair
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            color: '#fff',
            textAlign: 'center',
            background: 'linear-gradient(360deg, #f0f2f5, #6253e1)',
          }}
        >
          <h1 style={{ margin: '16px 0', fontSize: '24px', display: 'block' }}>
            Bem-vindo ao seu Dashboard
          </h1>
        </Header>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280, backgroundColor: '#f0f2f5' }}>
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={8}>
              <Card title="Visitas" bordered={false} style={{ marginBottom: 16 }}>
                <h2 style={{ textAlign: 'center' }}>100</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Usuários" bordered={false} style={{ marginBottom: 16 }}>
                <h2 style={{ textAlign: 'center' }}>50</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Relatórios" bordered={false} style={{ marginBottom: 16 }}>
                <h2 style={{ textAlign: 'center' }}>30</h2>
              </Card>
            </Col>
          </Row>

          {/* Seção do Gráfico */}
          <div style={{ marginTop: 20 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Visitas ao longo dos meses</h3>
            <div style={{ height: '400px' }}>
              {/* Aqui você pode adicionar um gráfico */}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
