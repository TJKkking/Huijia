/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🎨 Material 3 淡紫色调主色系
        primary: {
          DEFAULT: "#6750A4", // Primary container
          light: "#D0BCFF", // Surface variant / hover
          dark: "#4A327F", // Pressed / active
        },
        secondary: {
          DEFAULT: "#625B71", // 支持性色，文字/标签/辅助按钮
          light: "#CCC2DC", // 表面强调
          dark: "#4A4458",
        },
        background: "#FFFBFE", // 页面背景
        surface: "#f8f3fb", // 通用内容容器背景
        outline: "#79747E", // 分割线、边框
        error: "#B3261E", // 错误状态红色
        m3: {
          // Light Theme Colors - Material 3 淡紫风格
          primary: "#6750A4",
          onPrimary: "#FFFFFF",
          primaryContainer: "#EADDFF",
          onPrimaryContainer: "#21005D",

          secondary: "#625B71",
          onSecondary: "#FFFFFF",

          background: "#FFFBFE",
          onBackground: "#1C1B1F",
          surface: "#FFFFFF",
          onSurface: "#1C1B1F",

          surfaceContainerLowest: "#FFFFFF",
          surfaceContainerLow: "#F7F2FA",
          surfaceContainer: "#F3EDF7",
          surfaceContainerHigh: "#ECE6F0",
          surfaceContainerHighest: "#E6E0E9",

          outline: "#79747E",

          // Dark Theme Colors (淡紫风格 dark)
          dark: {
            primary: "#D0BCFF",
            onPrimary: "#381E72",
            primaryContainer: "#4F378B",
            onPrimaryContainer: "#EADDFF",

            secondary: "#CCC2DC",
            onSecondary: "#332D41",

            background: "#1C1B1F",
            onBackground: "#E6E1E5",
            surface: "#1C1B1F",
            onSurface: "#E6E1E5",

            surfaceContainerLowest: "#0F0D13",
            surfaceContainerLow: "#211F26",
            surfaceContainer: "#2B2930",
            surfaceContainerHigh: "#353339",
            surfaceContainerHighest: "#3F3D43",

            outline: "#938F99",
          },
        },
      },
      borderRadius: {
        xl: "1rem", // 更柔和的卡片圆角风格
      },
    },
    corePlugins: {
      // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
      preflight: false,
    },
  },
  plugins: [],
};
