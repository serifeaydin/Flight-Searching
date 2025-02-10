import React from 'react';
import { useLocation } from 'react-router-dom';
import FlightCard from './FlightCard';

const FlightResults = () => {
  const { state } = useLocation();
  const flights = state?.flights || []; 
  console.log('Received flights:', JSON.stringify(state?.flights, null, 2));


  return (
    <div>
     <FlightCard/>
    </div>
  );
};

export default FlightResults;
