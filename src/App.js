import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="content-wrapper">
      <div id="container">
        <Header />
        <main>
          <LandingPage />
          <CustomerReviews />
        </main>
        <Footer />
      </div>
      <article id="placeholder"></article>
    </div>
  );
}

export default App;
