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

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
          <Route path='/' element={<Homepage />}/>
          <Route path='/blog/:id' element={<Blog />}/>
          <Route path='/creatures/:id' element={<Creatures />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/profile/:id' element={<Profile />}/>
          <Route path='/search/:searchItems' element={<SearchLanding />}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);