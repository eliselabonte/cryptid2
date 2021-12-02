import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./components/switchDisplay/homepage/Homepage";
import Blog from "./components/switchDisplay/blog/blog";
import Creatures from "./components/switchDisplay/creature/Creatures";
import Dashboard from "./components/switchDisplay/dashboard/Dashboard";
import Profile from "./components/switchDisplay/profile/Profile";
import SearchLanding from "./components/switchDisplay/searchLanding/SearchLanding";
import useSearch from './useSearch';
import { read } from "fs";

export default function AllRoutes(children: any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout search={"search"} setSearch={() => { }} />}>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/blog/:id' element={<Blog />} />
                    <Route path='/creatures/:id' element={<Creatures />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/search/:searchItems'
                        element={<SearchLanding results={"results"} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
