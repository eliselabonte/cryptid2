import React from "react";
// this image is for dev, will be replaced by imported image
import ProfilePic from '../../../images/nosferatu.png';
import './profile.scss';

function Profile() {
    return (
        <div className='Profile'>
            <div className='column-left'>
                <section className='user-stuff'>
                    <img className='profile-pic' src={ProfilePic}/>
                    <h3 className='username'>username</h3>
                    <h4 className='bio'>a little bio about me, a fellow monster hunter</h4>
                </section>
                <div className='my-creatures'>
                    <h4>Creatures on my radar</h4>
                    <ul>
                        <li>Jersey Devil</li>
                        <li>The Syracuse Siren</li>
                        <li>Gary Busey</li>
                    </ul>
                </div>
            </div>

            <div className='my-reports column-right'>
                <h2 className='Profile-title'>My Reports</h2>
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
        </div>

    )
}

export default Profile