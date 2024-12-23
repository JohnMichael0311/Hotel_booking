// import React, { useEffect, useState } from "react";

// const HotelList = ({ onSelectHotel }) => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     // Fetch hotel data
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((response) => response.json())
//       .then((data) => setHotels(data));
//   }, []);

//   return (
//     <div className="hotel-list">
//       <h2>Available Hotels</h2>
//       <ul>
//         {hotels.map((hotel) => (
//           <li key={hotel.id} onClick={() => onSelectHotel(hotel)}>
//             {hotel.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelList;

import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const HotelBooking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "The Grand Plaza",
      location: "Downtown Business District",
      rating: 4.8,
      price: 299,
      image: "/api/placeholder/400/250",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
      description: "Luxury hotel in the heart of the city with stunning views and premium services.",
      availableRooms: 5
    },
    {
      id: 2,
      name: "Seaside Resort & Spa",
      location: "Coastal Boulevard",
      rating: 4.6,
      price: 399,
      image: "/api/placeholder/400/250",
      amenities: ["Beach Access", "Spa", "Fine Dining", "Ocean View"],
      description: "Beachfront resort offering ultimate relaxation and luxury amenities.",
      availableRooms: 3
    },
    {
      id: 3,
      name: "Urban Boutique Hotel",
      location: "Arts District",
      rating: 4.5,
      price: 199,
      image: "/api/placeholder/400/250",
      amenities: ["Rooftop Bar", "Art Gallery", "Free WiFi", "Cafe"],
      description: "Modern boutique hotel surrounded by galleries, cafes, and nightlife.",
      availableRooms: 8
    }
  ];

  const handleBooking = (hotelId) => {
    setSelectedHotel(hotels.find(h => h.id === hotelId));
  };

  const filteredHotels = hotels.filter(hotel => 
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search hotels by name or location..."
              className="w-full p-4 rounded-lg pl-12 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Quick Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {['All Hotels', 'Luxury', 'Business', 'Resort', 'Boutique'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Hotel Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold">
                    ${hotel.price}
                    <span className="text-sm font-normal text-gray-600">/night</span>
                  </div>
                  <button
                    onClick={() => handleBooking(hotel.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Hotel Booking Modal */}
        {selectedHotel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>{selectedHotel.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Clock className="h-4 w-4" />
                    <AlertDescription>
                      Only {selectedHotel.availableRooms} rooms left at this price!
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="p-2 border rounded"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      className="p-2 border rounded"
                    />
                    <select className="p-2 border rounded">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setSelectedHotel(null)}
                      className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelBooking;