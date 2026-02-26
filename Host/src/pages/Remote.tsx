import RemoteAppWrapper from "@/pages/RemoteAppWrapper.tsx";

const Remote = () => {
  const remoteAppUrl = import.meta.env.VITE_REMOTE_URL;

  return (
    <div>
      <p>Below is a page from the remote app displayed inside the host.</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <p>To see the app separately click </p>
        <a href={remoteAppUrl} target="_blank">
          Here
        </a>
      </div>
      <RemoteAppWrapper />
    </div>
  );
};

export default Remote;
