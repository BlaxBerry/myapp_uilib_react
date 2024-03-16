import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import * as React from "react";

import { BaseIconButton } from "@/@common";
import { toggleFullScreen } from "@/admin/tools";

const ToggleFullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <BaseIconButton onClick={toggleFullScreen}>
      {isFullScreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />}
    </BaseIconButton>
  );
};

const ToggleFullScreenButtonMemo = React.memo(ToggleFullScreenButton);
export default ToggleFullScreenButtonMemo;
