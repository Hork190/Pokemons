import { Spin } from 'antd';
import React, { JSX } from 'react';

const LargeLoader: React.FC = (): JSX.Element => (
        <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spin size="large" />
        </div>
    )

export default LargeLoader;