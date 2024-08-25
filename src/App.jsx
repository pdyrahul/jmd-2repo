import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ReviewCard from './components/ReviewCard';
import './App.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import NavTabs from './components/NavTabs';
import UsefulLinks from './components/UsefulLinks';
import QuerySection from './components/QuerySection';



function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ReviewCard />
      <NavTabs />
     <QuerySection/>
      <UsefulLinks/>
      <Footer />
    </div>
  );
}

export default App;
