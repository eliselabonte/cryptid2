import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';

// find all posts (by date) and render each as a post
export default function UserPosts(props:any) {
    const [userPosts, setUserPosts] = useState([]);

    const {userId} = props;

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
    }, [userPosts])
    
    const posts = userPosts.map((post, i) =>  {
        return(
            <Post postData={post} key={i}/>
        )
    })

    return(
        <Fragment>{posts}</Fragment>
    )
}
