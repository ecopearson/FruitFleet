import React from 'react';
import Navbar from '../components/common/Navbar'; // Assuming you have a Navbar component
import Image from 'next/image'; // Add Image import for pictures
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
     
      {/* Introduction Section */}
      <section className="w-full max-w-6xl p-16 text-center bg-white">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Cut Your Grocery Bill and Your Food Waste</h1>
        <p className="text-xl text-gray-600 mb-8">Time to eat healthy and stop being a lazy bum.</p>
        <Link href="/subscribe">
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>

      {/* Subscription Plans */}
      <section className="w-full max-w-6xl p-16">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Starter Box</h3>
            <p className="text-gray-500 mb-6">Perfect for singles or couples. Get a mix of 5 seasonal fruits every week.</p>
            <span className="text-2xl font-bold mb-6">$15/week</span>
            <Link href="/subscribe">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Subscribe
              </button>
            </Link>
          </div>
          {/* Plan 2 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Family Box</h3>
            <p className="text-gray-500 mb-6">Ideal for families. Includes 10 varieties of fresh fruits each week.</p>
            <span className="text-2xl font-bold mb-6">$30/week</span>
            <Link href="/subscribe">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Subscribe
              </button>
            </Link>
          </div>
          {/* Plan 3 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Premium Box</h3>
            <p className="text-gray-500 mb-6">For fruit lovers! Get a premium selection of 15+ fruits weekly.</p>
            <span className="text-2xl font-bold mb-6">$50/week</span>
            <Link href="/subscribe">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Helping to Make Affordable Fruits Convenient */}
      <section className="w-full max-w-6xl p-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Affordable Fruits, Delivered to Your Doorstep</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Fruit Fleet, we believe everyone deserves access to fresh, healthy fruits without breaking the bank. Our subscription service is designed to bring affordable, high-quality fruits directly to your home, saving you time and money.
        </p>
        <Image
          src="/placeholder1.jpg" // Replace with actual image paths
          alt="Affordable Fruits"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Section 2: Helping to Prevent Wastage of Fruits */}
      <section className="w-full max-w-6xl p-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">The Ugly Truth of Food Wastage</h2>
        <p className="text-lg text-gray-600 mb-8">
          Millions of tons of perfectly good fruits are wasted every year simply because they don’t look perfect. At Fruit Fleet, we’re on a mission to change that by sourcing "ugly" but delicious fruits, helping to reduce food waste.
        </p>
        <Image
          src="/placeholder2.jpg" // Replace with actual image paths
          alt="Preventing Wastage"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Section 3: Types of Fruits to Expect */}
      <section className="w-full max-w-6xl p-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Discover a World of Fresh Fruits</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our subscription boxes include a rotating selection of fresh, seasonal fruits such as apples, durians, watermelons, berries, and more. Expect the unexpected and fall in love with fruits all over again!
        </p>
        <Image
          src="/placeholder3.jpg" // Replace with actual image paths
          alt="Types of Fruits"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Section 4: Our Solution to These Issues */}
      <section className="w-full max-w-6xl p-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Solution to Fruit Affordability and Waste</h2>
        <p className="text-lg text-gray-600 mb-8">
          We connect consumers with farmers and suppliers to ensure that no fruit goes to waste. Our business model supports local growers and tackles the larger issue of food wastage by delivering fruits that are fresh, affordable, and “perfectly imperfect.”
        </p>
        <Image
          src="/placeholder4.jpg" // Replace with actual image paths
          alt="Our Solution"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Section 5: Follow Us on Social Media */}
      <section className="w-full max-w-6xl p-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Stay Connected with Fruit Fleet</h2>
        <p className="text-lg text-gray-600 mb-8">
          Follow us on social media to stay updated on the latest fruits, special offers, and tips for reducing food waste. Let’s build a community that loves fruits as much as we do!
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">Instagram</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">Facebook</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">Twitter</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">TikTok</a>
        </div>
      </section>
    </div>
  );
}
