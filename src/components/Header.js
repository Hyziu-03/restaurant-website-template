import {
    Link
} from 'react-router-dom';

const refresh = () => window.location.reload(true);

const Header = () => {
    return (
        <header className='header'>
            <Link to='/home' className='heading' onClick={refresh}><h1>Your Name</h1></Link>
        </header>
    )
}

export default Header;
