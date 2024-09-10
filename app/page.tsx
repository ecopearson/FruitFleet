import React from 'react';
import Navbar from '../components/common/Navbar'; // Assuming you have a Navbar component
import Image from 'next/image'; // Add Image import for pictures
import Link from 'next/link';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-green-100 to-green-50">

      
      {/* Introduction Section */}
      <section className="w-full max-w-5xl p-8 text-center bg-green-300">
        <h1 className="text-6xl font-extrabold text-green-800 mb-4">Cut your grocery bill and your food waste + EAT FRUITS!!!!!!!!!!!</h1>
        <p className="text-2xl text-gray-700 mb-6">Time to eat healthy and stop being a lazy bum</p>
        <button className="bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
          GET STARTED
        </button>
      </section>


{/* Subscription Plans */}
<section className="w-full max-w-4xl p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Starter Box</h3>
            <p className="text-gray-600 mb-4">Perfect for singles or couples. Get a mix of 5 seasonal fruits every week.</p>
            <span className="text-2xl font-bold mb-4">$15/week</span>
            <Link href="/subscribe" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Subscribe
            </Link>
          </div>
          {/* Plan 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Family Box</h3>
            <p className="text-gray-600 mb-4">Ideal for families. Includes 10 varieties of fresh fruits each week.</p>
            <span className="text-2xl font-bold mb-4">$30/week</span>
            <Link href="/subscribe" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Subscribe
            </Link>
          </div>
          {/* Plan 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Premium Box</h3>
            <p className="text-gray-600 mb-4">For fruit lovers! Get a premium selection of 15+ fruits weekly.</p>
            <span className="text-2xl font-bold mb-4">$50/week</span>
            <Link href="/subscribe" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Subscribe
            </Link>
          </div>
        </div>
      </section>



      {/* Section 1: Helping to Make Affordable Fruits Convenient */}
      <section className="w-full max-w-5xl p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Affordable Fruits, Delivered to Your Doorstep</h2>
        <p className="text-lg text-gray-600 mb-6">
          At Fruit Fleet, we believe everyone deserves access to fresh, healthy fruits without breaking the bank. Our subscription service is designed to bring affordable, high-quality fruits directly to your home, saving you time and money.
        </p>
        <Image
          src="/placeholder1.jpg" // Replace with actual image paths
          alt="Affordable Fruits"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 2: Helping to Prevent Wastage of Fruits */}
      <section className="w-full max-w-5xl p-8 text-center bg-green-200">
        <h2 className="text-4xl font-bold mb-4 text-green-800">The Ugly Truth of Food Wastage</h2>
        <p className="text-lg text-gray-700 mb-6">
          Millions of tons of perfectly good fruits are wasted every year simply because they don’t look perfect. At Fruit Fleet, we’re on a mission to change that by sourcing "ugly" but delicious fruits, helping to reduce food waste.
        </p>
        <Image
          src="/placeholder2.jpg" // Replace with actual image paths
          alt="Preventing Wastage"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 3: Types of Fruits to Expect */}
      <section className="w-full max-w-5xl p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Discover a World of Fresh Fruits</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our subscription boxes include a rotating selection of fresh, seasonal fruits such as apples, durians, watermelons, berries, and more. Expect the unexpected and fall in love with fruits all over again!
        </p>
        <Image
          src="/placeholder3.jpg" // Replace with actual image paths
          alt="Types of Fruits"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 4: Our Solution to These Issues */}
      <section className="w-full max-w-5xl p-8 text-center bg-green-200">
        <h2 className="text-4xl font-bold mb-4 text-green-800">Our Solution to Fruit Affordability and Waste</h2>
        <p className="text-lg text-gray-700 mb-6">
          We connect consumers with farmers and suppliers to ensure that no fruit goes to waste. Our business model supports local growers and tackles the larger issue of food wastage by delivering fruits that are fresh, affordable, and “perfectly imperfect.”
        </p>
        <Image
          src="/placeholder4.jpg" // Replace with actual image paths
          alt="Our Solution"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 5: Follow Us on Social Media */}
      <section className="w-full max-w-5xl p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Stay Connected with Fruit Fleet</h2>
        <p className="text-lg text-gray-600 mb-6">
          Follow us on social media to stay updated on the latest fruits, special offers, and tips for reducing food waste. Let’s build a community that loves fruits as much as we do!
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          <a href="#" className="text-blue-500 hover:underline">Twitter</a>
          <a href="#" className="text-blue-500 hover:underline">TikTok</a>
        </div>
      </section>
    </div>
  );
}
