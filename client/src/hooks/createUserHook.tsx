import {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

// TODO: if isAuthenticated, create user using hook

export const useCreateUser = () => {
    const [userExists, setUserExists] = useState<boolean>(false)
    const [userId, setUserId] = useState<number>(1) 
    
        const {user} = useAuth0();
        const username = user?.nickname

    useEffect( () => {
        if (!userExists && username)   {
            console.log('adding new user to API...', username)
            axios.post(`/api/users`, {username: username})
            .then((res) =>   {
                const userConfirm = res.data;
                console.log({userConfirm})
                setUserExists(true)
                setUserId(userConfirm.id)
            });
        }
    });

    return {userExists, setUserExists, userId}
}

// TODO: apply userCreated in 
