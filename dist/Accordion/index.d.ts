import { type PropsWithChildren, type ReactNode } from "react";
export type Props = PropsWithChildren<{
    /** 文本标题 */
    title?: ReactNode;
    /** 是否默认展开 */
    defaultExpanded?: boolean;
    /** 是否禁止展开 */
    disabled?: boolean;
    /** 是否反转扩展图标的位置 ( 改为居左侧显示 ) */
    reverseExpandIcon?: boolean;
    /** 自定义扩展图标 */
    expandIcon?: ReactNode;
    /** 自定义展开内容右下角的扩展内容 */
    actions?: ReactNode;
}>;
declare function Accordion({ title, children, actions, defaultExpanded, disabled, expandIcon, reverseExpandIcon, }: Props): import("react/jsx-runtime").JSX.Element;
declare const AccordionMemo: import("react").MemoExoticComponent<typeof Accordion>;
export default AccordionMemo;
