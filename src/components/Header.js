const refresh = () => {
    window.location.reload(true);
    window.location.hash = '#';
}

const Header = () => {
    return (
        <header className='header'>
            <span className='heading' onClick={refresh}><h1>Your Name</h1></span>
        </header>
    )
}

export default Header;
