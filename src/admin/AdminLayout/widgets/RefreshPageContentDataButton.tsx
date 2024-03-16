import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import * as React from "react";

import { BaseIconButton } from "@/@common";

const RefreshPageContentDataButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <BaseIconButton onClick={onClick}>
      <AutorenewRoundedIcon />
    </BaseIconButton>
  );
};

const RefreshPageContentDataButtonMemo = React.memo(
  RefreshPageContentDataButton,
);
export default RefreshPageContentDataButtonMemo;
