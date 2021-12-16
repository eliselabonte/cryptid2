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
import Post from "./components/views/singlePost/post";
import Create from "./components/views/create/create";

export default function AllRoutes(children: any) {
    const { search, setSearch, results } = useSearch();
    const { category, setCategory } = useBlogData();
    const { postData, setPostId } = useSinglePost();

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
                        <Route path='/' element={<Homepage setCategory={setCategory}/>} />
                        <Route path='/blog/:category' element={<Blog category={category}/>} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/profile/:id' element={<Profile />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/search/:searchItems'element={<SearchLanding results={results} />} />
                        <Route path='/post/:id' element={<Post postData={postData} setPostId={setPostId}/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
