import { memo, useCallback, useEffect, useState } from "react";

import OpacityIcon from "@mui/icons-material/Opacity";
import PaletteIcon from "@mui/icons-material/Palette";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import {
  samplePaletteNames as PaletteColorSwitcherOptions,
  getThemeSamplePaletteColor,
  type SamplePaletteName,
} from "@/ThemeProvider";

const getAvatarBgColor = (samplePaletteName: SamplePaletteName) => {
  return getThemeSamplePaletteColor(samplePaletteName, "primary", "main") ?? "";
};

export type Props = {
  labelText: string;
  value: SamplePaletteName;
  onChange?: (value: SamplePaletteName) => void;
};

function ThemePaletteSwitcher({
  labelText,
  value,
  onChange: propsOnChange,
}: Props) {
  const [selectedPalette, setSelectedPalette] = useState<Props["value"]>();

  useEffect(() => {
    setSelectedPalette(value);
  }, [value]);

  const onChange = useCallback(
    (e: SelectChangeEvent<SamplePaletteName>) => {
      const value = e.target.value as SamplePaletteName;
      setSelectedPalette(value);
      propsOnChange?.(value);
    },
    [propsOnChange],
  );

  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <PaletteIcon />
      </ListItemIcon>

      <ListItemText primary={labelText} />

      <Select
        size="small"
        sx={{
          ml: 2,
          width: {
            sm: 130,
          },
        }}
        value={selectedPalette ?? ""} // 因为定义 value 没有默认值所有需要利用 ?? "" 否则会报错 Controlled 与 UnControlled 警告
        onChange={onChange}
      >
        {PaletteColorSwitcherOptions.map((samplePaletteName) => (
          <MenuItem key={samplePaletteName} value={samplePaletteName}>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 25,
                  height: 25,
                  bgcolor: getAvatarBgColor(samplePaletteName),
                  mr: 1,
                }}
              >
                <OpacityIcon sx={{ width: 15, height: 15 }} />
              </Avatar>
              <Typography
                variant="subtitle2"
                noWrap
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
              >
                {samplePaletteName}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </ListItem>
  );
}

const ThemePaletteSwitcherMemo = memo(ThemePaletteSwitcher);
export default ThemePaletteSwitcherMemo;
