import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";

const RemoteApp = lazy(() => import("remote_app/App"));

const Remote = () => {
  return (
    <ErrorBoundary fallback={<></>}>
      <div
        style={{ width: "100%", border: "1px dashed #646cff", padding: "2rem" }}
      >
        <RemoteApp />
      </div>
    </ErrorBoundary>
  );
};

export default Remote;
