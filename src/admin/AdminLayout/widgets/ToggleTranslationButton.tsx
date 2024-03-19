import GTranslateRoundedIcon from "@mui/icons-material/GTranslateRounded";
import * as React from "react";

import { BaseButton, BaseList } from "@/@common";
import type { BaseListItemData } from "@/@common/Lists/BaseList";
import { Popover } from "@mui/material";

export type ToggleTranslationButtonProps = {
  show?: boolean;
  languagesList?: Array<BaseListItemData>;
  defaultValue?: string;
  onClick?: (language: string) => void;
};

const ToggleTranslationButton = ({
  show = true,
  languagesList,
  defaultValue,
  onClick,
}: ToggleTranslationButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);

  const handleOpen = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <BaseButton
        variant="outlined"
        sx={{
          display: show ? "flex" : "none",
          mx: 0.5,
        }}
        onClick={handleOpen}
      >
        <GTranslateRoundedIcon />
      </BaseButton>

      <Popover
        sx={{ mt: 2.5 }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            elevation: 2,
            sx: (theme) => ({ p: 1, borderRadius: theme.shape.borderRadius }),
          },
        }}
      >
        <BaseList
          data={languagesList?.map((item) => ({
            ...item,
            isActive: item.id === defaultValue,
            onClick: () => {
              onClick?.(item?.id);
            },
          }))}
        />
      </Popover>
    </>
  );
};

const ToggleTranslationButtonMemo = React.memo(ToggleTranslationButton);
export default ToggleTranslationButtonMemo;
