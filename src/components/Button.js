import React from 'react'
import PropTypes from 'prop-types';

const Button = ({value}) => {
  return (
    <button type='button' className='py-1 px-4 bg-deepBlue rounded-sm font-light w-full text-center hover:bg-yellow-500 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200'>{ value}</button>
  )
}
// props validation should be propTypes
Button.propTypes = {
    value: PropTypes.string.isRequired,
};
export default Button
