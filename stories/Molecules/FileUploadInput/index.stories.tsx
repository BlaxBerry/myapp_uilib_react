import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import BaseButtonComponent from "../../../src/Buttons/BaseButton";
import FileUploadHiddenInputComponent, {
  type FileUploadFinishHandler,
  type FileUploadResult,
} from "../../../src/FormFields/FileUploadHiddenInput";

const meta = {
  title: "Molecules/FileUploadHiddenInput",
  component: FileUploadHiddenInputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    accept: {
      description: "可上传的文件类型",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "*" },
      },
    },
    multiple: {
      description: "是否上传复数的文件",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    limitSize: {
      description: "上传文件的尺寸限制 ( 字节大小 )",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1048576 (1MB) " },
      },
    },
    handleFinish: {
      description: "文件上传完成后的回调 ( 无论成功失败 )",
      table: {
        type: { summary: "( result: FileUploadResult ) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  args: {
    accept: "*",
    multiple: false,
    limitSize: 1024 * 1024 * 1,
    handleFinish: () => {},
  },
} satisfies Meta<typeof FileUploadHiddenInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseExample: Story = {
  name: "基本使用",
  render: (args) => {
    const handleFinish: FileUploadFinishHandler = React.useCallback(
      (result) => {
        // console.log(result)
      },
      [],
    );

    return (
      <>
        <button>
          <label>
            上传
            <FileUploadHiddenInputComponent
              {...args}
              handleFinish={handleFinish}
            />
          </label>
        </button>

        <BaseButtonComponent component="label">
          上传
          <FileUploadHiddenInputComponent
            {...args}
            handleFinish={handleFinish}
          />
        </BaseButtonComponent>
      </>
    );
  },
};

export const UploadedFilesExample: Story = {
  name: "上传文件信息",
  parameters: {
    controls: {
      include: ["accept"],
    },
  },
  args: {
    multiple: true,
  },
  render: (args) => {
    const [uploadedFiles, setUploadedFiles] = React.useState<FileList | null>(
      null,
    );
    const uploadedFilesLength = uploadedFiles?.length || 0;

    const handleFinish: FileUploadFinishHandler = React.useCallback(
      ({ files }) => {
        if (files) {
          setUploadedFiles(files);
        }
      },
      [setUploadedFiles],
    );

    const fileTarget = React.useMemo<File | null>(() => {
      if (uploadedFiles?.length === 1) return uploadedFiles[0];
      else return null;
    }, [uploadedFiles]);

    return (
      <>
        <button>
          <label>
            上传
            <FileUploadHiddenInputComponent
              {...args}
              handleFinish={handleFinish}
            />
          </label>
        </button>

        <small>
          {!uploadedFilesLength
            ? "未选择文件"
            : uploadedFilesLength > 1
              ? `已选择${uploadedFilesLength}个文件`
              : fileTarget &&
                `${fileTarget?.name} ${Math.floor(fileTarget?.size / 1000)}KB`}
        </small>
      </>
    );
  },
};

export const PreviewImageExample: Story = {
  name: "预览上传的图片",
  parameters: {
    controls: {
      include: [""],
    },
  },
  args: {
    accept: "image/*",
    multiple: true,
  },
  render: (args) => {
    const [file, setFile] = React.useState<File>();
    const [imgSrc, setImgSrc] = React.useState<string | ArrayBuffer>();

    const handleFinish: FileUploadFinishHandler = React.useCallback(
      ({ files }) => {
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
      },
      [setFile, setImgSrc],
    );

    return (
      <>
        <button>
          <label>
            上传图片
            <FileUploadHiddenInputComponent
              {...args}
              handleFinish={handleFinish}
            />
          </label>
        </button>

        <img
          src={imgSrc as string}
          alt={file?.name}
          loading="lazy"
          style={{
            display: "block",
            width: "200px",
            height: "200px",
            border: "1px solid black",
          }}
        />
        <small style={{ height: "1rem" }}>{file?.name}</small>
      </>
    );
  },
};

export const LimitSizeExample: Story = {
  name: "限制上传文件的尺寸",
  parameters: {
    controls: {
      exclude: ["handleFinish"],
    },
  },
  render: (args) => {
    const [files, setFiles] = React.useState<FileList>();
    const [limitSizeError, setLimitSizeError] =
      React.useState<FileUploadResult["limitSizeError"]>(null);

    const filesLength = files?.length || 0;

    const handleFinish: FileUploadFinishHandler = React.useCallback(
      ({ files, limitSizeError }) => {
        if (files) {
          setFiles(files);
        }

        if (limitSizeError) {
          setLimitSizeError(limitSizeError);
        } else {
          setLimitSizeError(null);
        }
      },
      [setFiles, setLimitSizeError],
    );

    return (
      <>
        <button>
          <label>
            上传
            <FileUploadHiddenInputComponent
              {...args}
              handleFinish={handleFinish}
            />
          </label>
        </button>

        {!limitSizeError && files && (
          <p style={{ color: "green" }}>
            {filesLength > 1 ? (
              <small>{`成功上传${filesLength}个文件`}</small>
            ) : (
              <>
                <small>{files?.[0]?.name}</small>
                <br />
                <small>{files?.[0]?.size}</small>
              </>
            )}
          </p>
        )}

        {limitSizeError && (
          <p style={{ color: "red" }}>
            <small>{`上传失败的文件：${limitSizeError.inValidFile.name} ( ${limitSizeError.inValidFile.size} 字节 )`}</small>
          </p>
        )}
      </>
    );
  },
};
