import './blog.scss';
import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

export default function Blog() {   

    return  (
        // this is for all posts or a specific category
        <div className='blog'>
            <h2 className='blog-title'>UFO Reports</h2>

            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Are We Really Alone?</h3>
                    <h4 className='report-name-date'>by sasquatchbeliever on 12/02/2021</h4>
                </section>
                <p className='report'>Last night around 11:45 I saw several small lights dancing in the sky from my bedroom window so I went outside to take a look. As I got closer to investigate I realised that the lights were much larger and farther away then I thought. Then all of a sudden one of the lights came derectly towards me at an alarming speed! The now approximately 6ft in diameter ball of light stopped about 100 yards away and seemed to be focused directly on me. after about 10 second the ball of light sped off in the exact opposite direction it had come from, and it was gone, along with the other dancing lights, and I was left bewildered in total darkness. I know now we are not alone.</p>
                <ul className='tags-list'>
                    <li className='report-tag'>#UFO</li>
                    <li className='report-tag'>#sighting</li>
                    <li className='report-tag'>#encounter</li>
                </ul>
            </div>

            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Bright Lights In my Window</h3>
                    <h4 className='report-name-date'>by Little Green Man on 08/23/2020</h4>
                </section>
                <p className='report'>Last night I awoke to very bright light coming through my bedroom window. I went to the window to see where the light was coming from and it dissapeared right before I got close enough to see. There were no cars or streetlights, am I being watched by aliens? Help!</p>
                <ul className='tags-list'>
                    <li className='report-tag'>#UFO</li>
                    <li className='report-tag'>#encounter</li>
                </ul>
            </div>

            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Crop Circles In My Cornfield</h3>
                    <h4 className='report-name-date'>by farmerbrown62 on 06/14/2019</h4>
                </section>
                <p className='report'>Went out to feed the hogs this morning and found what I believe to be crop circles in my cornfield left behind from an alien ship landing! My cows sure as heck didn't do this! </p>
                <ul className='tags-list'>
                    <li className='report-tag'>#UFO</li>
                    <li className='report-tag'>evidence</li>
                    <li className='report-tag'>#encounter</li>
                </ul>
            </div>

            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>I Saw It!</h3>
                    <h4 className='report-name-date'>by avidposter86 on 02/29/2019</h4>
                </section>
                <p className='report'>I saw it! The famous tick-tack shaped craft, hovering right above the water at VA beach! Unmistakeable, it looked exactly as I've heard it described.</p>
                <ul className='tags-list'>
                    <li className='report-tag'>#UFO</li>
                    <li className='report-tag'>#sighting</li>
                </ul>
            </div>

            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>My friend was took!</h3>
                    <h4 className='report-name-date'>by earthisflat83 on 11/18/2018</h4>
                </section>
                <p className='report'>Me and Jimbo were drinkin in the shed last night and Jimbo went to break the seal and never came back... He's been abducted! The aliens have him now. His wife claims he climbed in the window last night and passed out on the kitchen table, but the aliens must have brainwarshed her! She don't even realise her husbands been abducted and replaced with a robot!!! Can't fool me, nice try aliens.</p>
                <ul className='tags-list'>
                    <li className='report-tag'>#UFO</li>
                    <li className='report-tag'>#sighting</li>
                    <li className='report-tag'>#encounter</li>
                </ul>
            </div>

        </div>
    )
}
