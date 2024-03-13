import { Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const Mlp: React.FC = () => {
  return (
    <>
      <Paragraph>
        1. 多层感知机是一种基于前馈神经网络的结构，
        由输入层、隐藏层和输出层组成，其中隐藏层可以有多层。每一层的神经元与相邻层的神经元相邻，通过不断调整神经元之间的权重，
        实现对复杂问题的学习和预测。
      </Paragraph>
      <Paragraph>
        2. 多层感知机的输入层用于接收数据，隐藏层
        可以有多层，每个隐藏层包含若干个神经元单元，通过激活函数将输入数据进行非线性转换，输出层用于输出结果，通常设置一个阈值来决定
        输出哪一类。
      </Paragraph>
      <Paragraph>
        3. 为每个神经元设置权重，同时在激活函数中加入一个偏置项，调整神经元的输出值。
      </Paragraph>
      <Paragraph>4. 多层感知机使用反向传播算法来进行权重的更新和调整。</Paragraph>
    </>
  );
};

export default Mlp;
