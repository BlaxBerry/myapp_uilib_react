import { type InputHTMLAttributes } from "react";
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
declare function FileUploadHiddenInput({ accept, // 可上传的文件类型："image/*,.doc,.pdf,.json"
multiple, // 是否可以上传复数文件
limitSize, handleFinish, }: Props): import("react/jsx-runtime").JSX.Element;
declare const FileUploadHiddenInputMemo: import("react").MemoExoticComponent<typeof FileUploadHiddenInput>;
export default FileUploadHiddenInputMemo;
