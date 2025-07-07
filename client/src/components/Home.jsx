import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar
      gsap.from('.nav-bar', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Hero Section
      gsap.from('.hero-section', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Feature cards
      gsap.utils.toArray('.feature-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      // CTA
      gsap.from('.cta-section', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
      });

      // Footer
      gsap.from('.footer-section', {
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-green-50 to-white min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="nav-bar flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600">Shery SplitWise</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <a href="#features" className="hover:text-green-600">Features</a>
          <Link to="/login" className="hover:text-green-600">Login</Link>
          <Link to="/signup" className="hover:text-green-600">Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Split Bills Easily with Friends
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8">
          No more confusion over who paid what. Track, split, and settle expenses in just a few taps.
        </p>
        <Link to="/signup" className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 text-lg">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-16 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-14 text-gray-800">Features</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="feature-card p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Quick Split</h4>
            <p className="text-gray-600">Split bills in one click with equal or custom shares.</p>
          </div>
          <div className="feature-card p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Group Support</h4>
            <p className="text-gray-600">Create groups for trips, rooms, or events and track shared expenses.</p>
          </div>
          <div className="feature-card p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Smart Settlements</h4>
            <p className="text-gray-600">Automatically calculate who owes whom and how much.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-20 bg-green-100 px-6">
        <h3 className="text-3xl font-bold mb-4 text-green-800">Start Splitting Today</h3>
        <p className="text-gray-700 text-lg mb-8">
          Join thousands of users simplifying their shared expenses with SplitWise Clone.
        </p>
        <Link to="/signup" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-green-700 transition duration-300">
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center py-6 bg-white text-sm text-gray-500">
        © 2025 SplitWise Clone 
      </footer>
    </div>
  );
};

export default Home;
