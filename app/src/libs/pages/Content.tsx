// Content.tsx
import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Dados fictícios para o gráfico
const data = [
  { month: 'Jan', visits: 30 },
  { month: 'Feb', visits: 50 },
  { month: 'Mar', visits: 80 },
  { month: 'Apr', visits: 100 },
  { month: 'May', visits: 70 },
  { month: 'Jun', visits: 90 },
  { month: 'Jul', visits: 120 },
  { month: 'Aug', visits: 150 },
  { month: 'Sep', visits: 130 },
  { month: 'Oct', visits: 160 },
  { month: 'Nov', visits: 200 },
  { month: 'Dec', visits: 180 },
];

const Content: React.FC = () => {
  return (
    <div style={{ padding: '24px', margin: 0, minHeight: 280, backgroundColor: '#f0f2f5' }}>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card
            title={<span style={{ fontSize: '18px', fontWeight: 'bold', color: '#6253e1' }}>Visitas</span>}
            bordered={false}
            style={{
              marginBottom: 16,
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            hoverable
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#6253e1' }}>100</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<span style={{ fontSize: '18px', fontWeight: 'bold', color: '#6253e1' }}>Usuários</span>}
            bordered={false}
            style={{
              marginBottom: 16,
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            hoverable
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#6253e1' }}>50</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<span style={{ fontSize: '18px', fontWeight: 'bold', color: '#6253e1' }}>Relatórios</span>}
            bordered={false}
            style={{
              marginBottom: 16,
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            hoverable
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#6253e1' }}>30</h2>
          </Card>
        </Col>
      </Row>

      {/* Seção do Gráfico */}
      <div style={{ marginTop: 20, height: '300px' }}> {/* Altera a altura do contêiner do gráfico */}
        <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Visitas ao longo dos meses</h3>
        <div style={{ height: '80%' }}> {/* Faz com que o gráfico ocupe 100% da altura do contêiner */}
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#6253e1" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Content;
