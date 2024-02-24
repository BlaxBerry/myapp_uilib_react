import type { PaletteOptions } from "@mui/material/styles";
/** 自定义主题调色板的颜色名 */
export declare const samplePaletteNames: readonly ["TEAL", "INDIGO", "VIOLET", "CRIMSON"];
export type SamplePaletteName = (typeof samplePaletteNames)[number];
/** 自定义主题调色板 */
export declare const samplePalettes: Record<SamplePaletteName, PaletteOptions>;
