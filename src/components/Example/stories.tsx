import { Story, Meta } from '@storybook/react';

import Example from '.';

export default {
  component: Example,
  title: 'Example',
  args: {
    title: 'Test Title',
    description: 'Test Description',
  },
} as Meta;

export const Basic: Story = args => <Example {...args} />;
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description',
};

export const Default: Story = args => <Example {...args} />;
