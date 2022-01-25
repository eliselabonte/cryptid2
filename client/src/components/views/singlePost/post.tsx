import './post.scss';
// import { useSinglePost } from '../../../hooks/postHook'
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { useAuth0 } from '@auth0/auth0-react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

export default function Post(props:any)  {
    const { singlePostData, setPostId } = props;
    const {isAuthenticated, user} = useAuth0();
    const nickname = user?.nickname;
    const navigate = useNavigate();
    let tagList;
    
    function link() {
        navigate (`/post/${singlePostData.id}`, {replace:true})
        setPostId(singlePostData.id)
    }

    if (singlePostData===undefined) {
        console.log('no post data')
        return null
    }

    if (singlePostData.tags) {
        tagList = singlePostData.tags.map((tag:any, i:any) => {
            return(
                <li key={i}>#{tag.tag_name}</li>
            )
        })
    }
    const safeUsername = singlePostData.user ? singlePostData.user.username : null;

    function deletePost(id:number) {
        try {axios.delete(`/api/posts/${id}`)}
        catch(err){console.log(err)}
    }

    return  (
        <div className='post'
            onClick={link}>
            <section className='report-info'>
                <h3 className='report-description'>{singlePostData.description}</h3>
                <h4 className='report-name-date'>{safeUsername!==null ? `by ${safeUsername}` : null} on <Moment format='MMMM Do YYYY, h:mm a'>{singlePostData.timeFiled}</Moment></h4>
            </section>
            <p className='report'>{singlePostData.report}</p>
            <p>time seen: {singlePostData.timeSeen ? 
            <Moment format='MMMM Do YYYY, h:mm a'>{singlePostData.timeSeen}</Moment>
            : 'not recorded'}</p>
            <ul className='tags-list'>
                {tagList}
            </ul>
            <div className='align-right'>
                {isAuthenticated && safeUsername===nickname ? <FaTrash onClick={()=>{deletePost(singlePostData.id)}}/> : null}
            </div>
        </div>
    )}

    <Moment format='MMMM Do YYYY, h:mm a'></Moment>