import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import FormItemComponent from "../../../src/FormItems/FormItem";

const meta = {
  title: "Molecules/FormItem",
  component: FormItemComponent,
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
    label: {
      description: "标签文本",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    labelFloat: {
      description: "是否标签文本浮动",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    id: {
      description: "ID，使用`label`时会指向该表单",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
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
    errorText: {
      description: '错误提示信息，在不想在页面上显示但有需要占位时可使用`" "`',
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    // size: {
    //   description: "尺寸",
    //   table: {
    //     type: { summary: "small|medium" },
    //     defaultValue: { summary: "small" },
    //   },
    //   control: { type: "radio" },
    //   options: ["small", "medium"],
    // },

    // placeholder: {
    //   description: "占位文本",
    //   table: {
    //     type: { summary: "string" },
    //     defaultValue: { summary: "undefined" },
    //   },
    //   control: { type: "text" },
    // },
  },
  // common args
  args: {
    variant: "outlined",
    label: "Xxx",
    labelFloat: true,
    id: "xxx",
    disabled: false,
    error: false,
    errorText: "",
    // size: "small",
    // placeholder: "Placeholder",
  },
} satisfies Meta<typeof FormItemComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
};

export const ErrorControlledExample: StoryObj<typeof meta> = {
  name: "输入内容验证 ( 受控 )",
  args: {
    label: "Label",
  },
  parameters: {
    controls: {
      include: ["variant", "labelFloat"],
    },
  },
  render: (args) => {
    const sensitiveWords = ["fuck", "shit"];
    const sensitiveRegex = new RegExp(sensitiveWords.join("|"), "gi");

    const [value, setValue] = React.useState<string>("");
    const onChange: React.ChangeEventHandler<HTMLInputElement> =
      React.useCallback((e) => setValue(e.target.value), []);

    const isError = React.useMemo<boolean>(() => {
      return sensitiveRegex.test(value);
    }, [value, sensitiveRegex]);

    return (
      <>
        <p>
          <small>输入内容中禁止包含 "fuck","shit"</small>
        </p>
        <FormItemComponent
          {...args}
          value={value}
          onChange={onChange}
          error={isError}
          errorText={isError ? "Hi! watch your mouth" : " "}
        />
      </>
    );
  },
};

export const ErrorUncontrolledExample: StoryObj<typeof meta> = {
  name: "输入内容验证 ( 非控 )",

  parameters: {
    controls: {
      include: ["variant", "labelFloat"],
    },
  },
  render: (args) => {
    const sensitiveWords = ["fuck", "shit"];
    const sensitiveRegex = new RegExp(sensitiveWords.join("|"), "gi");

    const [isError, setIsError] = React.useState<boolean>(false);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const value = e.currentTarget.xxx.value;
      if (!value) {
        alert("请输入内容验证");
        return;
      }
      if (sensitiveRegex.test(value)) {
        setIsError(true);
        return;
      } else {
        alert("OK");
      }
    };

    return (
      <form onSubmit={onSubmit} style={{ marginTop: 40, marginBottom: 40 }}>
        <p>
          <small>输入内容中禁止包含 "fuck","shit"</small>
        </p>
        <FormItemComponent
          {...args}
          id="xxx"
          label="Label"
          error={isError}
          errorText={isError ? "Hi! watch your mouth" : " "}
        />
        <div style={{ marginTop: 20 }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  },
};
