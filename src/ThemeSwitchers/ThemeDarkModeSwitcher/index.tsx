import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

export type Props = {
  labelText: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

function ThemeDarkModeSwitcher({
  labelText,
  value,
  onChange: propsOnChange,
}: Props) {
  const [isChecked, setIsChecked] = useState<Props["value"]>(false);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.checked;
      setIsChecked(value);
      propsOnChange?.(value);
    },
    [propsOnChange],
  );

  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: 40 }}>
        {value ? <DarkModeIcon /> : <LightModeIcon />}
      </ListItemIcon>

      <ListItemText primary={labelText} />

      <Switch edge="end" checked={isChecked} onChange={onChange} />
    </ListItem>
  );
}

const ThemeDarkModeSwitcherMemo = memo(ThemeDarkModeSwitcher);
export default ThemeDarkModeSwitcherMemo;
