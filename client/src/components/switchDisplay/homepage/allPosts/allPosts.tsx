import './allPosts.scss';
import axios from 'axios';
import Post from '../../singlePost/post';
// TODO: ^^ that's for using later to map posts

// find all posts (by date) and render each as a post
export default function AllPosts() {
    
    // declare posts
    const allPosts = new Array

    // get posts from api
    axios.get('/api/posts')
        .then((res) => {
            const apiPosts = res.data
            // add allPosts ([{}]) to the post variable ([{}]) => [{}, [{}]]
            allPosts.push(apiPosts)
            // flatten nested array
            allPosts.flat()
        })
        .catch((err) => {
            console.error(err)
        })

    allPosts.flat()
    // posts[0] logs empty object??
    // console.log({allPosts})

    return(
        <div>all posts</div>
    )
}
