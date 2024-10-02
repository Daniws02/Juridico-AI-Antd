import { Layout, Menu } from 'antd';
import { UserOutlined, DashboardOutlined } from '@ant-design/icons';

const {  Sider } = Layout;

export default function Side() {
  return (
      <Sider width={200} className="site-layout-background">
        <div className="logo" style={{ padding: '16px', color: 'white', fontSize: '20px' }}>
          Dashboard
        </div>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          {/* Adicione mais itens de menu conforme necessário */}
        </Menu>
      </Sider>
  );
};

