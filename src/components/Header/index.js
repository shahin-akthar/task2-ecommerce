import {Link} from 'react-router-dom'
import './index.css';

const Header = () => (
    <div className='header-container'>
        <img src='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg' alt='logo' className='header-logo'/>
        <div className='header-container-2'>
          <Link to="/"><p className='header-text'>Home</p></Link>
          <p className='header-text'>Shop</p>
          <p className='header-text'>Contact</p>
        </div>
    </div>
);

export default Header;
