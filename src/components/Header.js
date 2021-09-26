const refresh = () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 500);
    window.scrollTo(0, 0);
}

const Header = () => {
    return (
        <header className='header'>
            <span className='heading' onClick={refresh}><h1>Your Name</h1></span>
        </header>
    )
}

export default Header;
