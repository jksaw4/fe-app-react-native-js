import { Stitch } from "mongodb-stitch-browser-sdk";


const APP_ID = "todotutorial-cnnqb";


const app_client = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID);

export { app_client };