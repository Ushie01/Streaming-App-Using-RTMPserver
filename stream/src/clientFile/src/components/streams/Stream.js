import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchStream } from '../../actions';
import back from '../assets/back.png';
import love from '../assets/love.png';
import gray from '../assets/gray.jpg';
import playbutton from '../assets/playbutton.png';
import camera from '../assets/camera.png';
import play2 from '../assets/play2.png';
// import stream from './stream.css';


const Stream = ({stream}) => {
  const { id } = useParams();
  useEffect(() => {
    fetchStream(id);
  }, [id]);


  return (
    <div className='flex flex-col md:hidden'>
      <div className='p-3 bg-black rounded-t-sm w-auto rounded-md'>
        <div className='flex flex-row items-center justify-center space-x-64 mx-auto rounded-sm'>
          <div className=' flex flex-row items-center space-x-20'>
            <div className='flex flex-row items-center justify-center space-x-2'>
              <Link to='/'>
                <img
                src={back}
                alt={back}
                className="w-6 h-4"
                />
              </Link>
              <p className='text-white'>Back</p>
            </div>
          </div>
          <img
            src={love}
            alt={love}
            className="w-6 h-6"
          />
        </div>
      </div>

      <div className='relative flex flex-row h-screen mt-5 items-center justify-center'>
        <img
          src={gray}
          alt={gray}
          className='absolute items-center justify-center rounded-md h-screen w-full'
        />
        <Link to={`streams/${stream.id}`} className='h-32 w-32 z-20 absolute opacity-80'>
          <img
            src={playbutton}
            alt={playbutton}
          />
        </Link>
        <p className='absolute text-5xl text-white text-center opacity-50'>{stream.title}</p>
        <div className='absolute flex flex-row mt-48 items-center justify-center text-md te space-x-3  '>
          <span className='bg-gray-200 rounded p-1'>2022</span>
          <span className='bg-gray-200 rounded p-1'>12+</span>
          <img
            src={camera}
            alt={camera}
            className="h-9 w-16"
          />
        </div>
        <div className='items-center justify-center mb-10 w-full rounded absolute mt-72 text-white'>
          <ul className='flex items-center justify-center space-y-8 space-x-3 p-4'>
            <li className='mt-8'>* 01:50h</li>
            <li>* Romance</li>
            <li>* Sci-fi</li>
            <li>* Drama</li>
          </ul>
        </div>
        <button className='absolute h-12 w-80 border-2 mt-96 border-white'>
          <Link to={`streams/${stream.id}`}
                className=' text-center space-x-3 flex flex-row items-center justify-center'
            >
            <img
              src={play2}
              alt={play2}
              className="h-6 w-6"
            />
            <p className='text-white text-2xl font-sans font-bold'>Go Live</p>
          </Link>   
        </button>
        <p className='absolute text-center text-xl text-white streamDes'>{stream.description}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream})(Stream);
