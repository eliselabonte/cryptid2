import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./components/views/homepage/Homepage";
import Blog from "./components/views/blog/blog";
import Dashboard from "./components/views/dashboard/Dashboard";
import Profile from "./components/views/profile/Profile";
import SearchLanding from "./components/views/searchLanding/SearchLanding";
import { useSearch } from "./hooks/searchHook";
import { useBlogData } from "./hooks/blogHook";
import { useSinglePost } from "./hooks/postHook";
import { useCreateUser } from "./hooks/createUserHook";
import { useUpdateProfile } from "./hooks/updateProfileHook";
import Post from "./components/views/singlePost/post";
import Create from "./components/views/create/create";

export default function AllRoutes(children: any) {
    const { search, setSearch, results } = useSearch();
    const { category, setCategory } = useBlogData();
    const { postData, setPostId } = useSinglePost();
    const { userExists, setUserExists, userId } = useCreateUser();
    const { bio, creatures, formsOpen, setFormsOpen, setBio, setCreatures } = useUpdateProfile()

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout 
                            search={search} 
                            setSearch={setSearch} 
                            userExists={userExists}
                            setUserExists={setUserExists} />}>
                        <Route path='/' element={<Homepage setCategory={setCategory} />} />
                        <Route path='/blog/:category' element={<Blog category={category}/>} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/profile/:userId' element={<Profile 
                            formsOpen = {formsOpen}
                            setFormsOpen = {setFormsOpen}
                            bio={bio} 
                            creatures={creatures} 
                            setBio={setBio}
                            setCreatures={setCreatures} />} />
                        <Route path='/create' element={<Create userId={userId} />} />
                        <Route path='/search/:searchItems'element={<SearchLanding results={results} />} />
                        <Route path='/post/:id' element={<Post postData={postData} setPostId={setPostId}/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
