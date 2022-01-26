// this image is for dev, will be replaced by imported image
import ProfilePic from '../../../images/nosferatu.png';
import UserPosts from './userPosts';
import './profile.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineForm, AiOutlineCheck } from "react-icons/ai";
import {useState} from 'react'
interface iProfileData {
    bio:string,
    creatures:string
}

// TODO: profile contains saved info about user (probably stored in User table)
//       post section is all posts by this user in order of date
function Profile(props:any) {
    const [formsOpen, setFormsOpen] = useState<boolean>(false);
    const [tempProfileData, setTempProfileData] = useState<iProfileData>({ bio:'', creatures:'' })

    const {setBio, setCreatures, setSendUpdate, profileData, hasNotFetched, setPostId } = props;

    const { user } = useAuth0();
    const nickname = user?.nickname;

    const {userId, userBio, userCreatures} = profileData;

    const updateField = (key:number) => (event:any) => { 
        if (key===1) {
            setTempProfileData({...tempProfileData, bio: event.target.value})
        }
        if (key===2) {
            setTempProfileData({...tempProfileData, creatures: event.target.value})
        }
    }

    function sendProfileUpdate() {
        setBio(tempProfileData.bio)
        console.log(tempProfileData.bio, tempProfileData.creatures)
        setCreatures(tempProfileData.creatures)
        setFormsOpen(false)
        setSendUpdate(true)
        hasNotFetched()
    }

    return (
        <div className='Profile'>
            <div className='column-left'>
                <section className='user-stuff'>
                    <img className='profile-pic' src={ProfilePic} alt="profile" />
                    <h3 className='username'>{ nickname }</h3>
                    {!formsOpen ? <h4 className='bio' id='bio'>{userBio ? userBio : 'add a bio!'}</h4> :
                    <input id='newBio' onChange={updateField(1)} />}
                    {!formsOpen ? <AiOutlineForm onClick={() => setFormsOpen(true)}/> : <AiOutlineCheck onClick={() => sendProfileUpdate()}/>}
                </section>
                <div className='my-creatures'>
                    <h3>Creatures on my radar</h3>
                    {!formsOpen ? <p id='creatures'>{userCreatures ? userCreatures : 'add some creatures!'}</p> :
                    <input id='newCreatures' onChange={updateField(2)} />}
                    {!formsOpen ? <AiOutlineForm onClick={() => setFormsOpen(true)}/> : <AiOutlineCheck onClick={() => sendProfileUpdate()}/>}
                </div>
            </div>
            <div className='my-reports column-right'>
                <h2 className='profile-title'>My Reports</h2>
                <UserPosts userId={userId} setPostId={setPostId} />
            </div>
        </div>
    )
}

export default Profile