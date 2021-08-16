const loadStylesheet = () => {
    let theme = localStorage.getItem('theme');
    let styleElement = document.getElementById('stylesheet-container');
    theme === 'dark' ? styleElement.innerHTML = "html { background: #303030 !important; } header { background: #303030 !important; border-color: #f8f8f8 !important; } .heading { color: #f8f8f8 !important; } .heading:hover, .heading:focus-visible { text-shadow: 0 4px 4px #f8f8f8 !important; } .heading:active { color: #37e21c !important; } .theme-toggler { background: #f8f8f8 !important; color: #303030 !important; } .theme-toggler:hover { background: #37e21c !important; } .theme-toggler:active { background: #192c6c !important; } .landing-page { color: white !important; } .browse-our-menu:active, .see-customer-reviews:active { background: #192c6c !important; } .browse-our-menu { background: #f8f8f8 !important; color: #303030 !important; } .see-customer-reviews { background: #303030 !important; color: #f8f8f8 !important; -webkit-box-shadow: none !important; box-shadow: none !important; border-radius: 40px !important; border: 1px solid #f8f8f8 !important; } .customer-reviews, .footer { color: #f8f8f8 !important; background: #192c6c !important; } .contact-us { background: #303030 !important; color: #f8f8f8 !important; border-color: #f8f8f8 !important; } .contact-us:active { background: #192c6c !important; }" : styleElement.innerHTML = '';
}

const changeTheme = () => {
    try {
        localStorage.getItem('theme') === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
        loadStylesheet();
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
