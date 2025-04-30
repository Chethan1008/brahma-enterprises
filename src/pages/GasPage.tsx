import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './BrandIntroduction.module.css';

const BrandIntroduction = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Toggle form visibility
  const toggleForm = () => setIsFormOpen(!isFormOpen);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const sliderImages = [
    { id: 1, src: '/images/gas-service.jpg', alt: 'Gas Delivery Truck' },
    { id: 2, src: '/images/gas-service.jpg', alt: 'Gas Cylinder Warehouse' },
    { id: 3, src: '/images/gas-service.jpg', alt: 'Commercial Kitchen' },
  ];

  const clientLogos = [
    { id: 1, src: '/images/gas-service.jpg', alt: 'Restaurant Chain' },
    { id: 2, src: '/images/gas-service.jpg', alt: 'Hotel Group' },
    { id: 3, src: '/images/gas-service.jpg', alt: 'Catering Company' },
    { id: 4, src: '/images/gas-service.jpg', alt: 'Industrial Kitchen' },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={toggleForm}>×</button>
            <h2>Contact Gas Point</h2>
            <form 
              className={styles.contactForm}
              action="https://formsubmit.co/OWNER_EMAIL@example.com" 
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Contact Request!" />
              <input type="hidden" name="_template" value="table" />
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Gas Point Commercial Gas Agency</h1>
          <p className={styles.heroSubtitle}>
            Reliable, safe, and efficient gas solutions for restaurants, hotels, and industries
          </p>
          <button className={styles.ctaButton} onClick={toggleForm}>Get a Free Quote</button>
        </div>
      </section>

      {/* Image Slider */}
      <section className={styles.sliderSection}>
        <Slider {...sliderSettings} className={styles.slider}>
          {sliderImages.map((image) => (
            <div key={image.id} className={styles.slide}>
              <img src={image.src} alt={image.alt} className={styles.sliderImage} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/images/gas-service.jpg" alt="Delivery" className={styles.serviceImage} />
            </div>
            <h3>Timely Delivery</h3>
            <p>24/7 gas supply with guaranteed on-time delivery</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/images/gas-service.jpg" alt="Safety" className={styles.serviceImage} />
            </div>
            <h3>Safety Certified</h3>
            <p>ISO-certified gas handling and storage</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/images/gas-service.jpg" alt="Support" className={styles.serviceImage} />
            </div>
            <h3>Dedicated Support</h3>
            <p>Personal account manager for every client</p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={styles.trustedBy}>
        <h2 className={styles.sectionTitle}>Trusted By</h2>
        <div className={styles.logoGrid}>
          {clientLogos.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} className={styles.clientLogo} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to experience reliable gas supply?</h2>
        <p>Contact us today for a customized solution</p>
        <button className={styles.ctaButton} onClick={toggleForm}>Contact Our Team</button>
      </section>
    </div>
  );
};

export default BrandIntroduction;