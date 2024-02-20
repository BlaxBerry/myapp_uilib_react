import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import UploadButtonComponent, {
  DEFAULT_PROPS__LIMIT_SIZE,
  type Props as UploadButtonComponentProps,
} from "../../../src/Buttons/UploadButton";
import BaseButtonStroyMeta from "../../Atoms/BaseButton/index.stories";

const meta = {
  title: "Molecules/UploadButton",
  component: UploadButtonComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...BaseButtonStroyMeta.argTypes,

    accept: {
      description: "可上传的文件类型",
      control: { type: "text" },
    },
    multiple: {
      description: "可上传复数的文件",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    limitSize: {
      description: "上传文件的尺寸限制",
      control: { type: "number" },
      table: {
        defaultValue: { summary: DEFAULT_PROPS__LIMIT_SIZE },
      },
    },
    onFinish: {
      description: "文件上传完成后的回调",
    },
  },
  // common args
  args: {
    children: "xxx",
    accept: "image/svg+xml,.doc,.pdf",
    multiple: false,
    limitSize: DEFAULT_PROPS__LIMIT_SIZE,
    // ...BaseButtonStroyMeta.args,
  },
} satisfies Meta<typeof UploadButtonComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  parameters: {
    controls: {
      exclude: ["onFinish"],
    },
  },
  args: {
    onFinish: ({ files, limitSizeError }) => {
      console.log({ files, limitSizeError });
      const file = files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          const readResult = e.target?.result;
          console.log(readResult);
        };
      }
    },
  },
};

export const PreviewImgExample: StoryObj<typeof meta> = {
  name: "图片预览",
  parameters: {
    controls: {
      include: ["children", "accept", "limitSize"],
    },
  },
  args: {
    accept: "image/*",
  },
  render: (args) => {
    const [file, setFile] = React.useState<File>();
    const [imgSrc, setImgSrc] = React.useState<string | ArrayBuffer>();

    const handleUploadResult: UploadButtonComponentProps["onFinish"] = ({
      files,
    }) => {
      const file = files?.[0];
      setFile(file);

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          const readResult = e.target?.result;
          if (readResult) {
            setImgSrc(readResult);
          }
        };
      }
    };

    return (
      <>
        <UploadButtonComponent {...args} onFinish={handleUploadResult} />
        <img
          src={imgSrc as string}
          alt={file?.name}
          style={{
            display: "block",
            width: "200px",
            height: "200px",
            border: "1px solid black",
          }}
        />
        <span>{file?.name}</span>
      </>
    );
  },
};

export const LimitSizeExample: StoryObj<typeof meta> = {
  name: "上传文件尺寸",
  parameters: {
    controls: {
      include: ["children", "accept", "limitSize"],
    },
  },
  render: (args) => {
    type LimitSizeError = Parameters<
      UploadButtonComponentProps["onFinish"]
    >[0]["limitSizeError"];

    const [file, setFile] = React.useState<File | undefined>(undefined);
    const [limitSizeError, setLimitSizeError] =
      React.useState<LimitSizeError>(null);

    React.useEffect(() => cleanState(), [args]);

    const cleanState = () => {
      setFile(undefined);
      setLimitSizeError(null);
    };

    const handleUploadResult: UploadButtonComponentProps["onFinish"] = ({
      files,
      limitSizeError,
    }) => {
      setFile(files?.[0]);
      setLimitSizeError(limitSizeError);
    };

    return (
      <>
        <UploadButtonComponent {...args} onFinish={handleUploadResult} />
        {file && (
          <>
            <p>FileName: {file?.name}</p>
            <p>FileSize: {file?.size}</p>
          </>
        )}

        {limitSizeError?.inValidFile && (
          <div style={{ color: "red" }}>
            Upload Failed
            <p>LimitSize:{args.limitSize}</p>
            <p>FileSize: {file?.size}</p>
          </div>
        )}
      </>
    );
  },
};
