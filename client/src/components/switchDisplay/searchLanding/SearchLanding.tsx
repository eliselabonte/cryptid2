import './searchLanding.scss';
// import { Iresults } from '../../../useSearch';
import { Link, useNavigate } from 'react-router-dom';
interface Iprops {
    results:any,
    // singlePostID:number,
    // setSinglePostID?:(a:number) => {}
}

export default function SearchLanding(props:Iprops) {
    const { results } = props;
    const safeResults = results || [];
    const navigate = useNavigate();
    const foundPosts = safeResults.map((result:any) => {
        const safePosts = result.posts || []

        return(
            <div className='search-result' key={result.tag_name}>
                <h3 className='report-title'>Tag title: {result.tag_name}</h3>
                {safePosts.map((post:any) => {
                    // TODO: return username on post.user_id. Seems to be issue with data included in return
                    //       add route to return a given username for the id (maybe not best practice?)
                    return (
                        <div>
                            <h4 
                            onClick={()=> navigate(`/posts/${post.id}`, {replace:true})} 
                            className='name-date' 
                            // onClick={() => {singlePostID ? setSinglePostID(post.id): null}}
                            key={post.id}>by {post.user_id} Location: {post.location}</h4>
                            <p>{post.report}</p>
                        </div>
                    )
                })}
            </div>
        )
    });
    
    return (
        <div className='searchLanding'>
            {/* <h2 className='search-landing-title'>{foundPosts ? 
            `Search Results for "${search}"` : 
            `no results`}
            </h2> */}
            {foundPosts}
        </div>
    )
}
