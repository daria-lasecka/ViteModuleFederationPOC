import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { remoteTheme, type Theme } from "@/theme.ts";
import { StyledButton, StyledHeader, StyledLink } from "@/pages/Styled.ts";

type HomeProps = {
  appName?: string;
  hostTheme?: Theme;
};

const defaultProps = {
  appName: "Remote",
};

const Home = (props: HomeProps) => {
  const { appName, hostTheme } = { ...defaultProps, ...props };

  const theme: Theme = hostTheme?.colors ? hostTheme : remoteTheme;

  const [count, setCount] = useState(0);
  const hostAppUrlToRemotePage = import.meta.env.VITE_HOST_URL;

  return (
    <ThemeProvider theme={theme}>
      <div className="remote-root">
        <div>You're seeing this page from {appName} App</div>
        <p>
          To see how this app looks from the host click{" "}
          <StyledLink href={hostAppUrlToRemotePage} target="_blank">
            here
          </StyledLink>
        </p>
        <p>Below is some dummy data so the page looks more busy</p>
        <StyledHeader>Vite + React</StyledHeader>
        <div className="card">
          <StyledButton onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </StyledButton>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
