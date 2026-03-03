import Remote from "@/pages/Remote.tsx";
import { StyledLink } from "@/pages/Styled.ts";

const RemoteAppWrapper = () => {
  const remoteAppUrl = import.meta.env.VITE_REMOTE_URL;

  return (
    <div>
      <p>
        Below is a page from the remote app displayed inside the host. To see
        the app separately click{" "}
        <StyledLink href={remoteAppUrl} target="_blank">
          here
        </StyledLink>
        .
      </p>
      <Remote />
    </div>
  );
};

export default RemoteAppWrapper;
