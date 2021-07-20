import Header from './components/Header';
import LandingPage  from './components/LandingPage';
import CustomerReviews from './components/CustomerReviews';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <LandingPage />
        <CustomerReviews />
      </main>
    </div>
  );
}

export default App;
