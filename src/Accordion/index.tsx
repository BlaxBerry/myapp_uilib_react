import { memo, type PropsWithChildren, type ReactNode } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

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

function Accordion({
  title,
  children,
  actions,
  defaultExpanded = false,
  disabled = false,
  expandIcon = <ExpandMoreIcon />,
  reverseExpandIcon = false,
}: Props) {
  return (
    <MuiAccordion
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      {/* title */}
      <AccordionSummary
        expandIcon={expandIcon}
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",

          ...{
            ...(reverseExpandIcon
              ? {
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(180deg)",
                  },
                  "& .MuiAccordionSummary-content": {
                    marginLeft: theme.spacing(1),
                  },
                }
              : {}),
          },
        })}
      >
        {title}
      </AccordionSummary>

      {/* content */}
      <AccordionDetails
        sx={(theme) => ({
          padding: theme.spacing(2),
          borderTop: "1px solid rgba(0, 0, 0, .125)",
        })}
      >
        {children}
      </AccordionDetails>

      {/* actions */}
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </MuiAccordion>
  );
}

const AccordionMemo = memo(Accordion);
export default AccordionMemo;
