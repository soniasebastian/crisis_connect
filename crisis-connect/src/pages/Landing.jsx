import { Link } from 'react-router-dom'


export default function Landing() {
    return(
        <div className="landing">
          
            <Link ><button className='ineedhelp'>I need help</button></Link>
            <Link to='/icanhelp' ><button className='icanhelp'>I can help</button></Link>
            <Link><button className='emergency'>Emergency</button></Link>
            

        </div>
    )
}