import './main.scss';
import Category from './categories/Category';

export default function Main() {
    return (
        <main>
            <h1 className='cryptid'>CRYPT-ID</h1>
            <h2 className="tagline">a place for believers, theorists, and those who have seen the unexplainable....</h2>
            <Category />
            {/* <div className='fonts'>
                <p className='title'>title</p>
                <p className='body'>body</p>
                <p className='sketchy'>sketchy</p>
                <p className='other'>other</p>
            </div> */}
        </main>
    )
}
