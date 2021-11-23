import React from "react";
import './dashboard.scss';

function Dashboard() {
    return (
        <div className='dashboard'>
            <h2>DASHBOARD</h2>
            <p>Contains posts of users and tags that the logged-in user follows</p>
            
            <h2 className='dashboard-title'>My Reports</h2>
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

export default Dashboard