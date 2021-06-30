import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioInput from "./RadioInput";

export default {
  title: "Config UI/Input/Radio",
  component: RadioInput,
  variant: {
    options: ["small", "medium", "large"],
  },
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => (
  <RadioInput {...args} />
);

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
