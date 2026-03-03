export type Theme = {
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    navbarBackground: string;
    navbarBorder: string;
    navbarLinkText: string;
    white: string;
    buttonHover: string;
    background: string;
    text: string;
    buttonBackground: string;
    buttonBorderHover: string;
    heading: string;
  };
};

export const hostBrandATheme: Theme = {
  name: "Brand A",
  colors: {
    primary: "#646cff",
    primaryHover: "#535bf2",
    navbarBackground: "#2e2e2e",
    navbarBorder: "#1a1a1a",
    navbarLinkText: "#b0b0b0",
    white: "#ffffff",
    buttonHover: "#3a3a3a",
    background: "#242424",
    text: "rgba(255, 255, 255, 0.87)",

    buttonBackground: "#1a1a1a",
    buttonBorderHover: "#646cff",
    heading: "#646cff",
  },
} as const;

export const hostBrandBTheme: Theme = {
  name: "Brand B",
  colors: {
    primary: "#00bcd4",
    primaryHover: "#00a6c2",
    navbarBackground: "#272b30",
    navbarBorder: "#111418",
    navbarLinkText: "#c0c0c0",
    white: "#ffffff",
    buttonHover: "#3a3a3a",
    background: "#1c1f23",
    text: "rgba(255, 255, 255, 0.87)",

    buttonBackground: "#1c1f23",
    buttonBorderHover: "#00bcd4",
    heading: "#00bcd4",
  },
} as const;
