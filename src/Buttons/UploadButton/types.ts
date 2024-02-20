type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type UploadButtonInputProps = {
  /**
   * 上传文件的尺寸限制
   * @example 1024 * 1024 * 1 (1MB)
   * @default 1048576 ( 1024 * 1024 * 1 )
   */
  limitSize?: number;
  /**
   * 可上传的文件类型
   * @example "image/*,.doc,.pdf"
   */
  accept?: BaseInputProps["accept"];
  /**
   * 可上传复数的文件
   */
  multiple?: BaseInputProps["multiple"];
  /**
   * 文件上传完成后的回调
   */
  onFinish: (value: CustomFileInputUpdateResult) => void;
};

export type CustomFileInputUpdateResult = {
  /** 上传的文件对象列表 */
  files: null | FileList;
  /** 上传文件尺寸不合格时的错误信息 */
  limitSizeError: null | {
    /** 上传文件尺寸限制，来自 `props.limitSize` */
    limitSize: UploadButtonInputProps["limitSize"];
    /** 检查到的第一个尺寸不合格的文件 */
    inValidFile: File;
  };
};
