import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const useGetProfile = () => {
    const [profileData, setProfileData] = useState<{userId:number ,userBio:'', userCreatures:''}>({userId: 4,userBio:'', userCreatures:''})
    const [shouldFetch, setShouldFetch] = useState<boolean>(true)

    const {user} = useAuth0();
    const username = user?.nickname

    // grab nickname from user object see if user exists with this username in db
    // if not, add user
    const hasFetched = () => {
        setShouldFetch(false)
    }

    useEffect(() => {
        if(shouldFetch===true) {
            axios.get(`/api/users/${username}`)
                .then((res) => {
                    const userData = res.data;
                    if(userData) {
                        setProfileData({userId: userData.id, userBio: userData.bio, userCreatures: userData.creatures})
                    }
                })
            }
            setShouldFetch(false)
        }, [username, shouldFetch])

    return {profileData, hasFetched}
};
