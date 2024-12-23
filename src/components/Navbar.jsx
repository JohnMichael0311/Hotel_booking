// components/Navbar.js
import React from "react";
import { User } from 'lucide-react';

const Navbar = ({ user }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">
            Hotel Booking
          </div>
          
          {user && (
            <div className="flex items-center gap-2 text-gray-600">
              <User size={20} />
              <span>{user}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;