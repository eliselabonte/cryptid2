import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useUpdateProfile } from './updateProfileHook';

// TODO: if isAuthenticated, create user using hook

export const useGetProfile = () => {
    // if forms are NOT open, call useEffect to retrieve data
    const {formsOpen} = useUpdateProfile();
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
    }, [username])

    return {profileData}
}

// HOW IT WORKS:
// on submit of form, grab bio and creatures. 
// call hook by setFormsOpen to true
// reload page to display creatures/bio
