import {useState, useEffect} from 'react';

export const useHome = () => {
    const [home, setHome] = useState<boolean>(false);

    return {home, setHome}
}


//  if at /, home is true. else, home is false