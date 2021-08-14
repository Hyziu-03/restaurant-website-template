import ReactDOMServer from 'react-dom/server';
import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import LightTheme from './components/themes/LightTheme';
import DarkTheme from './components/themes/DarkTheme';

let container = document.getElementById('container');

const setTheme = () => {
  try {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.getItem('theme') === 'light' ? container.innerHTML += ReactDOMServer.renderToString(<DarkTheme />) : container.innerHTML += ReactDOMServer.renderToString( <LightTheme /> );
    }
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
        <section id='theme-container'></section>
      </div>
  );
}

export default App;
