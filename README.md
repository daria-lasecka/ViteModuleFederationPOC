# ViteModuleFederationPOC

This project's purpose is to create a proof of concept Host and Remote applications using Vite Module Federation.

## Getting Started
### Tech Stack

* React
* Vite
* Prettier
* @originjs/vite-plugin-federation

### Setting up local environments

* In Host application create `.env.local` folder and add this line to it
```
VITE_REMOTE_URL=http://localhost:5001
```

* Go into each (host and remote) folders and run `npm install`

### Running the apps locally

You can run the apps using two methods

Using pnpm:
* Open terminal in root folder
* Build both applications `pnpm build`
* After they're built start them using `pnpm serve`
* At the end it's necessary to stop both ports (Ctrl+C won't work) `pnpm stop`

Using npm:
* Open terminal in Remote folder
* Build remote app `npm run build`
* Start remote app `npm run preview`
* Open another terminal in Host folder
* Build host app `npm run build`
* Start host app `npm run preview`
* When done you can stop them using Ctrl+C

## Links to deployed apps

Host app is deployed here: https://vite-module-federation-poc-host-app.vercel.app/
Remote app is deployed here: https://vite-module-federation-poc-remote-a.vercel.app/