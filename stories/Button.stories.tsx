import React from "react";
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,

}

export default meta;
const Template: Story<Props> = (args) => <Button {...args} />




export const Default = Template.bind({})
Default.args = {
    variant: 'normal',
    children: 'Click Me',
    color: 'primary', 
    size: 'large'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//     variant: 'normal',
//     color: 'secondary',
//     children: 'Click Me',

// }

export const Error = Template.bind({})
Error.args = {
    variant: 'normal',
    color: 'error',
    children: 'Click Me',
    

}

export const Warning = Template.bind({})
Warning.args = {
    variant: 'normal',
    color: 'warning',
    children: 'Click Me',

}
export const Success = Template.bind({})
Success.args = {
    variant: 'normal',
    color: 'success',
    children: 'Click Me',

}
export const Disabled = Template.bind({})
Disabled.args = {
    variant: 'normal',
    color: 'primary',
    children: 'Click Me',
    disabled:true

}
export const Outline = Template.bind({})
Outline.args = {
    variant: 'outline',
    color: 'error',
    children: 'Click Me',

}