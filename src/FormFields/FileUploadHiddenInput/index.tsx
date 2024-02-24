import {
  memo,
  useCallback,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from "react";

import { styled } from "@mui/material/styles";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 上传文件的尺寸限制
   * @example 1024 * 1024 * 1 (1MB)
   * @default 1048576 ( 1024 * 1024 * 1 )
   */
  limitSize?: number;

  /**
   * 文件上传完成后的回调
   * @param 文件上传完成后的结果对象
   */
  handleFinish: FileUploadFinishHandler;
}

export type FileUploadFinishHandler = (result: FileUploadResult) => void;
export type FileUploadResult = {
  /** 上传的文件对象列表 */
  files: null | FileList;
  /** 上传文件尺寸不合格时的错误信息 */
  limitSizeError: null | {
    /** 上传文件尺寸限制，来自 `props.limitSize` */
    limitSize: number;
    /** 检查到的第一个尺寸不合格的文件对象 */
    inValidFile: File;
  };
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function FileUploadHiddenInput({
  accept = "*", // 可上传的文件类型："image/*,.doc,.pdf,.json"
  multiple = false, // 是否可以上传复数文件
  limitSize = 1024 * 1024 * 1,
  handleFinish,
}: Props) {
  const handleUpload: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const files: FileList | null = e.target.files;

      // eslint-disable-next-line prefer-const
      let result: FileUploadResult = {
        files,
        limitSizeError: null,
      };

      // 有文件大小限制时
      if (limitSize && files) {
        for (let i = 0; i < files.length; i++) {
          // 多个文件时直接返回一个超过大小的文件对象
          if (files[i].size > limitSize) {
            result.files = null;
            result.limitSizeError = {
              limitSize: limitSize,
              inValidFile: files[i],
            };
          }
        }
      }

      handleFinish(result);
    },
    [handleFinish, limitSize],
  );

  return (
    <VisuallyHiddenInput
      type="file"
      accept={accept}
      multiple={multiple}
      onChange={(e) => handleUpload(e)}
    />
  );
}

const FileUploadHiddenInputMemo = memo(FileUploadHiddenInput);
export default FileUploadHiddenInputMemo;
