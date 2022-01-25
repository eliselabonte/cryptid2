import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
interface iUser {
    userId:number,
    userBio:'', 
    userCreatures:''
}

export const useGetProfile = () => {
    const [profileData, setProfileData] = useState<iUser>({userId: 4,userBio:'', userCreatures:''})
    const [shouldFetch, setShouldFetch] = useState<boolean>(true)

    const {user} = useAuth0();
    const username = user?.nickname

    const hasFetched = () => {
        setShouldFetch(false)
    }
    const hasNotFetched = () => {
        setShouldFetch(true)
    }

    useEffect(() => {
        if(shouldFetch && username) {
            axios.get(`/api/users/${username}`)
                .then((res) => {
                    const userData = res.data;
                    console.log(userData)
                    if(userData) {
                        console.log(userData.bio)
                        setProfileData({userId: userData.id, userBio: userData.bio, userCreatures: userData.creatures})
                    }
                })
            }
            // console.log(profileData)
            hasFetched();
        }, [shouldFetch])

    return {profileData, hasFetched, hasNotFetched}
};
