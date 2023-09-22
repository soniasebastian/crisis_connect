import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";


export default function Landing() {
    return(
        <div className="landing">

            <Link to='/ineedhelp'><button className='ineedhelp'>I need help</button></Link>
            <Link to='/icanhelp' ><button className='icanhelp'>I can help</button></Link>
            <Popup trigger = {<button className='emergency'> Emergency </button>}
            position="right center">
                <div className='popup-content'>
                <div>Are you in Emergency?</div>
                <Link to='/userinforeg'><button>I need Help </button></Link>
                </div>
            </Popup>

        </div>
    )
}