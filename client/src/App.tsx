import { FC } from 'react';
import './App.css';

import { PageHeader, Steps, Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const { Step } = Steps;

const gems = ['Emerald', 'Sapphire', 'Ruby'];

const App: FC = () => (
  <div>
    <Layout className="layout">
      <Header>
        <div className='logo' />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {gems.map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`${gems[index]}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Gemstones"
        subTitle="Personal Dashboard Bedazzled"
      />,
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Goals</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Steps current={1}>
            <Step title="Finished" description="Start antd design experimentation" />
            <Step title="In Progress" description="Add simple antd design components" />
            <Step title="Waiting" description="Gather new requirements" />
          </Steps>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Antd Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </div>
);

export default App;