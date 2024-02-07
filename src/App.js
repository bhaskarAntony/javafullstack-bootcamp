import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import FreeRegistration from './components/FreeRegistration';
import Scroll from './components/Scroll';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('G-JVNG3G2GY2');


function App() {

  useEffect(() => {
    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    // Track pageview with UTM parameters
    ReactGA.pageview(window.location.pathname + window.location.search, [], {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });
  }, []);
  return (
    <div className="App">
      {/* <Scroll/> */}
     <BrowserRouter>
     <Header/>
      <ToastContainer autoClose={4000} position='top-right' />
      <Home/>
      {/* <FreeRegistration/> */}
      <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
