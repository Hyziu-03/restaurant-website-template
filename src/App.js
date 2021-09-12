import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import Menu from './components/modal-boxes/Menu';
import Contact from './components/modal-boxes/Contact';

// ? const loadStylesheet = () => { let theme = localStorage.getItem('theme'); let styleElement = document.getElementById('stylesheet-container'); theme === 'dark' ? styleElement.innerText = "html { background: #303030 !important; } header { background: #303030 !important; border-color: #f8f8f8 !important; } .heading { color: #f8f8f8 !important; } .heading:hover, .heading:focus-visible { text-shadow: 0 4px 4px #f8f8f8 !important; } .heading:active { color: #37e21c !important; } .theme-toggler { background: #f8f8f8 !important; color: #303030 !important; } .theme-toggler:hover { background: #37e21c !important; } .theme-toggler:active { background: #192c6c !important; } .landing-page { color: white !important; } .browse-our-menu:active, .see-customer-reviews:active { background: #192c6c !important; } .browse-our-menu { background: #f8f8f8 !important; color: #303030 !important; } .see-customer-reviews { background: #303030 !important; color: #f8f8f8 !important; -webkit-box-shadow: none !important; box-shadow: none !important; border-radius: 40px !important; border: 1px solid #f8f8f8 !important; } .customer-reviews, .footer { color: #f8f8f8 !important; background: #192c6c !important; } .contact-us { background: #303030 !important; color: #f8f8f8 !important; border-color: #f8f8f8 !important; } .contact-us:active { background: #192c6c !important; }" : styleElement.innerText = ''; }
// ? const setTheme = () => { try { if (localStorage.getItem('theme') === null) { localStorage.setItem('theme', 'light'); } loadStylesheet(); } catch (exception) { throw new Error (exception); } }

const preloadImage = (url) => {
  try {
    let image = new Image();
    image.src = url;
  } catch (exception) {
    throw new Error (exception);
  }
}

function App() {
  preloadImage('../src/img/kate-swift.jpg');
  preloadImage('../src/img/matt-smith.jpg');

  return (
      <div className="wrapper">
        <Router>
          <div id="container">
            <Header />
            <main>
              <LandingPage />
              <CustomerReviews />
            </main>
            <Footer />
          </div>
          <div id="placeholder"><Menu /> <Contact /></div>
        </Router>
      </div>
  );
}

export default App;

// $ This web app has following bugs: 
// $ Two modal boxes load with the page, that is they are visible for a short period of time before having styles applied,
// $ Tabindexes don't work,
// $ Events aren't getting binded on Menu and Contact components,
// $ An OG image needs to be inserted.

// $ There are also these: 
// $ Page is getting refreshing when closing modal boxes.
// $ Two modal boxes don't show up when the buttons are clicked.

// $ I can solve them with the following updates:
// $ Getting a loader,
// $ Rewriting all tabindexes,
// $ Prebinding given events,
// $ Retaking the OG image.
