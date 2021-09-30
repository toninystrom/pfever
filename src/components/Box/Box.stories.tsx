import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Testi/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} ><p>Testi</p></Box>;

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
//   label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
