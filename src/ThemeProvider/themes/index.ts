import {
  deepPurple,
  indigo,
  lightBlue,
  pink,
  purple,
  teal,
} from "@mui/material/colors";
import type { PaletteOptions } from "@mui/material/styles";

/** 鸭羽青色 */
const TEAL: PaletteOptions = {
  primary: {
    main: teal[400],
    light: teal[600],
    dark: teal[600],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: teal["A400"],
    light: teal["A700"],
    dark: teal["A700"],
    contrastText: "#FFFFFF",
  },
} as const;

/** 靛青色 */
const INDIGO: PaletteOptions = {
  primary: {
    main: indigo[500],
    light: indigo[700],
    dark: indigo[700],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: lightBlue[400],
    light: lightBlue[600],
    dark: lightBlue[600],
    contrastText: "#FFFFFF",
  },
} as const;

/** 紫罗兰色 */
const VIOLET: PaletteOptions = {
  primary: {
    main: deepPurple[400],
    light: deepPurple[600],
    dark: deepPurple[600],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: purple["A700"],
    light: purple[600],
    dark: purple[600],
    contrastText: "#FFFFFF",
  },
} as const;

/** 绯红色 */
const CRIMSON: PaletteOptions = {
  primary: {
    main: "#E32636", // Alizarin Crimson
    light: "#E51A4C", // Spanish Crimson
    dark: "#BE0032", // Crimson Glory
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: pink[400],
    light: pink[500],
    dark: pink[500],
    contrastText: "#FFFFFF",
  },
} as const;

/** 自定义主题调色板的颜色名 */
export const samplePaletteNames = [
  "TEAL", // 鸭羽青色
  "INDIGO", // 靛青色
  "VIOLET", // 紫罗兰色
  "CRIMSON", // 绯红色
] as const;

export type SamplePaletteName = (typeof samplePaletteNames)[number];

/** 自定义主题调色板 */
export const samplePalettes: Record<SamplePaletteName, PaletteOptions> = {
  TEAL, // 鸭羽青色
  INDIGO, // 靛青色
  VIOLET, // 紫罗兰色
  CRIMSON, // 绯红色
} as const;
