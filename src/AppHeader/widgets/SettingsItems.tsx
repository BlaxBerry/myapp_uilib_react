import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type FC,
} from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import OpacityIcon from "@mui/icons-material/Opacity";
import PaletteIcon from "@mui/icons-material/Palette";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import type { Props as AppHeaderProps } from "..";
import {
  samplePaletteNames as PaletteColorSwitcherOptions,
  getThemeSamplePaletteColor,
  type SamplePaletteName,
} from "../../ThemeProvider";

export type AppHeaderSettingDarkModeSwitcher = {
  /** 文本 */
  text?: string;
  /** 传入的默认值 */
  isDarkMode?: boolean;
  /** 利用回调传出的最新值 */
  onChange: (value: boolean) => void;
};

export type AppHeaderSettingPaletteColorSwitcher = {
  /** 文本 */
  text?: string;
  /** 传入的默认值 */
  paletteColorName?: SamplePaletteName;
  /** 利用回调传出的最新值 */
  onChange: (value: SamplePaletteName) => void;
};

/** app header's settings items */
const SettingsItems: FC<Pick<AppHeaderProps, "settingsOptions">> = ({
  settingsOptions,
}) => {
  const DarkModeSwitcher = settingsOptions?.DarkModeSwitcher;
  const PaletteColorSwitcher = settingsOptions?.PaletteColorSwitcher;
  const CustomSettingOptions = settingsOptions?.customOptions;

  const [PaletteColorSwitcherValue, setPaletteColorSwitcherValue] =
    useState<SamplePaletteName>(); // 此处未定义值所以使用 value 时需要利用 ?? "" 否则会报错 Controlled 与 UnControlled 警告

  const onChangePaletteColorSwitcher = useCallback(
    (e: SelectChangeEvent<SamplePaletteName>) => {
      const value = e.target.value as SamplePaletteName;
      setPaletteColorSwitcherValue(value);
      if (PaletteColorSwitcher) {
        PaletteColorSwitcher.onChange(value);
      }
    },
    [PaletteColorSwitcher, setPaletteColorSwitcherValue],
  );

  useEffect(() => {
    const defaultPaletteColorSwitcherValue =
      PaletteColorSwitcher?.paletteColorName;
    if (defaultPaletteColorSwitcherValue) {
      setPaletteColorSwitcherValue(defaultPaletteColorSwitcherValue);
    }
  }, [PaletteColorSwitcher?.paletteColorName]);

  const onChangeDarkModeSwitcher = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.checked;
      if (DarkModeSwitcher) {
        DarkModeSwitcher.onChange(value);
      }
    },
    [DarkModeSwitcher],
  );

  return (
    <>
      {/* dark mode switcher */}
      {DarkModeSwitcher && (
        <ListItem>
          <ListItemIcon>
            {DarkModeSwitcher.isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </ListItemIcon>
          <ListItemText primary={DarkModeSwitcher.text} />
          <Switch edge="end" onChange={onChangeDarkModeSwitcher} />
        </ListItem>
      )}

      {/* sample palette color switcher */}
      {PaletteColorSwitcher && (
        <ListItem>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary={PaletteColorSwitcher.text} />
          <Select
            size="small"
            sx={{
              ml: 2,
              width: {
                sm: 130,
              },
            }}
            value={PaletteColorSwitcherValue ?? ""} // 因为定义 value 没有默认值所有需要利用 ?? "" 否则会报错 Controlled 与 UnControlled 警告
            onChange={onChangePaletteColorSwitcher}
          >
            {PaletteColorSwitcherOptions.map((samplePaletteName) => {
              const bgColor =
                getThemeSamplePaletteColor(
                  samplePaletteName,
                  "primary",
                  "main",
                ) ?? "";
              return (
                <MenuItem key={samplePaletteName} value={samplePaletteName}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        width: 25,
                        height: 25,
                        bgcolor: bgColor,
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
              );
            })}
          </Select>
        </ListItem>
      )}

      {/* custom settings options */}
      {CustomSettingOptions}
    </>
  );
};

const SettingsItemsMemo = memo(SettingsItems);
export default SettingsItemsMemo;
