import {useState, useEffect} from 'react';
import axios from 'axios';

export const useCreate = () => {
    const [postCreated, setPostCreated] = useState<boolean>(false)

    const [newPost, setNewPost] = useState<{
        report:string, 
        description:string, 
        location:string, 
        timeSeen:string,
        timeFiled:string,
        category_id:number,
        user_id:number}>
            ({
            report:'', 
            description:'', 
            location:'', 
            timeSeen:'', 
            timeFiled: '', 
            category_id: 0,
            user_id: 0});

    useEffect( () => {
        if (newPost!==undefined)   {
            const {report, description, location, timeSeen, timeFiled, category_id, user_id} = newPost
            console.log('adding new post to API...', newPost)
            axios.post(`/api/posts/`, {report, 
            description, 
            location, 
            timeSeen, 
            timeFiled, 
            category_id, 
            user_id})
            .then((res) =>   {
                const confirm = res.data;
                console.log(confirm)
                setPostCreated(true)
            });
        }
    }, [newPost] );

    return {setNewPost, postCreated}
}
