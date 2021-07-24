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

// $ (1) Napraw błąd związany ze zdarzeniem focus w pliku components/LandingPage.js.
// $ (2) Zdefiniuj responsywnosć całej strony w pliku index.sass.
// $ (3) Zajmij się implementacją skryptów JS reagujących na zdarzenia w dokumencie.
