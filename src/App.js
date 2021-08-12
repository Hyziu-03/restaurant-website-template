import ReactDOMServer from 'react-dom/server';
import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import LightTheme from './components/themes/LightTheme';
import DarkTheme from './components/themes/DarkTheme';

let theme = 'dark';
let placeholder = document.getElementById('theme-container');

const detectTheme = (theme) => {
  if(theme !== 'dark') {
    placeholder.innerHTML = ReactDOMServer.renderToString(<LightTheme />);
  } else {
    placeholder.innerHTML = ReactDOMServer.renderToString(<DarkTheme />);
  }
}

function App() {
  return (
      <div id="container" onLoad={detectTheme}>
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
