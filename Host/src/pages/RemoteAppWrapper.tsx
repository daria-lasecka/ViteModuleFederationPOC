import Remote from "@/pages/Remote.tsx";

const RemoteAppWrapper = () => {
  const remoteAppUrl = import.meta.env.VITE_REMOTE_URL;

  return (
    <div>
      <p>
        Below is a page from the remote app displayed inside the host. To see
        the app separately click{" "}
        <a href={remoteAppUrl} target="_blank">
          here
        </a>
      </p>
      <Remote />
    </div>
  );
};

export default RemoteAppWrapper;
