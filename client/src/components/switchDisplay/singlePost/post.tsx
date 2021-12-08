import axios from 'axios';
import './post.scss';

export default function Post(props:any)  {


    // TODO: Route for single post at '/posts/:id'
    return  (
        <div className='post'>
            <section className='report-info'>
                <h3 className='report-description'>Report description</h3>
                <h4 className='report-name-date'>by Name on Date</h4>
            </section>
            <p className='report'>Report report report report Report report report report Report report report report Report report report report Report report report report Report report report report Report report report report.</p>
            <ul className='tags-list'>
                <li className='report-tag'>#tag</li>
                <li className='report-tag'>#tag</li>
                <li className='report-tag'>#tag</li>
                <li className='report-tag'>#tag</li>
            </ul>
        </div>
    )}