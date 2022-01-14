import {useState, useEffect} from 'react';

export const useHome = () => {
    const [home, setHome] = useState<boolean>(false);

    // useEffect( () => {
    //     if (postId!==undefined)   {
            
    //     }
    // });

    return {home, setHome}
}
