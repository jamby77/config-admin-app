import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./CheckboxInput";

export default {
  title: "Config UI/Input/Checkbox",
  component: Input,
  argTypes: {
    variant: {
      options: ["small", "medium", "large"],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  checked: true,
  variant: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  variant: "medium",
};

export const Large = Template.bind({});
Large.args = {
  checked: true,
  variant: "large",
};
