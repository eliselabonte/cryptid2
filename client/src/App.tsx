import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./components/switchDisplay/homepage/Homepage";
import Blog from "./components/switchDisplay/blog/blog";
import Dashboard from "./components/switchDisplay/dashboard/Dashboard";
import Profile from "./components/switchDisplay/profile/Profile";
import SearchLanding from "./components/switchDisplay/searchLanding/SearchLanding";
import {useSearch, useBlogData, useSinglePost} from './routeFunctions';
import Post from "./components/switchDisplay/singlePost/post";
import Create from "./components/switchDisplay/create/create";

export default function AllRoutes(children: any) {
    const { search, setSearch, results } = useSearch();
    const { category, setCategory, blogPosts } = useBlogData();
    const { postId, setPostId, postData } = useSinglePost();

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
                        <Route path='/' element={<Homepage setCategory={setCategory}/>} />
                        <Route path='/blog/:category' element={<Blog 
                            category={category} 
                            blogPosts={blogPosts}/>} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/profile/:id' element={<Profile />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/search/:searchItems'
                            element={<SearchLanding results={results} />} />
                        <Route path='/post/:id' element={<Post 
                        postId={postId}
                        setPostId={setPostId}
                        postData={postData}/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
