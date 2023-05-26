import Alert from './Alert';

export default {
  title: 'Common/Alert',
  component: Alert,
};

export const Default = {
  argTypes: {
    type: {
      options: ['data', 'bookmark', 'content', 'error'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    type: 'data',
  },
};
