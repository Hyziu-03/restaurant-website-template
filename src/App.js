import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

const loadStylesheet = () => {
  let theme = localStorage.getItem('theme');
  let styleElement = document.getElementById('stylesheet-container');
  theme === 'dark' ? styleElement.innerHTML = "html { background: #303030 !important; } header { background: #303030 !important; border-color: #f8f8f8 !important; } .heading { color: #f8f8f8 !important; } .heading:hover, .heading:focus-visible { text-shadow: 0 4px 4px #f8f8f8 !important; } .heading:active { color: #37e21c !important; } .theme-toggler { background: #f8f8f8 !important; color: #303030 !important; } .theme-toggler:hover { background: #37e21c !important; } .theme-toggler:active { background: #192c6c !important; } .landing-page { color: white !important; } .browse-our-menu:active, .see-customer-reviews:active { background: #192c6c !important; } .browse-our-menu { background: #f8f8f8 !important; color: #303030 !important; } .see-customer-reviews { background: #303030 !important; color: #f8f8f8 !important; -webkit-box-shadow: none !important; box-shadow: none !important; border-radius: 40px !important; border: 1px solid #f8f8f8 !important; } .customer-reviews, .footer { color: #f8f8f8 !important; background: #192c6c !important; } .contact-us { background: #303030 !important; color: #f8f8f8 !important; border-color: #f8f8f8 !important; } .contact-us:active { background: #192c6c !important; }" : styleElement.innerHTML = '';
}

const setTheme = () => {  
  try {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
    loadStylesheet();
  } catch (exception) {
    throw new Error (exception);
  }
}

function App() {
  return (
      <div id="container" onLoad={setTheme}>
        <Header />
        <main>
          <LandingPage />
          <CustomerReviews />
        </main>
        <Footer />
      </div>
  );
}

export default App;
