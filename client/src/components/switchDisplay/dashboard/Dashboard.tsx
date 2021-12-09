import './dashboard.scss';
import axios from 'axios';
import {useEffect} from 'react';
// import { getAllPosts } from '../../../routes';

// TODO: THIS PAGE GOES WITH FAVORITE FUNCTION.
export default function Dashboard(props:any) {
    // const {results, setResults} = props;
    // const safePosts = results || [];
    let username:string;
    let tagName:string;

    // TODO: Get all posts that this user has saved/favorited
    //       should be ~~ '/dashboard/:id' where id = user id (need to write backend route)

    // function thisUser(id:number) {
    //     Users.forEach((user) => {
    //         if(user.id === id)  {
    //             username = user.username
    //         }
    //     })
    // }

    // function theseTags(tagId:number) {
    //     Tags.forEach((tag) => {
    //         if(tag.id === tagId) {
    //             tagName = tag.tag_name
    //         }
    //     })
    // }

        return  (
            <div className='dashboard'>
                {/* <h2 className='dashboard-title'>Dashboard</h2>
                <h3 className='dashboard-description'>All Posts</h3>
                {Posts.map((report:any) =>{
                    // const safeTags = report.tags || []
                    return(
                        <div className='report' key={report.id}>
                            {thisUser(report.user_id)}
                            <section className='report-info'>
                                <h3 className='report-description'>{report.description}</h3>
                                <h4 className='report-name-date'>by {username} location:{report.location}</h4>
                            </section>
                            <p className='report'>{report.report}</p>
                            <ul className='tags-list'>
                                {theseTags(report.tag_id)}
                                #{tagName}
                            </ul>
                        </div>
                    )
                })} */}
            </div>
        )

}
