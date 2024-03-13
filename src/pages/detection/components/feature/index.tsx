import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import Cdn from './cdn';
import Semantic from './semantic';

const onChange = (key: string) => {
  console.log(key);
};

const FeatureSelect: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '语义特征',
      children: <Semantic />,
    },
    {
      key: '2',
      label: '结构特征',
      children: <Cdn />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default FeatureSelect;
