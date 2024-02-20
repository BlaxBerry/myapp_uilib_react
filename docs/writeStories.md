# 开发步骤

关于开发时正确书写 Storybook 文档

## 初始化

该项目克隆后直接`yarn install`即可，但是作为补充新开启一个 Stroybook 项目时的步骤如下：

```shell
# 1. 创建一个前端项目 ( Stroybook 不能在一个空目录中初始化 )
# 比如：yarn create vite my-app --template react-swc-ts

# 2. 下载 Stroybook
yarn add storybook@latest

# 3. 初始化 Stroybook
yarn storybook init
```

## 两种写法

Stroybook的组件文档可以写在`.sories.ts|tsx`或`.mdx`文件中

- [写在 .sories.ts|tsx 文件中](#sorieststsx)
- [写在 .mdx 文件中](#mdx)

### sories.ts|tsx

Storybook 可以写在`.stroies.ts|tsx`文件中

通过 meta 对象设置该组件相关信息并默认导出，同时定义并具名到场各个 Story ( 该组件在接受不同 Props 时的各种情况展示 )

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import 组件 from "路径";

const meta = {
  // 该文档的标题
  title: "[分类]/[分类]/[组件]",
  // 该文档要展示的组件
  component: 组件,
  parameters: {
    // 组件在画布中展示方式
    layout: "centered|fullscreen",
  },
  // 自动生成文档，会使用第一个 Story
  tags: ["autodocs"],

  // 参数说明、类型、控制器相关
  argTypes: {
    参数名: {
      description: "说明",
      table: {
        defaultValue: { summary: "默认值" },
        type: { summary: "数据类型" },
      },
      // 参数切换器的类型
      control: "select|radio|text|number|boolean|color",
      // 为选择项时的字符串类型的值
      options: ["值", "值"],
      // 通过映射将options中的值作为名称并给其指定对应值
      mapping: { 值: 数据, 值: 数据 },
    },
  },

  // 默认的 props 参数值
  // 定义的前后顺序为 Control 面板上的顺序
  args: { 参数: 值 },
} satisfies Meta<typeof 组件>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story名: Story = {
  args: { 参数: 值 },
};

export const Story名: Story = {
  // 自定义覆盖用Stroy名
  name: "",
  // 传值时会覆盖 meta.args
  args: { 参数: 值 },
  parameters: {
    controls: {
      // 在该 Stroy 的 Control 中展示的 Props
      include: ["参数", "参数"],
      // 在该 Stroy 的 Control 中不展示的 Props
      exclude: ["参数", "参数"],
    },
  },
  // 自定义组件的渲染
  render: (args) => {
    return (
      <>
        <组件 {...args} />
        <组件 {...args} />
      </>
    );
  },
};
```

### mdx

Storybook 还可以将文档自定义写在`.mdx`文件中

此时必须删除`.stories.ts|tsx`文件中自动生成文档的项目`meta.tags`

建议定义于`.stories.ts|tsx`文件的同级目录

````tsx
import {
  Meta,
  Title,
  Subtitle,
  Controls,
  Canvas,
  Stroy,
  Source
} from "@storybook/blocks";
import * as Stories from "路径"; // 使用 .stories.ts|tsx 中的 Stories

// 声明该 MDX 文件为 Stroybook 的文档
<Meta
  title="[分类]/[分类]/[组件]" // 作用等同但会覆盖 stories.ts|tsx 中的 meta.title
  of={Stories}               // 用于使用 .stories.ts|tsx 中的 Stories
/>

// 文档主标题
// 等同于 Markdown 中的 #
<Title></Title>

// 文档副标题
<Subtitle></Subtitle>

// 使用参数切换器
<Controls />

// 仅展示指定的 Story
<Story of={Stories.Story对象名} />

// 代码使用 Markdown
```tsx
<Component {...props} />
```
// 代码使用 Stroybook 的 Source 组件
<Source dark code={`
function sum(a:number, b:number): number {
  return a + b;
}
`} />

// 使用画布展示指定的 Story ，携带默认源代码 (可能不全不正确)
<Canvas>
  <Story of={Stories.Story对象名} />
</Canvas>
````
