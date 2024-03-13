import { Button, message, Steps, theme } from 'antd';
import React, { useState } from 'react';
import Classification from './components/classification';

const Detection: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: '选择特征',
      content: 'First-content',
    },
    {
      title: '选择分类器',
      content: 'Second-content',
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      {/* <div style={contentStyle}>{steps[current].content}</div> */}
      {/* <FeatureSelect /> */}
      <Classification />
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            检测
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </>
  );
};

export default Detection;
