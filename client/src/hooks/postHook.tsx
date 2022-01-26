import {useState, useEffect} from 'react';
import axios from 'axios';
import { iPost } from '../utils/iPostFormat'

export const useSinglePost = () => {
    // this is where it is breaking. postId not updating with array of posts
    const [postId, setPostId] = useState<number>(0);
    const [singlePostData, setSinglePostData] = useState<iPost>({
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
        }});

    useEffect( () => {
        if (postId!==0)   {
            axios.get(`/api/posts/${postId}`)
            .then((res) => {
                const post = res.data
                console.log(post)
                setSinglePostData(post)
            });
        }
    }, [postId] );

    return {singlePostData, setPostId, postId}
}