import React from 'react';
import { QmButton, QmForm } from '@jiaozhiye/qm-design-react';

const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default class ButtonDemo extends React.Component {
  clickHandle = async () => {
    await sleep(1000);
    console.log('删除成功！');
  };

  state = {
    items: [
      {
        type: 'INPUT',
        label: 'asdasd',
        tooltip: 'Label 描述信息',
        fieldName: 'a',
      },
    ],
  };

  render() {
    return (
      <>
        <QmForm items={this.state.items} />
        <QmButton type="danger" confirm={{}} click={this.clickHandle}>
          删除
        </QmButton>
      </>
    );
  }
}
