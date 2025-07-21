import React from 'react'
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Card = ({ image, alt, skill, summary, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service-purchase/${index}`);
  };

  return (
    <div 
      className="md:max-w-md rounded-sm overflow-hidden shadow-lg bg-gray-800 dark:bg-gray-700 md:h-[430px] text-deepBlue dark:text-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <img
        className="w-full"  
        src={image}
        alt={alt}
      />
      <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-deepBlue dark:text-blue-400">{skill}</div>
            <p className="text-gray-700 dark:text-gray-300 text-base text-[13px]">
              {summary}
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
                Book Now
              </button>
            </div>
      </div>
    </div>
  );
};
// props validation should be propTypes
Card.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};
export default Card;
