import { styled } from "@mui/material/styles";
import React from "react";

import BaseButton, { type Props as BaseButtonProps } from "../BaseButton";
import type {
  CustomFileInputUpdateResult,
  UploadButtonInputProps,
} from "./types";

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

export type Props = BaseButtonProps & UploadButtonInputProps;

export const DEFAULT_PROPS__LIMIT_SIZE = 1024 * 1024 * 1; // 1MB

const UploadButton: React.FC<Props> = ({
  limitSize = DEFAULT_PROPS__LIMIT_SIZE,
  accept,
  multiple = false,
  onFinish,
  ...props
}) => {
  const handleUpload: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        const files: FileList | null = e.target.files;
        // eslint-disable-next-line prefer-const
        let result: CustomFileInputUpdateResult = {
          files,
          limitSizeError: null,
        };

        // 有文件大小限制时
        if (limitSize && files) {
          for (let i = 0; i < files.length; i++) {
            if (files[i].size > limitSize) {
              result.files = null;
              result.limitSizeError = {
                limitSize: limitSize,
                inValidFile: files[i],
              };
            }
          }
        }

        onFinish(result);
      },
      [onFinish, limitSize],
    );

  return (
    <BaseButton
      component="label"
      // startIcon={<CloudUploadIcon />}
      {...props}
    >
      {/* button text */}
      {props.children}

      {/* file input */}
      <VisuallyHiddenInput
        type="file"
        accept={accept}
        multiple={multiple || false}
        onChange={(e) => handleUpload(e)}
      />
    </BaseButton>
  );
};

const UploadButtonMemo = React.memo(UploadButton);
export default UploadButtonMemo;
