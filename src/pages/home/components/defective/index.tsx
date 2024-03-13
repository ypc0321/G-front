import { Column } from '@ant-design/plots';
import React from 'react';

import './index.less';

const Defect: React.FC = () => {
  const data = [
    {
      type: 'Ant',
      sales: 0.23,
    },
    {
      type: 'Camel',
      sales: 0.21,
    },
    {
      type: 'jEdit',
      sales: 0.24,
    },
    {
      type: 'Lucene',
      sales: 0.59,
    },
    {
      type: 'Poi',
      sales: 0.67,
    },
    {
      type: 'Velocity',
      sales: 0.35,
    },
    {
      type: 'Xalan',
      sales: 0.46,
    },
  ];

  const config = {
    data,
    title: '缺陷率分布',
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '缺陷率',
      },
    },
  };

  return <Column className="columnq" {...config} />;
};

export default Defect;
