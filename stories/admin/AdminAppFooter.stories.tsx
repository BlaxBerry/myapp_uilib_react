import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { AdminAppFooter } from "../../src/admin";

const meta = {
  title: "admin/AdminAppFooter",
  component: AdminAppFooter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdminAppFooter>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",

  render: (args) => {
    const handleClick = React.useCallback(() => {
      console.log("click");
    }, []);
    return (
      <AdminAppFooter {...args}>
        <div>
          <p>aaaa</p>
          <p>bbbb</p>
          <button onClick={handleClick}>click</button>
        </div>
      </AdminAppFooter>
    );
  },
};
