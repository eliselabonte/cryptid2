import './main.scss';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
export default function Main(props:any) {
    const {display, setDisplay} = props;

    // TODO:
    // if display is not hompepage, jump to #scrolldown
    
    return (
        <main className='main'>
            {/* toggle className 'homepage'  on h1 and h2 elements for  homepage display*/}
            <Link to='/'>
                <h1>CRYPT-ID</h1></Link >
            <h2 className={display === 'Homepage' ? 'tagline homepage' : 'tagline'}>a place for believers, theorists, and those who have seen the unexplainable....</h2>
            <Outlet />
        </main>
    )
}
