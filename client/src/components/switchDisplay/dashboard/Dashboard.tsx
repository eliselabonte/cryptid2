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
            <h3 className='dashboard-description'>All Saved Posts</h3>
        </div>
    )

}
