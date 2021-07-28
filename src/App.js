import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
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

// $ (1) Dodaj mechanikę do przycisku w stopce.
// $ (2) Dodaj trzy kafelki z feedbackiem.
