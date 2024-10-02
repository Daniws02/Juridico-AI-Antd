import React from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import { UserOutlined, DashboardOutlined, BarChartOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function Dashboard() {

  return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Sider width={200} style={{
          background: 'linear-gradient(135deg, #6253e1, #04befe)'
        }}>
        <div style={{ textAlign: 'center', padding: '24px', color: '#fff', fontSize: '20px' }}>
          Dashboard
        </div>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined style={{ color: '#ffffff' }} />}>
            Início
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined style={{ color: '#ffffff' }} />}>
            Usuários
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined style={{ color: '#ffffff' }} />}>
            Relatórios
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined style={{ color: '#ffffff' }} />}>
            Configurações
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined style={{ color: '#ffffff' }} />}>
            Sair
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{backgroundColor: '#fff'}}>
        <Header style={{ padding: 0, color: '#fff', textAlign: 'center', background: 'linear-gradient(360deg, #f0f2f5, #6253e1)'
 }}>
          <h1 style={{ margin: '16px 0', fontSize: '24px' }}>Bem-vindo ao seu Dashboard</h1>
        </Header>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280, backgroundColor: '#f0f2f5' }}>
          {/* Container para as duas partes */}
          <Row gutter={16} style={{ marginBottom: 24 }}>
            {/* Seção de Estatísticas */}
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
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
