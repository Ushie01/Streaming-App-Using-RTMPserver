import React from 'react';
import { Link } from 'react-router-dom';
import Success from './assets/successfull.gif';
import Arrow from './assets/arrow.png';

const Successful = () => {
  return (
    <div>
        <div className='relative'>
            <Link to='/' className="md:h-32 md:w-52 h-16 w-24 animate-bounce absolute z-10 left-5"><img src={Arrow} alt={Arrow} /></Link>
            <img src={Success} alt={Success} className="h-screen w-screen relative" />
        </div>
    </div>
  )
}

export default Successful
