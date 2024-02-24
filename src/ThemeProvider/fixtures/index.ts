import type {
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material/styles";
import { samplePalettes, type SamplePaletteName } from "../themes";

/**
 * 获取样板主题调色板中的颜色
 * @example
 * ```ts
 * getSamplePaletteColor("TEAL", "primary", "main"); // '#26a69a'
 * getSamplePaletteColor("CRIMSON", "secondary", "dark"); // '#e91e63'
 * ```
 */
export function getThemeSamplePaletteColor(
  samplePaletteName: SamplePaletteName,
  PaletteColorOptionName: keyof PaletteOptions,
  paletteColorName: keyof SimplePaletteColorOptions,
) {
  const paletteColorOptions = samplePalettes[samplePaletteName][
    PaletteColorOptionName
  ] as SimplePaletteColorOptions;
  const color = paletteColorOptions[paletteColorName];
  return color;
}
