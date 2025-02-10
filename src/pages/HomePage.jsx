import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import Flight from "../assets/flight.jpg";
import Footer from "../components/Footer";



const FlightSearch = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSearch = async () => {
    if (!from || !to || !departureDate || (tripType === "round-trip" && !returnDate)) {
      setError("Please fill in all required fields.");
      return;
    }
  
    setError("");
    setLoading(true);


    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        originSkyId: from, 
        destinationSkyId: to, 
        originEntityId: '27544008',
        destinationEntityId: '27537542',
        date: departureDate, 
        cabinClass: cabinClass.toLowerCase(),
        adults: adults,
        sortBy: 'best',
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US'
      },
      headers: {
        'x-rapidapi-key': 'fbea58d84amshb01217efb7d918cp18ac40jsnedc61a574571',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log("API Yanıtı: ", response.data); 
  
      
      if (response.data?.status && response.data?.data?.itineraries?.length > 0) {
        navigate('/results', {
          state: { flights: response.data.data.itineraries }
        });
      } else {
        setError("No flights found matching your search criteria..");
      }
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setError("Error fetching flight data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <Header/>
    <div className="flex justify-center mb-4 mt-4">
    <img src={Flight}></img>
    </div>
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
    
  
      <SearchForm
        tripType={tripType}
        setTripType={setTripType}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        infants={infants}
        setInfants={setInfants}
        cabinClass={cabinClass}
        setCabinClass={setCabinClass}
        onSearch={handleSearch}
      />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {loading && <p className="mt-4 text-blue-500">Downloading...</p>}
     
    </div>
    <Footer/>
    </div>
  );
};

export default FlightSearch;
