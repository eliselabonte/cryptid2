import './hamburger.scss';

export default function Hamburger(props:any) {
    const navOpen = props.navOpen;
    const setNavOpen = props.setNavOpen;
    return(
        <div onClick={() => setNavOpen(!navOpen)} className={`hamburger ${navOpen ? 'active' : ''}`}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
    )
}
