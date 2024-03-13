import { Column } from '@ant-design/plots';
import React from 'react';

import './index.less';

const Defect: React.FC = () => {
  const data = [
    {
      type: 'Ant',
      defectRate: 0.23,
    },
    {
      type: 'Camel',
      defectRate: 0.21,
    },
    {
      type: 'jEdit',
      defectRate: 0.24,
    },
    {
      type: 'Lucene',
      defectRate: 0.59,
    },
    {
      type: 'Poi',
      defectRate: 0.67,
    },
    {
      type: 'Velocity',
      defectRate: 0.35,
    },
    {
      type: 'Xalan',
      defectRate: 0.46,
    },
  ];

  const config = {
    data,
    title: '缺陷率分布',
    xField: 'type',
    yField: 'defectRate',
    colorField: 'type',
  };

  return <Column className="home-defective" {...config} />;
};

export default Defect;
