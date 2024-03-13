import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import Mlp from './mlp';

const onChange = (key: string) => {
  console.log(key);
};

const Classification: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '多层感知机',
      children: <Mlp />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Classification;
