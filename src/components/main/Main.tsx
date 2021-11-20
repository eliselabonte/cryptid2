import './main.scss';
import Homepage from './homepage/Homepage';
import Authentication from './auth/Authentication';

export default function Main() {
    return (
        <main>
            <h1 className='cryptid'>CRYPT-ID</h1>
            <h2 className="tagline">a place for believers, theorists, and those who have seen the unexplainable....</h2>
            <Homepage />
            {/* <div className='fonts'>
                <p className='title'>title</p>
                <p className='body'>body</p>
                <p className='sketchy'>sketchy</p>
                <p className='other'>other</p>
            </div> */}
        </main>
    )
}
