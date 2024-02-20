import React from "react";

import MuiBox from "@mui/material/Box";
import MuiButton, { type ButtonProps } from "@mui/material/Button";
import MuiCircularProgress from "@mui/material/CircularProgress";

export interface Props extends React.PropsWithChildren<ButtonProps> {
  error?: boolean;
  success?: boolean;
  loading?: boolean;
}

const BaseButton: React.FC<Props> = ({
  error,
  success,
  loading,
  children,
  ...props
}) => {
  const color = React.useMemo<Props["color"]>(() => {
    if (error) return "error";
    else if (success) return "success";
    else if (props.color) return props.color;
    else return "primary";
  }, [props.color, error, success]);

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
        disabled={loading}
        {...props}
        color={color}
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

const BaseButtonMemo = React.memo(BaseButton);
export default BaseButtonMemo;
