//components
import Link from './Link';
//icons
import logo from './icons/fiii_logo_60x60.png';

function Logo() {
    return (
        <Link href='/' className='logo'>
            <img src={logo} alt='logo'/>
        </Link>
    )
};

export default Logo;