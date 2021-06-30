import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./ConfigInput";
import { TextInputTypes } from "./helper";

export default {
  title: "Config UI/Input/Text",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: Object.values(TextInputTypes),
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});

Text.args = {
  type: "text",
  value: "Test text",
  onChange: (e) => console.log(e.target.value),
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  value: 666,
};
