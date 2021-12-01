import { render } from "react-dom";
import AllRoutes from "./App";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import Layout from "./Layout";

const rootElement = document.getElementById("root");

render(
  <AllRoutes>
    <Auth0ProviderWithHistory>
      <Layout />
    </Auth0ProviderWithHistory>
  </AllRoutes>
  , rootElement
);
