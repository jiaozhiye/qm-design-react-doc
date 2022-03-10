import React from 'react';
import { QmButton } from '@jiaozhiye/qm-design-react';

const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default class ButtonDemo extends React.Component {
  clickHandle = async () => {
    await sleep(1000);
  };

  render() {
    return (
      <QmButton type="primary" click={this.clickHandle}>
        提交
      </QmButton>
    );
  }
}
