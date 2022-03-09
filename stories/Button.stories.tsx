import React from "react";
import {Meta, Story} from '@storybook/react';
import {Button, Props} from '../src/Button';

const meta: Meta = {
    title:'Button',
    component:Button,

}

export default meta;
const Template:Story<Props> = (args)=><Button {...args}/>




export const Default = Template.bind({})
Default.args={
    variant:'normal',
    children:'Click Me'
}

export const Secondary = ()=> <Button color="secondary">Click Me</Button>

export const Error = ()=> <Button color="error">Click Me</Button>

export const Warning = ()=> <Button color="warning">Click Me</Button>

export const Success = ()=> <Button color="success">Click Me</Button>

export const Disabled = ()=> <Button  disabled>Click Me</Button>

export const Outline = ()=> <Button variant="outline">Click Me</Button>