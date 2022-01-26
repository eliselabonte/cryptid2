import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';
import { iPost } from '../../../utils/iPostFormat';

// find all posts (by date) and render each as a post
export default function AllPosts(props:any) {
    const { setPostId, postId } = props
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
            axios.get('/api/posts')
                .then((res) => {
                    const apiPosts = res.data
                    setAllPosts(apiPosts)
                })
                .catch((err) => {
                    console.error(err)
                })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const posts = allPosts.map((post) =>  {
        return(
            <Post singlePostData={post} key={postId} setPostId={setPostId} />
        )
    })

    return(
        <Fragment>{posts}</Fragment>
    )
}
