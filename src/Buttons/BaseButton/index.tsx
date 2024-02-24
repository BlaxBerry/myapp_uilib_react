import { memo, useMemo, type FC } from "react";

import MuiBox from "@mui/material/Box";
import MuiButton, { type ButtonProps } from "@mui/material/Button";
import MuiCircularProgress from "@mui/material/CircularProgress";

export interface Props extends ButtonProps {
  /** 是否处于加载中 */
  loading?: boolean;
  /** 是否采用次要的主题色 */
  secondary?: boolean;
}

const BaseButton: FC<Props> = ({
  children,
  loading = false,
  secondary = false,
  ...props
}) => {
  const color = useMemo<Props["color"]>(() => {
    if (secondary) return "secondary";
    else if (props.color) return props.color;
    else return "primary";
  }, [props.color, secondary]);

  return (
    <MuiBox
      sx={{
        position: "relative",
        display: "inline-block",
        cursor: loading ? "progress" : "pointer",
      }}
    >
      <MuiButton
        variant="contained"
        size="medium"
        color={color}
        disabled={loading}
        {...props}
      >
        <MuiBox sx={{ opacity: loading ? 0 : 1 }}>{children}</MuiBox>
      </MuiButton>

      {/* loading circle */}
      {loading && (
        <MuiCircularProgress
          size={24}
          thickness={4}
          sx={(theme) => ({
            color: theme.palette.text.disabled,
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
            // disableShrink // https://mui.com/material-ui/react-progress/#high-cpu-load
            // ".MuiLinearProgress-bar": {
            //   transition: "none",  // https://mui.com/material-ui/react-progress/#high-frequency-updates
            // },
          })}
        />
      )}
    </MuiBox>
  );
};

const BaseButtonMemo = memo(BaseButton);
export default BaseButtonMemo;
