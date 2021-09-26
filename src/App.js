import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import Menu from './components/modal-boxes/Menu';
import Contact from './components/modal-boxes/Contact';

const preloadImage = (url) => {
  try {
    let image = new Image();
    image.src = url;
  } catch (exception) {
    throw new Error(exception);
  }
}

const loadApp = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('The app has been loaded successfully');
    }, 750);
  });
}

async function awaitContent() {
  window.location.hash = '';
  document.body.style.overflow = 'hidden';
  const result = await loadApp();
  console.log(result);
  document.body.style.overflow = 'visible';
}

function App() {
  preloadImage('../src/img/kate-swift.jpg');
  preloadImage('../src/img/matt-smith.jpg');

  awaitContent();

  return (
      <div className='wrapper'>
        <Router>
          <div id='container'>
            <section id='loader' className='loader'>
                <div className='lds-default'> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> </div>
            </section>
            <Header />
            <main>
              <LandingPage />
              <CustomerReviews />
            </main>
            <Footer />
          </div>
          <div id='placeholder'><Menu /> <Contact /></div>
        </Router>
      </div>
  );
}

export default App;
