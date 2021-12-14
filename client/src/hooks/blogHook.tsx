import {useState, useEffect} from 'react';
import axios from 'axios';

export const useBlogData = () => {
    const [category, setCategory] = useState<string>('cryptid');
    const [blogPosts, setBlogPosts] = useState<[{}]>([{}])

    useEffect( () => {
        if (category!==undefined)   {

            console.log('fetching blog from API...', category)

            // this axios function not getting hit
            axios.get(`/api/categories/${category}`, {
                proxy: {
                    host: "http://localhost",
                    port: 3001
                }
            })
            .then((res) =>   {
                if (res){
                    const blog = res.data
                    setBlogPosts(blog)
                    console.log('blog posts', blog)
                }
                else {
                    console.log('nah dude')
                }
            });
        }

    }, [category] );

    return {category, setCategory, blogPosts};
}
