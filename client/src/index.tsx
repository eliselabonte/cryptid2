import { render } from "react-dom";
import AllRoutes from "./App";
import App from "./App";
import { Auth0Provider } from "./auth0Provider";
import Layout from "./Layout";


const rootElement = document.getElementById("root");

render(
  <Auth0Provider>
    <AllRoutes>
      <Layout />
    </AllRoutes>
  </Auth0Provider>
  , rootElement
);
