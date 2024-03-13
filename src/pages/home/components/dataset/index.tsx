import { Pie } from '@ant-design/plots';

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
    title: '样本数据集饼状图',
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default Dataset;
