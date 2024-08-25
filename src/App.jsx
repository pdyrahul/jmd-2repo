import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ReviewCard from './components/ReviewCard';
import './App.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import NavTabs from './components/NavTabs';
import Cta from './components/Cta';
import UsefulLinks from './components/UsefulLinks';



function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ReviewCard />
      <NavTabs />
      <Cta/>
      <UsefulLinks/>
      <Footer />
    </div>
  );
}

export default App;
