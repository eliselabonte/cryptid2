import './dashboard.scss';
import axios from 'axios';
import {useEffect} from 'react';
// import { getAllPosts } from '../../../routes';

export default function Dashboard(props:any) {
    const {results, setResults} = props;

    const safePosts = results || [];

        return  (
            <div className='dashboard'>
                <h2 className='dashboard-title'>Dashboard</h2>
                <h3 className='dashboard-description'>All Posts</h3>
                {safePosts.map((report:any) =>{
                    const safeTags = report.tags || []
                    return(
                        <div className='report' key={report.id}>
                            <section className='report-info'>
                                <h3 className='report-description'>{report.description}</h3>
                                <h4 className='report-name-date'>by {report.user} location:{report.location}</h4>
                            </section>
                            <p className='report'>{report.report}</p>
                            <ul className='tags-list'>
                                {safeTags.map((tag:any) =>{
                                    return(
                                        <li className='report-tag' key={tag.id}>#{tag.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        )

}
