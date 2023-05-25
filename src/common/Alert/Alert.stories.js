import React from 'react';
import Alert from './Alert';

export default {
  title: 'Common/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
  type: {
    options: ['data', 'bookmark', 'content', 'error'],
    control: {
      type: 'select',
    },
  },
};
Default.args = {
  type: 'data',
};
