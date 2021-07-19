const Header = () => {
    return (
        <header className='header' tabIndex="0">
            <h1 className='heading' tabIndex="0">Your Restaurant Name</h1>
            <section className="buttons">
                <button className="theme-toggler" tabIndex="0">
                    <i class="fas fa-sun"></i>
                </button>
                <nav>
                    <button className="navigation" tabIndex="0">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </nav>
            </section>
        </header>
    )
}

export default Header;
