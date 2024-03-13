import type { RadioChangeEvent } from 'antd';
import { Radio, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Text } = Typography;

const Semantic: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      选择语义特征：
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>是</Radio>
        <Radio value={2}>否</Radio>
      </Radio.Group>
      <div>
        <Title level={3}>构建抽象语法树及生成Token序列</Title>
        <Text>
          使用 javalang 的 API 解析软件项目文件并生成相应的抽象语法树。选取三种类型 的节点用于生成
          Token 序列：（1） 用于表示方法调用和类实例化的节点（2）表示声明的节点（3）控制流节点
        </Text>
        <Title level={3}>Token序列映射成整数向量</Title>
        <Text>
          在整数和 Token 之间建立一个映射，将每一个 Token 与一个 大于 0
          的整数标识符相对应，此整数标识符的范围从 1 到软件中 Token
          类型的数量。通过这种映射方式，相同的 Token 在向量中保持相同的整数标识符，不同的
          Token（如不同的类名和方法名）则是不同的整数标识符。此外，本文只对出现3 次或3次以上的 Token
          进行编码，而将其他 Token 表示为0
        </Text>
        <Title level={3}>BiLSTM提取语义特征</Title>
        <Text>将前面Token生成的整数向量输入到BiLSTM中得到语义特征</Text>
      </div>
    </>
  );
};

export default Semantic;
