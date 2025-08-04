import React, { useState, useEffect } from 'react';
import { FaCar, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarsCard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://tc-shuvo-rent-a-car-data.vercel.app/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            {/* Car Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full object-cover rounded-md mb-4"
            />
            <hr className='mb-3 border-gray-400'></hr>

            {/* Car Name */}
            <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>

            {/* Car Info (Seats and Model) */}
            <div className="flex justify-between items-center text-gray-600 mt-2 gap-4">
              <div className="flex items-center">
                <FaCar className="text-gray-500 mr-1" />
                <span>{car.seats} Seats</span>
              </div>
              <div className="flex items-center">
                <FaCogs className="text-gray-500 mr-1" />
                <span>{car.model}</span>
              </div>
            </div>

            {/* Rates List */}
            <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li><strong>Monthly Rent:</strong> {car.rates?.monthly_rent}</li>
              <li><strong>Daily Rent:</strong> {car.rates?.daily_rent}</li>
              <li><strong>Fuel/km:</strong> {car.rates?.fuel_per_kilometer}</li>
              <li><strong>Lunch:</strong> {car.rates?.lunch}</li>
              <li><strong>Dinner:</strong> {car.rates?.dinner}</li>
              <li>
                <strong>Overtime/hour:</strong> {car.rates?.overtime_per_hour?.rate} 
                {' '} (After {car.rates?.overtime_per_hour?.applicable_after})
              </li>
              <li><strong>Tour Allowance/night:</strong> {car.rates?.tour_allowance_per_night}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsCard;
