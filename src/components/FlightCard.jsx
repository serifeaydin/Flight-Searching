import React from 'react';
import { useLocation } from 'react-router-dom';

const FlightCard = ({ flight }) => {
  const { state } = useLocation();
  const flights = state?.flights || []; 
  console.log('Received flights:', JSON.stringify(state?.flights, null, 2));
    return (
      <div>
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Flight Results</h2>
        {flights.map((flight, index) => (
          <div key={index} className="border-4 p-4 mb-4 rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
           
              <div className="text-2xl flex font-semibold">
                <h>Price:</h>
                <p className='text-red-700'>{flight.price.formatted}</p>
                </div>
              {/* Company */}
            
              <div className="flex items-center">
                <img
                  src={flight.legs[0].carriers.marketing[0].logoUrl}
                  alt={flight.legs[0].carriers.marketing[0].name}
                  className="w-12 h-12 mr-2"
                />
                <span>{flight.legs[0].carriers.marketing[0].name}</span>
              </div>
              </div>
  
            {/* Arrival and Departure */}
            <div className='flex justify-items-stretch'>
              <div className='flex'>
                <h3 className="text-lg font-semibold pr-8">Departure:</h3>
                <div className='text-lg text-blue-700 font-bold'>
                  <p>{flight.legs[0].origin.name}</p>
                <p>{flight.legs[0].origin.city}, {flight.legs[0].origin.country}</p>
                </div>
             
              <div className='flex'>
                <h3 className="text-lg font-semibold lg:pl-10  pr-8">Arrival:</h3>
                <div className='text-lg text-blue-700 font-bold'>
                <p>{flight.legs[0].destination.name}</p>
                <p>{flight.legs[0].destination.city}, {flight.legs[0].destination.country}</p>
                </div>
              </div>
           </div>
  </div>
            {/* Times */}
            <div className='flex justify-items-stretch'>
           <div>
              <div className='mb-4 flex'>
                <h3 className="text-lg text-justify font-semibold pr-8">Departure Time:</h3>
                <p className='pr-8 font-bold text-blue-700'>{new Date(flight.legs[0].departure).toLocaleString()}</p>
              </div>
              <div className='mb-4 flex'>
                <h3 className="text-lg font-semibold pr-8">Arrival Time:</h3>
                <p className='pr-8 font-bold text-blue-700'>{new Date(flight.legs[0].arrival).toLocaleString()}</p>
              </div>
         </div>
<div className=''>
            {/* Flight Duration */}
            <div className="mb-4 flex">
              <h3 className="text-lg font-semibold pr-8">Flight Duration:</h3>
              <p className='font-bold text-blue-700'>{Math.floor(flight.legs[0].durationInMinutes / 60)} hours {flight.legs[0].durationInMinutes % 60} minutes</p>
            </div>
  
            {/* Transfer */}
            <div className="mb-4 flex">
              <h3 className="text-lg font-semibold pr-8">Number of Transfer:</h3>
              <p className='font-bold text-blue-700'>{flight.legs[0].stopCount === 0 ? 'Direct Flight' : `${flight.legs[0].stopCount} Connecting Flight`}</p>
            </div>
            </div>
          </div>
          </div>
        ))}
     </div>
    )
};

export default FlightCard;
