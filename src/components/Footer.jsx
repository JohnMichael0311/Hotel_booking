// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We provide the best hotel booking experience with exclusive deals and top-rated properties.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Search Hotels</li>
              <li>Special Offers</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@hotelbooking.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Booking Street</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2024 Hotel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;