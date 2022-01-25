import './main.scss';
import { Outlet } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

export default function Main(props:any) {
    const {home, setHome} = props;
    const location = useLocation();
    const isHome = location.pathname==='/' ? 'homepage cryptid' : 'cryptid';

    return (
        <main className='main'>
            {/* toggle className 'homepage' on h1 and h2 elements for  homepage display*/}
            <Link to='/' >
                {/* TODO: onClick={() => setHome(true)} add to below when setHome is working */}
                <h1 className={isHome}>CRYPT-ID</h1></Link >
            <Outlet />
        </main>
    )
}
