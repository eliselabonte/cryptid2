import './post.scss';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { useAuth0 } from '@auth0/auth0-react';
import { FaTrash } from 'react-icons/fa';

export default function Post(props:any)  {
    const {isAuthenticated, user} = useAuth0();
    const nickname = user?.nickname;
    const { postData, setPostId } = props;
    const navigate = useNavigate();
    let tagList;

    if (postData.tags) {
        tagList = postData.tags.map((tag:any, i:any) => {
            return(
                <li key={i}>#{tag.tag_name}</li>
            )
        })
    }

    const safeUsername = postData.user?.username || null

    function link(id:number) {
        console.log(setPostId)
        navigate (`/post/${id}`, {replace:true})
    }

    return  (
        <div className='post'
            onClick={() => {link(postData.id)}}>
            <section className='report-info'>
                <h3 className='report-description'>{postData.description}</h3>
                <h4 className='report-name-date'>{safeUsername!==null ? `by ${safeUsername}` : null} on <Moment format='MMMM Do YYYY, h:mm a'>{postData.timeFiled}</Moment></h4>
            </section>
            <p className='report'>{postData.report}</p>
            <p>time seen: {postData.timeSeen ? 
            <Moment format='MMMM Do YYYY, h:mm a'>{postData.timeSeen}</Moment>
            : 'not recorded'}</p>
            <ul className='tags-list'>
                {tagList}
            </ul>
            <div className='align-right'>
                {isAuthenticated && safeUsername===nickname ? <FaTrash /> : null}
            </div>
        </div>
    )}

    <Moment format='MMMM Do YYYY, h:mm a'></Moment>