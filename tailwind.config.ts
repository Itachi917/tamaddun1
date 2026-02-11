import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // --- CUSTOM BRAND COLORS START ---
        primary: {
          DEFAULT: "#f7c021", // Yellow
          foreground: "#343248", // Grey text (High contrast on yellow)
        },
        secondary: {
          DEFAULT: "#343248", // Grey
          foreground: "#ffffff", // White text
        },
        accent: {
          DEFAULT: "#651327", // Maroon
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#651327", // Maroon (Using maroon for destructive/alert too)
          foreground: "#ffffff",
        },
        // --- CUSTOM BRAND COLORS END ---

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "#343248", // Set Sidebar background to your Grey
          foreground: "#ffffff", // Sidebar text white
          primary: "#f7c021", // Sidebar active item yellow
          "primary-foreground": "#343248",
          accent: "#651327", // Sidebar hover maroon
          "accent-foreground": "#ffffff",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        water: {
          DEFAULT: "hsl(var(--water))",
          foreground: "hsl(var(--water-foreground))",
        },
        electricity: {
          DEFAULT: "hsl(var(--electricity))",
          foreground: "hsl(var(--electricity-foreground))",
        },
        construction: {
          DEFAULT: "hsl(var(--construction))",
          foreground: "hsl(var(--construction-foreground))",
        },
        "ai-hub": {
          DEFAULT: "hsl(var(--ai-hub))",
          foreground: "hsl(var(--ai-hub-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
