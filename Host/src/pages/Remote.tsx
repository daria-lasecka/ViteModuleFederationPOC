import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";

const RemoteApp = lazy(() => import("remote_app/Home"));

const Remote = () => {
  return (
    <div
      style={{ width: "100%", border: "1px dashed #646cff", padding: "2rem" }}
    >
      <ErrorBoundary
        fallback={
          <p>
            Seems like there's been a problem and Remote App can't be loaded.
          </p>
        }
      >
        <RemoteApp />
      </ErrorBoundary>
    </div>
  );
};

export default Remote;
