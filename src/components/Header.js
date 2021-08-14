const changeTheme = () => {
    try {
        localStorage.getItem('theme') === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    } catch (exception) {
        throw new Error(exception);
    }
}

const Header = () => {
    return (
        <header className='header' tabIndex="0">
            <a href="index.html" className="heading"><h1>Your Name</h1></a>
            <section className="buttons">
                <button className="theme-toggler" tabIndex="0" onClick={changeTheme}>
                    <i className="fas fa-sun"></i>
                </button>
            </section>
        </header>
    )
}

export default Header;
