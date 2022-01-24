import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./components/views/homepage/Homepage";
import Blog from "./components/views/blog/blog";
import Dashboard from "./components/views/dashboard/Dashboard";
import Profile from "./components/views/profile/Profile";
import SearchLanding from "./components/views/searchLanding/SearchLanding";
import { useSearch } from "./hooks/searchHook";
import { useBlogData } from "./hooks/blogHook";
import { useCreateUser } from "./hooks/createUserHook";
import { useGetProfile } from './hooks/getProfileHook'
import { useUpdateProfile } from "./hooks/updateProfileHook";
import Post from "./components/views/singlePost/post";
import Create from "./components/views/create/create";

export default function AllRoutes(children: any) {
    const { search, setSearch, results } = useSearch();
    const { category, setCategory } = useBlogData();
    const { userExists, setUserExists, userId } = useCreateUser();
    const { formsOpen, setFormsOpen, setBio, setCreatures } = useUpdateProfile()
    const { profileData } = useGetProfile();

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout 
                            search={search} 
                            setSearch={setSearch} 
                            userExists={userExists}
                            setUserExists={setUserExists} />}>
                        <Route path='/' element={<Homepage 
                            setCategory={setCategory}/>} />
                        <Route path='/blog/:category' element={<Blog category={category}/>} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/profile/:userId' element={<Profile 
                            formsOpen = {formsOpen}
                            setFormsOpen = {setFormsOpen}
                            setBio={setBio}
                            setCreatures={setCreatures}
                            profileData= {profileData}  />} />
                        <Route path='/create' element={<Create userId={userId} />} />
                        <Route path='/search/:searchItems'element={<SearchLanding 
                        results={results} 
                        search={search} />} />
                        <Route path='/post/:id' element={<Post/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
