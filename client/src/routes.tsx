import axios from "axios";

export async function getAllPosts() {

        await axios.get('/api/posts/')
        .then((res) =>  {
            const allPosts = res.data;
            return allPosts
        })
    }