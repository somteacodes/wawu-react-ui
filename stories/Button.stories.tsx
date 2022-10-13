import Button, { ButtonType } from "../src/components/Button/Button";
import { Story } from "@storybook/react";
import React from "react";
 
export default {
  title: "Button",
  component: Button,
  argTypes:{handleClick:{action:"handleClick"}}
};

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  color: "primary",
  size: "md",
};
