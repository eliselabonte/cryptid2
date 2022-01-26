import {useState, useEffect} from 'react';
import axios from 'axios';

export const useBlogData = () => {
    const [category, setCategory] = useState<string>('cryptid');
    const [blogPosts, setBlogPosts] = useState<[{}]>([{}])

    useEffect( () => {
        if (category!==undefined)   {

            console.log('fetching blog from API...', category)

            axios.get(`/api/categories/${category}`)
            .then((res) =>   {
                if (res){
                    const blog = res.data
                    setBlogPosts(blog)
                }
            });
        }

    }, [category] );

    return {category, setCategory};
}
