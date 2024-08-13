import React from 'react';
import PropTypes from 'prop-types';

function Card({ item, handleClick }) {
  const { name, profession, image } = item;
  
  return (
    <div className='w-60 bg-cyan-300 rounded-md'>
      <div>
        <img className='w-full object-cover rounded-md' src={image} alt="" />
      </div>
      <div className='w-full h-40 mt-5 text-white'>
        <h2 className='text-lg'>{name}</h2>
        <h3>{profession}</h3>
        <button onClick={() => handleClick(item)} className='py-2 px-3 rounded-md bg-blue-500 text-white'>
          Add Friend
        </button>
      </div>
    </div>
  );
}

// Prop validation
Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
