import React, { useState } from 'react';
import './App.css'; // Import custom CSS for additional styling

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section className={`section-content home`}>
            <h1>WELCOME TO K.P.LADIES AND GENTS TAILORS SHOP</h1>
            <p>“A needle and thread in the right hands can weave the fabric of dreams.”</p>
          </section>
        );
      case 'services':
        return (
          <section className={`section-content services`}>
            <h2>Services:</h2>
            <h5><p>For Groom and Bride special designs</p>
            <p>School Uniforms</p>
            <p>Based on customer order we accept bulk orders and Home delivery also,..............</p></h5>
          </section>
        );
        case 'gallery':
          return (
            <section className={`section-content gallery`}>
              <h2>Gallery:</h2>
              <div className="video-container">
                <video controls autoPlay loop>
                  <source src='C:/Users/HP LAPY/Videos/stiching.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          );
        
      case 'about':
        return (
          <section className={`section-content about`}>
            <h2>About:</h2>
            We are stitching multiple styles and designs on the ladies' and gents' clothes. 
            We can complete within the order time. Please visit our store.
          </section>
        );
      case 'contact':
        return (
          <section className={`section-content contact`}>
            <h2>Contact:</h2>
            <p>+91-79816887716
           <p><h1>Address:</h1><h4>R.S Road, opp. : Vijaya Durga Bar, Industrial Area, Nandyala, Andhra Pradesh 518501</h4></p>
            <a href="https://maps.app.goo.gl/LPgTZxCzqZT991mx9" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </p>
            <h6>
            <p>Monday    :9 am–9 pm</p>
            <p>Tuesday   :9 am–9 pm</p>
            <p>Wednesday :9 am–9 pm</p>
            <p>Thursday  :9 am–9 pm</p>
            <p>Friday    :9 am–9 pm</p>
            <p>Saturday  :9 am–9 pm</p>
            <p>Sunday    :9 am–9 pm</p></h6> 
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#services" onClick={() => setActiveSection('services')}>Services</a></li>
            <li><a href="#gallery" onClick={() => setActiveSection('gallery')}>Gallery</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {renderSection()}
      </main>

      <footer>
        <p>&copy; K.Pullaiah</p>
      </footer>
    </div>
  );
}

export default App;
