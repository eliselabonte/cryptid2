import './post.scss';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
// TODO: use star icon as button to select favorites

export default function Post(props:any)  {
    const { postData, setPostId } = props;
    const navigate = useNavigate()
    let tagList

    if (postData.tags) {
        tagList = postData.tags.map((tag:any, i:any) => {
            return(
                <li key={i}>#{tag.tag_name}</li>
            )
        })
    }

    function link(id:number) {
        navigate (`/post/${id}`, {replace:true})
        // setPostId(id)
    }

    return  (
        <div className='post'
            onClick={() => {link(postData.id)}}>
            <section className='report-info'>
                <h3 className='report-description'>{postData.description}</h3>
                <h4 className='report-name-date'>by {postData.user_id} on {postData.timeSeen}</h4>
            </section>
            <p className='report'>{postData.report}</p>
            <ul className='tags-list'>
                {tagList}
            </ul>
            {/* <FaStar 
            className='star-icon'
            /> */}
        </div>
    )}