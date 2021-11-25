import './dashboard.scss';

export default function Dashboard()  {
    return  (
        <div className='dashboard'>
            <h2>DASHBOARD</h2>
            <h3 className='dashboard-description'>Posts that \username\ has saved</h3>

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
