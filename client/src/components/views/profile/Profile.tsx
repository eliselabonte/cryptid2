import { useState, useEffect } from 'react';
// this image is for dev, will be replaced by imported image
import ProfilePic from '../../../images/nosferatu.png';
import './profile.scss';
import $ from 'jquery';
import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineForm, AiOutlineCheck } from "react-icons/ai";
import axios from 'axios';

// TODO: profile contains saved info about user (probably stored in User table)
//       post section is all posts by this user in order of date
function Profile(props:any) {
    const {formsOpen, setFormsOpen, setBio, setCreatures} = props;
    const [profileData, setProfileData] = useState<{userBio:'', userCreatures:''}>({userBio:'', userCreatures:''})

    const { user } = useAuth0();
    const username = user?.nickname;

    useEffect(() => {
        axios.get(`/api/users/${username}`)
            .then((res) => {
                const userData = res.data
                if(userData) {
                    setProfileData({userBio: userData.bio, userCreatures: userData.creatures})
                }
            })
    }, [formsOpen])

    const {userBio, userCreatures} = profileData;

    function sendProfileUpdate() {
        const newBio = $('#newBio').val();
        const newCreatures = $('#newCreatures').val();

        setBio(newBio);
        setCreatures(newCreatures);

        // TODO: combine bio and creatures into one object?
        setFormsOpen(false)
    }

    return (
        <div className='Profile'>
            <div className='column-left'>
                <section className='user-stuff'>
                    <img className='profile-pic' src={ProfilePic} alt="profile" />
                    <h3 className='username'>{ username }</h3>
                    {!formsOpen ? <h4 className='bio' id='bio'>{userBio ? userBio : 'add a bio!'}</h4> :
                    <input id='newBio'/>}
                    {!formsOpen ? <AiOutlineForm onClick={() => setFormsOpen(true)}/> : <AiOutlineCheck onClick={() => sendProfileUpdate()}/>}
                </section>
                <div className='my-creatures'>
                    <h3>Creatures on my radar</h3>
                    {!formsOpen ? <p id='creatures'>{userCreatures ? userCreatures : 'add some creatures!'}</p> :
                    <input id='newCreatures'/>}
                    {/* <ul>
                        <li>Sasquatch (Bigfoot)</li>
                        <li>Mothman</li>
                        <li>Extra Terrestrials</li>
                    </ul> */}
                    {!formsOpen ? <AiOutlineForm /> : <AiOutlineCheck onClick={() => sendProfileUpdate()}/>}
                </div>
            </div>

            <div className='my-reports column-right'>
                <h2 className='profile-title'>My Reports</h2>
                <div className='report'>
                    <section className='report-info'>
                        <h3 className='report-title'>Saw Bigfoot at Wal-Mart!</h3>
                        <h4 className='report-name-date'>by sasquatch believer on 11/26/2021</h4>
                    </section>
                    <p className='report'>I definitely saw bigfoot at the Wal-Mart in Fort Worth! He was wearing overalls, and I didn't get a good look at his face, but it was clearly a sasquatch. I tracked him to the register and he purchased Slim Jims and Doritos. Not sure what that means...</p>
                    <ul className='tags-list'>
                        <li className='report-tag'>#bigfoot</li>
                        <li className='report-tag'>#sasquatch</li>
                        <li className='report-tag'>#sighting</li>
                    </ul>
                </div>
                <div className='report'>
                    <section className='report-info'>
                        <h3 className='report-title'>My Refridgerator Is Haunted</h3>
                        <h4 className='report-name-date'>by sasquatchbeliever on 11/28/2021</h4>
                    </section>
                    <p className='report'>Today when I was making breakfast the eggs started jumping out of their container and frying right on the counter! Then my refridgerator opened and I heard a voice say, "ZUUL"! I slammed the door shut and ran!</p>
                    <ul className='tags-list'>
                        <li className='report-tag'>#paranormal</li>
                        <li className='report-tag'>#ghost</li>
                        <li className='report-tag'>#experience</li>
                    </ul>
                </div>
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
            </div>
        </div>
    )
}

export default Profile