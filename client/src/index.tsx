import { render } from "react-dom";
import AllRoutes from "./App";
import { Auth0Handler } from "./auth0Provider";
import Layout from "./Layout";


const rootElement = document.getElementById("root");

render(
  <Auth0Handler>
    <AllRoutes>
      <Layout />
    </AllRoutes>
  </Auth0Handler>
  , rootElement
);
