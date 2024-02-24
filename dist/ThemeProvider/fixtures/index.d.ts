import type { PaletteOptions, SimplePaletteColorOptions } from "@mui/material/styles";
import { type SamplePaletteName } from "../themes";
/**
 * 获取样板主题调色板中的颜色
 * @example
 * ```ts
 * getSamplePaletteColor("TEAL", "primary", "main"); // '#26a69a'
 * getSamplePaletteColor("CRIMSON", "secondary", "dark"); // '#e91e63'
 * ```
 */
export declare function getThemeSamplePaletteColor(samplePaletteName: SamplePaletteName, PaletteColorOptionName: keyof PaletteOptions, paletteColorName: keyof SimplePaletteColorOptions): string | undefined;
