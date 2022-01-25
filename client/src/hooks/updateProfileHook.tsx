import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const useUpdateProfile = () => {
    const [bio, setBio] = useState<string>(''); 
    const [creatures, setCreatures] = useState<string>(''); 
    const [sendUpdate, setSendUpdate] = useState<boolean>(false)
// update should only happen if sendUpdate is true
    
        const {user} = useAuth0();
        const username = user?.nickname

    // grab nickname from user object see if user exists with this username in db
    // if not, add user
    useEffect( () => {
        if(sendUpdate) {
            axios.put(`/api/users/${username}`, {bio: bio, creatures: creatures})
            .then((res) =>   {
                const confirmUpdate = res.data;
            })
            console.log(`updating profile for ${username}`)
        }}, [sendUpdate]);

    return {setBio, setCreatures, setSendUpdate}
}

export {useUpdateProfile}

// HOW IT WORKS:
// on submit of form, grab bio and creatures. 
// call hook by setFormsOpen to true
// reload page to display creatures/bio
