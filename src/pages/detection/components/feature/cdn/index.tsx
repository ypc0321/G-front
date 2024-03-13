import type { RadioChangeEvent } from 'antd';
import { Radio, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Text } = Typography;

const Cdn: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      选择结构特征：
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>是</Radio>
        <Radio value={2}>否</Radio>
      </Radio.Group>
      <div>
        <Title level={3}>构建外部图网络CDN</Title>
        <Text>
          使用 Dependency Finder
          解析源代码，检测两类之间的交互关系，以软件类作为结点，类与类之间的交互关系作为边，以此构建外部图网络。
        </Text>
        <Title level={3}>Node2vec 模型提取外部图的特征嵌入</Title>
        <Text>
          使用 Node2vec
          算法学习外部图的节点嵌入，以实现节点的有偏随机游走，从而形成一个随机序列，以便更好地表征外部图的节点信息
        </Text>
        <Title level={3}>GCN提取基于CDN的结构特征</Title>
        <Text>GCN使用了两层卷积，输入是一个外部图网络的节点表征向量</Text>
      </div>
    </>
  );
};

export default Cdn;
