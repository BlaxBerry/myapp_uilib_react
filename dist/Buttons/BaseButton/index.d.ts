/// <reference types="react" />
import { type ButtonProps } from "@mui/material/Button";
export interface Props extends ButtonProps {
    /** 是否处于加载中 */
    loading?: boolean;
    /** 是否采用次要的主题色 */
    secondary?: boolean;
}
declare const BaseButtonMemo: import("react").NamedExoticComponent<Props>;
export default BaseButtonMemo;
