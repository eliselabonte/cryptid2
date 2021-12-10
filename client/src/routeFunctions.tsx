import {useState, useEffect} from 'react';
import axios from 'axios';
export interface Ipost {
    description:string;
    location:string;
}
export interface Iresult {
        tag_name:'';
        posts:[ Ipost ]
}
export interface Iresults {
    results:[Iresult];
}

// TODO: refactor each of these into their own files

export const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState([{}]);

    useEffect( () => {
        if (search!==undefined)   {
            // console.log('fetching searchResults from API...', search)
            axios.get(`/api/tags/${search}`)
            .then((res) =>   {
                const foundResults = res.data
                setResults(foundResults)
            });
        }
        // SPRINKLES: add query parameters
    }, [search] );

    return {search, setSearch, results};
};

export const useBlogData = () => {
    const [category, setCategory] = useState<string>('cryptid');
    const [blogPosts, setBlogPosts] = useState<[{}]>([{}])

    useEffect( () => {
        if (category!==undefined)   {
            console.log('fetching post from API...', category)
            axios.get(`/api/categories/${category}`)
            .then((res) =>   {
                console.log('route functions')
                const blog = res.data
                setBlogPosts(blog)
            });
        }
        // SPRINKLES: add query parameters
    }, [category] );

    return {category, setCategory, blogPosts};
}

export const useSinglePost = () => {
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