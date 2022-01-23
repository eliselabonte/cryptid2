import {useState, useEffect} from 'react';
import axios from 'axios';

export const useSinglePost = () => {
    const [postId, setPostId] = useState<number>(1);
    const [postData, setPostData] = useState<{}>({});

    useEffect( () => {
        if (postId!==undefined)   {
            // console.log('fetching post from API...')
            axios.get(`/api/posts/${postId}`)
            .then((res) =>   {
                const post = res.data
                setPostData(post)
            });
        }
        setPostId(4)
        console.log({setPostId})
    }, [postId] );

    return {postData, setPostId}
}