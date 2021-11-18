import './intro.scss';
import Creatures from '../../images/creature.png'

export default function Intro() {
    return  (
        <div className='intro-block'>
            <img src={Creatures} className='creatures' alt='an alien, mothman, and a ghost'/>
            <h1 className='cryptid'>CRYPT-ID</h1>
        </div>
    )
}
