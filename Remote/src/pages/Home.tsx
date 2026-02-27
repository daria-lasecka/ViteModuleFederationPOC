import { useState } from "react";

type HomeProps = {
  appName?: string;
  theme?: string;
};

const defaultProps = {
  appName: "Remote",
  theme: {},
};

const Home = (props: HomeProps) => {
  const { appName } = { ...defaultProps, ...props };

  const [count, setCount] = useState(0);
  const hostAppUrlToRemotePage = import.meta.env.VITE_HOST_URL;

  return (
    <div className="remote-root">
      <div>You're seeing this page from {appName} App</div>
      <p>
        To see how this app looks from the host click{" "}
        <a href={hostAppUrlToRemotePage} target="_blank">
          here
        </a>
      </p>
      <p>Below is some dummy data so the page looks more busy</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;
