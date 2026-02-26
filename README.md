# ViteModuleFederationPOC

This project's purpose is to create a proof of concept Host and Remote applications using Vite Module Federation.

## Getting Started
### Tech Stack

* React
* Vite
* Prettier
* @originjs/vite-plugin-federation
* React Router
* Material UI

### Setting up local environments

* In Host application create `.env.local` folder and add this line to it:
```
VITE_REMOTE_URL=http://localhost:5001
```

* Go into each (host and remote) folders and run `npm install`
* If you want to use `pnpm` to start both apps at the same time you will also need to run `npm install` in root folder

### Running the apps locally

You can run the apps in two different ways

Using pnpm:
* Open terminal in root folder
* Build both applications `pnpm build`
* After they're built start them using `pnpm serve`
* If needed you might use `pnpm stop` to stop both ports from being used

Using npm:
* Open terminal in Remote folder
* Build remote app `npm run build`
* Start remote app `npm run preview`
* Open another terminal in Host folder
* Build host app `npm run build`
* Start host app `npm run preview` or `npm run dev`
* When done you can stop them using Ctrl+C  

If you use `npm run dev` on remote app you won't be able to see it inside the host

## Links to deployed apps

Host app is deployed here: https://vite-module-federation-poc-host-app.vercel.app/  
Remote app is deployed here: https://vite-module-federation-poc-remote-a.vercel.app/