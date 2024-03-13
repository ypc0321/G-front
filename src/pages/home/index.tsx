import { GridContent } from '@ant-design/pro-components';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import Dataset from './components/dataset';
import Defect from './components/defective';
const { Title, Text } = Typography;

import './index.less';

const Home: React.FC = () => {
  return (
    <GridContent>
      <Row gutter={[16, 16]}>
        <Col className="home-col" span={12}>
          <Defect />
        </Col>
        <Col className="home-col" span={12}>
          <Dataset />
        </Col>
      </Row>
      <div className="home-content">
        <Title level={3}>数据集来源</Title>
        <Text>
          使用的数据集来自开源的软件数据仓库PROMISE数据集，该数据集收集了33个项目的度量元，我们从中选取了7个Apache开源项目：Ant、Camel、jEdit、Lucene、Poi、Velocity、Xalan
        </Text>
        <Title level={3}>实验设置</Title>
        <Text>
          在恶意代码检测问题上，选用F1值和AUC(ROC曲线的下面积)作为主要评价指标。本文采用的模型是基于深度学习的模型，在训练过程中将数据集划分为4:1的训练和测试比例
        </Text>
        <Title level={3}>实验环境</Title>
        <Text>
          实验的操作系统为ubuntu18，CPU型号是16 vCPU Intel(R) Xeon(R) Platinum 8350C CPU @
          2.60GHz，GPU是NVIDIA GeForce
          RTX3090，开发工具基于VSCode，开发语义是Python-3.8，深度学习框架为TensorFlow-2.5.0
        </Text>
      </div>
    </GridContent>
  );
};

export default Home;
