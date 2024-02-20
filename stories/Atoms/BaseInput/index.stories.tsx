import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseInputComponent from "../../../src/FormFields/BaseInput";

const meta = {
  title: "Atoms/BaseInput",
  component: BaseInputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "样式变体",
      table: {
        type: { summary: "outlined|standard|filled" },
        defaultValue: { summary: "outlined" },
      },
      control: { type: "select" },
      options: ["outlined", "standard", "filled"],
    },
    disabled: {
      description: "是否禁止操作",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "是否提示内容错误",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    size: {
      description: "尺寸",
      table: {
        type: { summary: "small|medium" },
        defaultValue: { summary: "small" },
      },
      control: { type: "radio" },
      options: ["small", "medium"],
    },
    placeholder: {
      description: "占位文本",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
  },
  // common args
  args: {
    variant: "outlined",
    disabled: false,
    error: false,
    size: "small",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof BaseInputComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
};

export const VariantExample: StoryObj<typeof meta> = {
  name: "样式变体",
  render: (args) => (
    <>
      <article>
        <h4>props.variant = "outlined"</h4>
        <BaseInputComponent {...args} variant="outlined" />
      </article>
      <article style={{ marginTop: 40, marginBottom: 40 }}>
        <h4>props.variant = "standard"</h4>
        <BaseInputComponent {...args} variant="standard" />
      </article>
      <article>
        <h4>props.variant = "filled"</h4>
        <BaseInputComponent {...args} variant="filled" />
      </article>
    </>
  ),
};

export const ControlledExample: StoryObj<typeof meta> = {
  name: "受控组件写法",
  render: (args) => {
    const [value, setValue] = React.useState<string>("");
    const onChange: React.ChangeEventHandler<HTMLInputElement> =
      React.useCallback((e) => setValue(e.target.value), []);

    return (
      <>
        <p>
          <small>* input something to check the changing of value</small>
        </p>
        <BaseInputComponent {...args} value={value} onChange={onChange} />
        <p style={{ height: "1rem", fontSize: "0.9rem" }}>{value}</p>
      </>
    );
  },
};
