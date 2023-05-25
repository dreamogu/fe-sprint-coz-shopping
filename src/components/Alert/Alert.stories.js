import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from './Alert';

export default {
  title: 'components/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
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
