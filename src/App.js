import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

const setTheme = () => {  
  try {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
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
      </div>
  );
}

export default App;
