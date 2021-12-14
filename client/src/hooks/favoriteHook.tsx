import {useState, useEffect} from 'react';
import axios from 'axios';

export const useFavorite = () => {
    const [postId, setPostId] = useState<number>(1);
    const [postData, setPostData] = useState<{}>({});

    useEffect( () => {
        if (postId!==undefined)   {
            console.log('fetching post from API...', postId)
            axios.get(`/api/posts/${postId}`)
            .then((res) =>   {
                const post = res.data
                setPostData(post)
            });
        }
        // SPRINKLES: add query parameters
    }, [postId] );

    return {postId, setPostId, postData}
}

// first write logic for favorites of this user.
// onClick, favorite item => axios update user table (where user email === user.email) with favorite post id
// at dashboard, axios get favorite posts of this user