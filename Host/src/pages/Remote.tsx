import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";
import { useTheme } from "styled-components";
import { RemoteAppContainer } from "@/pages/Styled.ts";

const RemoteApp = lazy(() => import("remote_app/Home"));

const Remote = () => {
  const theme = useTheme();

  return (
    <RemoteAppContainer>
      <ErrorBoundary
        fallback={
          <p>
            Seems like there's been a problem and Remote App can't be loaded.
          </p>
        }
      >
        <RemoteApp appName="Host" hostTheme={theme} />
      </ErrorBoundary>
    </RemoteAppContainer>
  );
};

export default Remote;
