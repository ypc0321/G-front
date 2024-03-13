import { Pie } from '@ant-design/plots';

import './index.less';

const Dataset = () => {
  const data = [
    {
      type: 'Ant',
      value: 0.118161,
    },
    {
      type: 'Camel',
      value: 0.133479,
    },
    {
      type: 'jEdit',
      value: 0.056163,
    },
    {
      type: 'Lucene',
      value: 0.150984,
    },
    {
      type: 'Poi',
      value: 0.207148,
    },
    {
      type: 'Velocity',
      value: 0.057622,
    },
    {
      type: 'Xalan',
      value: 0.27644,
    },
  ];
  const config = {
    data,
    title: '样本数据集饼状图',
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      text: (d: Record<'type', string>) => `${d.type}`,
      position: 'spider',
    },
  };
  return <Pie className="home-dataset" {...config} />;
};

export default Dataset;
