import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';

// find all posts (by date) and render each as a post
export default function TagPosts(props:any) {
    const { results } = props;
    const safeResults = results || [];

    const foundPosts = safeResults.map((result:any) => {
        const safePosts = result.posts || [];
        console.log(safePosts)
        if (!safeResults || safeResults===[] || safeResults!==results){
            console.log('nah')
            // TODO: some error here
            return(
                <h2>No results found</h2>
            )
        }
        // else{
        //     return(
        //         <Post postData={post} key={i}/>
        //     )
        // }
    })


    return(
        <div></div>
    )
}
