import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Post from '../singlePost/post';

// find all posts (by date) and render each as a post
export default function TagPosts(props:any) {
    const { results } = props;
    console.log(results)
    const safeResults = results || [];
    const foundPosts = safeResults.map((result:any) => {
        const safePosts = result.posts || [];
        console.log(safePosts)
        // !safeResults || safeResults===[] || safeResults!==results
        if (safeResults){
            console.log(safePosts)
            return(<div></div>)
        }
        else{
            console.log('nah')
            // TODO: some error here
            return(
                <h2>No results found</h2>
            )
            // return(
            //     <Post postData={post} key={i}/>
            // )
        }
    })

    return (<div>{foundPosts}</div>)
}
