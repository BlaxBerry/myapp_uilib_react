import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ControlledDialogComponent from "../../../../src/Dialogs/ControlledDialog";

const meta = {
  title: "Organisms/Dialogs/ControlledDialog",
  component: ControlledDialogComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      description: "是否打开 Dialog",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    handleClose: {
      description:
        "关闭 Dialog 的函数，值为`undefined`时点击`esc`按键以及点击背景不会关闭 Dialog",
      table: {
        type: { summary: "() => void" },
      },
    },
    dialogProps: {
      description:
        "MUI [DialogProps](https://mui.com/material-ui/react-dialog/)",
      control: { type: "object" },
      table: {
        type: { summary: "MUI DialogProps" },
        defaultValue: { summary: "undefined" },
      },
    },
    dialogTitle: {
      description: "Dialog 的顶部标题区",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    dialogActions: {
      description: "Dialog 的底部控制区，建议为按钮组",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      description: "Dialog 的内容",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  // common args
  args: {
    isOpen: false,
    dialogTitle: "Dialog Title",
    dialogActions: "Dialog Actions",
    dialogProps: { maxWidth: "md", disableEscapeKeyDown: false },
    children: "Dialog Content",
  },
} satisfies Meta<typeof ControlledDialogComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(!!args.isOpen);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    React.useEffect(() => setIsOpen(!!args.isOpen), [args.isOpen]);

    return (
      <>
        <button onClick={handleOpen}>show dialog</button>
        <ControlledDialogComponent
          {...args}
          isOpen={isOpen}
          handleClose={handleClose}
        />
      </>
    );
  },
};

export const EscapeExample: StoryObj<typeof meta> = {
  name: "禁止逃逸关闭",
  parameters: {
    controls: {
      include: ["isOpen", "dialogProps"],
    },
  },
  args: {
    dialogProps: {
      ...meta.args.dialogProps,
      disableEscapeKeyDown: true,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(!!args.isOpen);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    React.useEffect(() => setIsOpen(!!args.isOpen), [args.isOpen]);

    return (
      <>
        <button onClick={handleOpen}>show dialog</button>
        <ControlledDialogComponent
          {...args}
          isOpen={isOpen}
          dialogTitle={
            <>
              Dialog Title
              <button onClick={handleClose}>Close</button>
            </>
          }
          dialogActions={<button onClick={handleClose}>Close</button>}
        >
          Dialog Content
          <button onClick={handleClose}>Close</button>
        </ControlledDialogComponent>
      </>
    );
  },
};
