import { type PropsWithChildren, type ReactNode } from "react";
export type BaseAccordionProps = PropsWithChildren<{
    title?: ReactNode;
    defaultExpanded?: boolean;
    disabled?: boolean;
    reverseExpandIcon?: boolean;
    expandIcon?: ReactNode;
    actions?: ReactNode;
}>;
declare const BaseAccordionMemo: import("react").NamedExoticComponent<BaseAccordionProps>;
export default BaseAccordionMemo;
