// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import HotelBooking from "./components/HotelBooking";
// import BookingForm from "./components/BookingForm";
// import LoginForm from "./components/LoginForm";
// import Footer from "./components/Footer";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [selectedHotel, setSelectedHotel] = useState(null);

//   const handleLogin = (username) => {
//     setUser(username);
//   };

//   return (
//     <div className="app">
//       <Navbar />
//       {!user ? (
//         <LoginForm onLogin={handleLogin} />
//       ) : (
//         <>
//           <HotelList onSelectHotel={setSelectedHotel} />
//           <BookingForm selectedHotel={selectedHotel} />
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default App;

// App.js
import './styles/styles.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HotelBooking from "./components/HotelBooking";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import { Alert, AlertDescription } from "./components/ui/alert";

import { UserCheck } from 'lucide-react';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
    setShowLoginSuccess(true);
    setTimeout(() => setShowLoginSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      
      {showLoginSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <Alert className="bg-green-50 border-green-200">
            <UserCheck className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-600">
              Welcome back, {user}!
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="min-h-[calc(100vh-8rem)]">
        {!user ? (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">
                Login to Book Your Stay
              </h2>
              <LoginForm onLogin={handleLogin} />
            </div>
          </div>
        ) : (
          <HotelList />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;