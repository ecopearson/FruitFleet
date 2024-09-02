// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'; // Import your CSS module
import Navbar from './components/Navbar'; // Import NavBar

const Page = () => {
  return (
    <main className={styles.main}>
      {/* Floating Navigation Bar */}
      <Navbar /> 

      {/* Main Content */}
      <section id="home" className={styles.section}>
        <h1>Welcome to Fruit Delivery</h1>
        <p>Your fresh fruits delivered to your doorstep.</p>
        <Image
          src="/fruit-delivery.svg" // Example image
          alt="Fruit Delivery"
          width={500}
          height={300}
          priority
        />
      </section>

      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        <p>Learn more about our mission and values.</p>
      </section>

      <section id="services" className={styles.section}>
        <h2>Our Services</h2>
        <p>Discover our subscription plans and options.</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information.</p>
      </section>
    </main>
  );
};

export default Page;
