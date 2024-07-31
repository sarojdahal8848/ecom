import { Button, ButtonProps } from './Button';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<ButtonProps> = {
  title: 'Component/Button',
  component: Button,

  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    onClick: { action: 'clicked' },
    className: {
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click',
    className: ''
  },
};

export const Outline: Story = {
    args: {
      variant: 'outline',
      size: 'default',
      children: 'Click',
      className: ''
    },
};




