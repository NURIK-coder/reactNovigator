import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <div >
            <nav className='flex justify-between text-center flex-row m-[30px] p-5 rounded-[20px] border-2 border-solid border-[black]'>
                <a><Link to='/home'>Main Page</Link> </a>
                <a><Link to='/about'>About Us</Link> </a>
                <a><Link to='/contacts'>Contacts</Link> </a>
                <a><Link to='/shop'>Game Shop</Link></a> 
            </nav>
        </div>
    )
}
export default Navbar;