import './blog.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../singlePost/post';

export default function Blog(props:any) {   
    // TODO: Define prop types
    //       return all blog posts for a given category
    //       address is '/blog/:category'
    const {category} = props;
    const [categoryPosts, setCategoryPosts] = useState([{}])

    useEffect(() => {
        axios.get(`/api/categories/${category}`)
            .then((res) => {
                const thesePosts = res.data;
                setCategoryPosts(thesePosts)
            })
    }, [categoryPosts])
    
    const posts = categoryPosts.map((post, i) => {
        return(
            <Post postData={post} key={i}/>
        )
    })

    return  (
        // this is for all posts or a specific category
        <div className='blog'>
            <h2 className='blog-title'>{category} reports</h2>
            {posts}
        </div>
    )
}


// Categories.forEach((cat) => {
    //     if (cat.category_name === category) {
    //         cat_id = cat.id
    //     }
    // })

    // Posts.map((post) => {
    //     if(post.category_id === cat_id) {
    //         let username
    //         let tagName
    //         Users.forEach((user) => {
    //             if (user.id === post.user_id)   {
    //                 username = user.username
    //             }
    //         })

    //         Tags.forEach((tag) => {
    //             if (tag.id === post.tag_id) {
    //                 tagName = tag.tag_name
    //             }
    //         })

    //         let id = post.id;
    //         let user = username;
    //         let desc = post.description;
    //         let report = post.report;
    //         let location = post.location;
    //         let tag = tagName

    //         const singlePost = { 
    //             id:id, 
    //             user: user, 
    //             description: desc, 
    //             report:report, 
    //             location:location, 
    //             tag:tag }
    //         blogPosts.push(singlePost) 
    //     }
    // })