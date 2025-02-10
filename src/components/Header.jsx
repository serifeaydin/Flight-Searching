import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flight Search</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">
                Flights
              </a>
            </li>
            <li>
              <a href="hotels" className="hover:underline">
                Hotels
              </a>
            </li>
            <li>
              <a href="carrental" className="hover:underline">
                Car Rentals
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
