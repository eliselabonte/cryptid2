import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';
import { iPost } from '../../../utils/iPostFormat';

// find all posts (by date) and render each as a post
export default function AllPosts(props:any) {
    const { setPostId } = props
    const [allPosts, setAllPosts] = useState<iPost[]>([{
        id:1,
        report:'', 
        description:'', 
        location:'', 
        timeSeen:'', 
        timeFiled: '', 
        category_id: 0,
        tags: [{
            id:1,
            tag_name:''
        }],
        user: {
            id:1,
            username:''
        }}]);

    useEffect(() => {
        // if (allPosts.length === 0)  {
            axios.get('/api/posts')
                .then((res) => {
                    const apiPosts = res.data
                    console.log({apiPosts})
                    setAllPosts(apiPosts)
                })
                .catch((err) => {
                    console.error(err)
                })
        
    }, [])
    console.log({allPosts})
    
    const posts = allPosts.map((post, i) =>  {
        return(
            <Post singlePostData={post} setPostId={setPostId} key={i}/>
        )
    })

    return(
        <Fragment>{posts}</Fragment>
    )
}
