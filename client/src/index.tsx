import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Homepage from "./components/switchDisplay/homepage/Homepage";
import Blog from "./components/switchDisplay/blog/blog";
import Creatures from "./components/switchDisplay/creature/Creatures";
import Dashboard from "./components/switchDisplay/dashboard/Dashboard";
import Profile from "./components/switchDisplay/profile/Profile";
import SearchLanding from "./components/switchDisplay/searchLanding/SearchLanding";
import { Auth0Provider } from "@auth0/auth0-react";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-wfgeclbx.us.auth0.com"
      clientId="QDRy3XVTNAqnWnXfwNKBpisT3C0VYLOs"
      redirectUri={window.location.origin}>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path='/' element={<Homepage />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/creatures/:id' element={<Creatures />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/search/:searchItems' element={<SearchLanding />} />
        </Route>
      </Routes>
    </Auth0Provider>
  </BrowserRouter>,
  rootElement
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Auth0Provider
//       domain="dev-wfgeclbx.us.auth0.com"
//       clientId="QDRy3XVTNAqnWnXfwNKBpisT3C0VYLOs"
//       redirectUri={window.location.origin}>
//       <Routes>
//         <Route path="/" element={<App />} >
//           <Route path='/' element={<Homepage />} />
//           <Route path='/blog/:id' element={<Blog />} />
//           <Route path='/creatures/:id' element={<Creatures />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path='/profile/:id' element={<Profile />} />
//           <Route path='/search/:searchItems' element={<SearchLanding />} />
//         </Route>
//       </Routes>
//     </Auth0Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );