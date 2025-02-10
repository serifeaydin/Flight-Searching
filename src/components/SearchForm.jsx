import React, { useState } from "react";
import axios from "axios";

const SearchForm = ({
  tripType,
  setTripType,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
  originSkyId,
  setFrom,
  destinationSkyId,
  setTo,
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  cabinClass,
  setCabinClass,
  onSearch, // handleSearch fonksiyonunu prop olarak alıyoruz
}) => {
  return (
    <div>
      {/* Trip Type Selection */}
      <div className="mb-4">
        <label className="block mb-2">Trip Type</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <option value="one-way">One Way</option>
          <option value="round-trip">Round Trip</option>
        </select>
      </div>

      {/* Departure Date */}
      <div className="mb-4">
        <label className="block mb-2">Departure Date</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>

      {/* Return Date (only for round-trip) */}
      {tripType === "round-trip" && (
        <div className="mb-4">
          <label className="block mb-2">Return Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      )}

      {/* From */}
      <div className="mb-4">
        <label className="block mb-2">From</label>
        <input
          type="text"
          placeholder="From"
          className="w-full p-2 border border-gray-300 rounded"
          value={originSkyId}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      {/* To */}
      <div className="mb-4">
        <label className="block mb-2">To</label>
        <input
          type="text"
          placeholder="To"
          className="w-full p-2 border border-gray-300 rounded"
          value={destinationSkyId}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      {/* Passenger Count */}
      <div className="mb-4 flex space-x-4">
        <div className="w-1/3">
          <label className="block mb-2">Adults</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
          />
        </div>
        <div className="w-1/3">
          <label className="block mb-2">Children</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
          />
        </div>
        <div className="w-1/3">
          <label className="block mb-2">Infants</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={infants}
            onChange={(e) => setInfants(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {/* Cabin Class */}
      <div className="mb-4">
        <label className="block mb-2">Cabin Class</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
        >
          <option value="economy">Economy</option>
          <option value="premium-economy">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first-class">First Class</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="mb-4">
        <button
          onClick={onSearch} // handleSearch fonksiyonunu burada çağırıyoruz
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
