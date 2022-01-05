import './blog.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../singlePost/post';

export default function Blog(props:any) {   
    // TODO: Define prop types
    //       return all blog posts for a given category
    //       address is '/blog/:category'
    const {category} = props;
    const [categoryPosts, setCategoryPosts] = useState<any[]>([])

    useEffect(() => {
        axios.get(`/api/categories/${category}`)
            .then((res) => {
                const thesePosts = res.data;
                setCategoryPosts(thesePosts)
            })
    }, [category])

    if (categoryPosts.length){
        const postArray = categoryPosts[0].posts;
        
        const postMap = postArray.map((post:[], i:any) => {
            return(
                <Post postData={post} key={i}/>
                )
            })
    
        return  (
            // this is for all posts or a specific category
            <div className='blog'>
                <h2 className='blog-title'>{category} reports</h2>
                {postMap}
            </div>
        )
    }
    else {
        return(
            <div className='blog'>
                <h2 className='blog-title'>No {category} reports yet.</h2>
            </div>
        )
    }
}