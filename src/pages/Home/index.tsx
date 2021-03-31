import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <div className="editor-wrapper" dangerouslySetInnerHTML="" />
      </Card>
    </PageContainer>
  );
};
