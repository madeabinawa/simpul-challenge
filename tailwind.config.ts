import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|popover).js"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px"
      },
      colors: {
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
        "stickers-light-purple": "#F9E0FD",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [nextui()]
} satisfies Config

export default config
