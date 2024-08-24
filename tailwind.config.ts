import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      white: "#F2F2F2",
      "primary-blue": "#2F80ED",
      "primary-dark-grey": "#4F4F4F",
      "primary-light-grey": "#828282",
      "primary-white": "#E0E0E0",
      "indicator-orange": "#F8B76B",
      "indicator-purple": "#8785FF",
      "indicator-red": "#EB5757",
      "indicator-yellow": "#F2C94C",
      "chats-light-orange": "#FCEED3",
      "chats-orange": "#E5A443",
      "chats-light-purple": "#EEDCFF",
      "chats-purple": "#9B51E0",
      "chats-light-green": "#D2F2EA",
      "chats-green": "#43B78D",
      "stickers-white": "#E9F3FF",
      "stickers-orange": "#FDCFA4",
      "stickers-light-orange": "#F939C3",
      "stickers-light-cyan": "#AFEBDB",
      "stickers-light-green": "#CBF1C2",
      "stickers-light-violet": "#CFCEF9",
      "stickers-light-purple": "#F9E0FD"
    },
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px"
      }
    }
  },
  plugins: []
}
export default config
