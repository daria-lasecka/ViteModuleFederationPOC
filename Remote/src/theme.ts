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

export const remoteTheme: Theme = {
  name: "Brand A",
  colors: {
    primary: "#1db954",
    primaryHover: "#22d163",
    navbarBackground: "#ffffff",
    navbarBorder: "#e0e0e0",
    navbarLinkText: "#555555",
    white: "#ffffff",
    buttonHover: "#3a3a3a",
    background: "#f9f9f9",
    text: "#212121",

    buttonBackground: "#ffffff",
    buttonBorderHover: "##1db954",
    heading: "#1db954",
  },
} as const;
