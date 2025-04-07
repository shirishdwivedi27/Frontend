import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://img.freepik.com/free-photo/modern-student-dormitory-room_1262-12375.jpg",
      title: "Welcome to HMS",
      subtitle: "Modern Hostel Living",
      description: "Experience Premium Accommodation & Services"
    },
    {
      image: "https://img.freepik.com/free-photo/modern-student-lounge-area_1262-12376.jpg",
      title: "Community Spaces",
      subtitle: "Connect & Grow",
      description: "Modern lounges and study areas"
    },
    {
      image: "https://img.freepik.com/free-photo/student-cafeteria_1262-12377.jpg",
      title: "Premium Facilities",
      subtitle: "Live Comfortably",
      description: "State-of-the-art amenities for your comfort"
    }
  ];

  const features = [
    {
      icon: "fas fa-bed",
      title: "Luxury Rooms",
      description: "Fully furnished rooms with modern amenities",
      color: "#4158D0",
      gradient: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
    },
    {
      icon: "fas fa-utensils",
      title: "Dining Services",
      description: "Healthy and delicious meal options",
      color: "#0093E9",
      gradient: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    },
    {
      icon: "fas fa-wifi",
      title: "High-Speed WiFi",
      description: "24/7 internet connectivity",
      color: "#8EC5FC",
      gradient: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security",
      description: "Advanced security systems",
      color: "#FF3CAC",
      gradient: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
    }
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "200", label: "Rooms" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ultra-modern-landing">
      {/* Floating Navigation */}
      <nav className="floating-nav">
        <div className="nav-brand">
          <i className="fas fa-hotel"></i>
          <span>HMS</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#rooms">Rooms</a>
          <a href="#about">About</a>
          <button onClick={() => navigate('/login')} className="glass-btn">
            Login <i className="fas fa-arrow-right"></i>
          </button>
          <button onClick={() => navigate('/signup')} className="neon-btn">
            Register <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="gradient-text">Next-Gen Hostel Management</h1>
            <p className="hero-subtitle">Experience modern living with smart management</p>
            <div className="hero-buttons">
              <button 
                className="primary-3d-btn"
                onClick={() => navigate('/signup')}
              >
                Get Started
                <span className="btn-shine"></span>
              </button>
              <button 
                className="outline-glow-btn"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <div className="hero-image-slider">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})`}}
              >
                <div className="slide-overlay">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <h2 className="section-title">Premium Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card glass-effect"
              style={{ background: feature.gradient }}
            >
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section glass-morphism">
        <div className="cta-content">
          <h2>Ready to Experience Better Living?</h2>
          <p>Join our community of satisfied residents</p>
          <button 
            className="floating-btn"
            onClick={() => navigate('/signup')}
          >
            Book Your Room Now
            <div className="btn-particles"></div>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> contact@hms.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Hostel Street, City</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="/login">Login</a>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hostel Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;