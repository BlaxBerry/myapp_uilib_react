import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import UncontrolledDialogComponent, {
  type Ref as UncontrolledDialogRef,
} from "../../../../src/Dialogs/UncontrolledDialog";
import ControlledDialogMeta from "../ControlledDialog/index.stories";

const meta = {
  title: "Organisms/Dialogs/UncontrolledDialog",
  component: UncontrolledDialogComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dialogTitle: ControlledDialogMeta.argTypes.dialogTitle,
    dialogActions: ControlledDialogMeta.argTypes.dialogActions,
    dialogProps: ControlledDialogMeta.argTypes.dialogProps,
    children: ControlledDialogMeta.argTypes.children,
    escapeBackdropClick: {
      description: "值为`true`时点击背景不会关闭 Dialog",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  // common args
  args: {
    dialogTitle: "Dialog Title",
    dialogActions: "Dialog Actions",
    dialogProps: { maxWidth: "md", disableEscapeKeyDown: false },
    children: "Dialog Content",
    escapeBackdropClick: false,
  },
} satisfies Meta<typeof UncontrolledDialogComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  render: (args) => {
    const ref = React.useRef<UncontrolledDialogRef>(null);
    const handleOpen = () => ref.current?.handleOpen();
    return (
      <>
        <button onClick={handleOpen}>show dialog</button>
        <UncontrolledDialogComponent {...args} ref={ref}>
          Uncontrolled Dialog
        </UncontrolledDialogComponent>
      </>
    );
  },
};

export const EscapeExample: StoryObj<typeof meta> = {
  name: "禁止逃逸关闭",
  parameters: {
    controls: {
      include: ["dialogProps", "escapeBackdropClick"],
    },
  },
  args: {
    dialogProps: {
      ...meta.args.dialogProps,
      disableEscapeKeyDown: true,
    },
    escapeBackdropClick: true,
  },
  render: (args) => {
    const ref = React.useRef<UncontrolledDialogRef>(null);
    const handleOpen = () => ref.current?.handleOpen();
    const handleClose = () => ref.current?.handleClose();
    return (
      <>
        <button onClick={handleOpen}>show dialog</button>
        <UncontrolledDialogComponent
          {...args}
          ref={ref}
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
        </UncontrolledDialogComponent>
      </>
    );
  },
};
