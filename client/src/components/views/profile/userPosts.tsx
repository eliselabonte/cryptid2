import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';

// find all posts (by date) and render each as a post
export default function UserPosts(props:any) {
    const [userPosts, setUserPosts] = useState([]);

    const {userId, setPostId, postId } = props;

    useEffect(() => {
        if (userPosts.length === 0)  {
            axios.get(`/api/posts/profile/${userId}`)
                .then((res) => {
                    const apiPosts = res.data
                    setUserPosts(apiPosts)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [userPosts, userId])
    
    const posts = userPosts.map((post) =>  {
        return(
            <Post singlePostData={post} key={postId} setPostId={setPostId} />
        )
    })

    return(
        <Fragment>{posts}</Fragment>
    )
}
