import './blog.scss';
import { FaStar } from 'react-icons/fa';

export default function Blog() {
    return  (
        // this is for all posts or a specific category
        <div className='blog'>
            <h2 className='blog-title'>UFO Reports</h2>
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
                    <h4 className='report-name-date'>by Name on Date</h4>
                </section>
                <p className='report'>Report report report report Report report report report Report report report report Report report report report Report report report report Report report report report Report report report report.</p>
                <div className='report-bottom'>
                    <ul className='tags-list'>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                    </ul>
                    <FaStar 
                    className='star-icon'
                    />
                </div>
            </div>
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
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
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
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
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
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
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
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
        </div>
    )
}
