import Remote from "@/pages/Remote.tsx";

const RemoteAppWrapper = () => {
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
      <Remote />
    </div>
  );
};

export default RemoteAppWrapper;
