import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

function App() {
  return (
      <div id="container">
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
