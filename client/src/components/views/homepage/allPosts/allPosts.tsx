import './allPosts.scss';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../../singlePost/post';
// TODO: ^^ that's for using later to map posts

// find all posts (by date) and render each as a post
export default function AllPosts() {
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        if (allPosts.length === 0)  {
            axios.get('/api/posts')
                .then((res) => {
                    const apiPosts = res.data
                    setAllPosts(apiPosts)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [allPosts])
    
    console.log(allPosts[0])
    const posts = allPosts.map((post, i) =>  {
        return(
            <Post postData={post} key={i}/>
        )
    })

    return(
        <Fragment>{posts}</Fragment>
    )
}
