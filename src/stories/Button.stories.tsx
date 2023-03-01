import React, { Children } from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

export const PrimaryBold = Template.bind({});
PrimaryBold.args = {
  children: 'Bold',
  variant: 'primary',
  fontWeight: 'bold',
};
