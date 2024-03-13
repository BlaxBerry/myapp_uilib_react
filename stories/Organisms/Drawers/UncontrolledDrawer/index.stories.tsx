import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import UncontrolledDrawerComponent, {
  type Ref as UncontrolledDrawerRef,
} from "../../../../src/Drawers/UncontrolledDrawer";

const meta = {
  title: "Organisms/Drawers/UncontrolledDrawer",
  component: UncontrolledDrawerComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    drawerProps: {
      description: "MUI [DialogProps](https://mui.com/material-ui/api/drawer/)",
      control: { type: "object" },
      table: {
        type: { summary: "MUI DrawerProps" },
        defaultValue: { summary: "undefined" },
      },
    },
    escapeBackdropClick: {
      description: "值为`true`时点击背景不会关闭 Drawer",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    drawerProps: {
      anchor: "right",
      elevation: 20,
    },
    escapeBackdropClick: false,
  },
} satisfies Meta<typeof UncontrolledDrawerComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  render: (args) => {
    const ref = React.useRef<UncontrolledDrawerRef>(null);
    const handleOpen = () => ref.current?.handleOpen();
    const handleClose = () => ref.current?.handleClose();
    return (
      <>
        <button onClick={handleOpen}>show drawer</button>
        <UncontrolledDrawerComponent {...args} ref={ref}>
          <div>
            Uncontrolled Drawer
            <button onClick={handleClose}>Close</button>
          </div>
        </UncontrolledDrawerComponent>
      </>
    );
  },
};
