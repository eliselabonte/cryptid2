import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const useUpdateProfile = () => {
    // if forms are NOT open, call useEffect to retrieve data

    const [formsOpen, setFormsOpen] = useState<boolean>(false);
    const [bio, setBio] = useState<string>(''); 
    const [creatures, setCreatures] = useState<string>(''); 
    
        const {user} = useAuth0();
        const username = user?.nickname

    // grab nickname from user object see if user exists with this username in db
    // if not, add user
    useEffect( () => {
        axios.put(`/api/users/${username}`, {bio: bio, creatures: creatures})
        .then((res) =>   {
            const confirmUpdate = res.data;
            setFormsOpen(false)
        })
        console.log(`updating profile for ${username}`)
            // axios.get(`/api/users/${username}`)
            // .then((res) => {
            //     const userData = res.data
            //     if(userData) {
            //         setBio(userData.bio);
            //         setCreatures(userData.creatures)
            //     }
            // })
    }, [bio, creatures]);

    return {setBio, setCreatures, setFormsOpen, formsOpen, bio, creatures}
}

const useGetProfile = () => {
    // if forms are NOT open, call useEffect to retrieve data
    const {bio, creatures, formsOpen} = useUpdateProfile();
    const [profileData, setProfileData] = useState<{userId:number ,userBio:'', userCreatures:''}>({userId: 4,userBio:'', userCreatures:''})

    const {user} = useAuth0();
    const username = user?.nickname

    // grab nickname from user object see if user exists with this username in db
    // if not, add user
    
    useEffect(() => {
        axios.get(`/api/users/${username}`)
            .then((res) => {
                const userData = res.data
                if(userData) {
                    setProfileData({userId: userData.id, userBio: userData.bio, userCreatures: userData.creatures})
                }
            })
    }, [bio, creatures])

    console.log(profileData)

    return {profileData}
};

export {useGetProfile, useUpdateProfile}

// HOW IT WORKS:
// on submit of form, grab bio and creatures. 
// call hook by setFormsOpen to true
// reload page to display creatures/bio
