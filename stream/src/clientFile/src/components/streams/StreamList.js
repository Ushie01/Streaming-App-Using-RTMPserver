import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import useWindowDimensions from "../../utils/windowsWidthsHights";
import Carousel from "react-elastic-carousel";
import inspiration from "../assets/inspirational.png";
import Header from "../Header";
import playbutton from "../assets/playbutton.png";
import edit from "../assets/edit.png";
import deleteItem from "../assets/delete.png";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.jpg";
import camera from "../assets/camera.png";
import eye from "../assets/eye.png";
import "./stream.css";

const StreamList = ({
  fetchStreams,
  streams,
  currentUserId,
  isSignedIn
}) => {
  // const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const [value, setValue] = useState("");
  const items = [
    "Tech",
    "Polities",
    "Relationship",
    "Education",
    "Religion",
    "Families",
    "Science",
    "History",
  ];

  const images = [image1, image2, image3, image4, image5, image6, image7];

  React.useEffect(() => {
      fetchStreams();
    // return () => setLoading(false);
  }, [fetchStreams]);

  const newStream = streams.map((res, index) => ({
    ...res,
    image:
      images[
        index > 6 ? index - index : Math.floor(Math.random() * (6 - 0 + 1)) + 0
      ],
  }));

  // console.log(newStream);

  return (
    <div>
      <Header />
      <div className="mt-10 hidden md:block">
        <Carousel
          enableAutoPlay={true}
          pagination={false}
          autoPlaySpeed={4000}
          showArrows={true}
          itemsToShow={width <= 430 ? 1 : 1}
          enableMouseSwipe={false}
          easing="cubic-bezier(.28,.91,.62,.08)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          itemPadding={width <= 430 ? [5, 10] : [5, 10]}
        >
          <></>
          {streams.map((streams, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center rounded text-white 
              h-64 w-96 bg-yellow show  bg-gradient-to-r from-green-400 to-blue-500
            hover:from-pink-500 hover:to-yellow-500"
            >
              <div className="w-1/2 m-auto p-20">
                <Link to={`/streams/${streams.id}`}>
                  <img
                    src={playbutton}
                    alt={playbutton}
                    className="h-20 w-20 m-auto rounded-r-full"
                  />
                </Link>
                <div className="items-center justify-center mb-10 w-full rounded">
                  <ul className="flex items-center justify-center space-y-8 space-x-3 p-4">
                    <li className="mt-8">* 01:50h</li>
                    <li>* Romance</li>
                    <li>* Sci-fi</li>
                    <li>* Drama</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-900 md:p-5 w-1/2 space-y-2">
                <p className="text-5xl font-bold font-sans">{streams.title}</p>
                <p className="text-xl font-sans">{streams.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2">
        <select
          name="cars"
          id="cars"
          className="bg-gray-700 mt-10 w-1/12 text-white hidden md:block"
          onClick={(e) => setValue(e.target.value)}
        >
          <option value="category">Category</option>
          <option value="tech">Tech</option>
          <option value="politics">Politics</option>
          <option value="religion">Religion</option>
          <option value="relationship">Relationship</option>
        </select>
        <hr className="border-1 border-gray-700 w-9/12 mt-10" />
        <div className="flex row space-x-3 p-1 bg-gray-700 rounded mt-10">
          {isSignedIn ? (
            <>
              <Link to={`/streams/new`}>
                <span className="text-white">Create Stream</span>
              </Link>
              <img
                src={camera}
                alt={camera}
                className="h-7 w-7 text-green-900"
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <h1 className="text-white font-sans text-2xl m-10 ">{value}</h1>

      <div className="hidden md:block">
        <div className="grid gap-5 grid-cols-4 ml-14">
          {newStream.map((stream, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center 
            justify-center w-56 h-80 text-white border-gray-500"
            >
              {stream.userId === currentUserId && isSignedIn ? (
                <div className="absolute flex flex-row space-x-36 -mt-64">
                  <Link
                    to={`/streams/edit/${stream.id}`}
                    className="z-10 w-6 h-6 left-3 "
                  >
                    <img src={edit} alt={edit} />
                  </Link>
                  <Link
                    to={`/streams/delete/${stream.id}`}
                    className="z-10 w-6 h-6 right-3"
                  >
                    <img src={deleteItem} alt={deleteItem} />
                  </Link>
                </div>
              ) : (
                ""
              )}
              <img
                src={stream.image}
                alt={inspiration}
                className="absolute hover:opacity-60 duration-500 w-56 h-80"
              />
              <Link to={`/streams/${stream.id}`} className="z-10">
                <img src={playbutton} alt={playbutton} className="h-16 w-16" />
              </Link>
              <div
                className="absolute flex flex-col bg-white duration-500 bg-opacity-10 
            hover:-translate-x-6 hover:bg-opacity-5 mt-48 w-52 space-y-2 p-2"
              >
                <p className="hover:text-2xl hover:text-white z-10">
                  {stream.title}
                </p>
                {/* <p className='text-sm'>{stream.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="space-y-3 -mt-20 md:hidden">
        <h1 className="text-2xl font-sans font-bold pl-2">
          Continue Streaming
        </h1>
        <Carousel
          enableAutoPlay={true}
          pagination={false}
          autoPlaySpeed={4000}
          showArrows={false}
          itemsToShow={width <= 430 ? 2 : 2}
          enableMouseSwipe={false}
          easing="cubic-bezier(.28,.91,.62,.08)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          itemPadding={width <= 430 ? [4, 4] : [4, 4]}
        >
          <></>
          {newStream.map((stream, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-4 w-56 
              h-80 rounded-sm text-white border-gray-500"
            >
              {stream.userId === currentUserId && isSignedIn ? (
                <div className="absolute flex flex-row space-x-36 -mt-64">
                  <Link
                    to={`/streams/edit/${stream.id}`}
                    className="z-10 w-6 h-6 left-3 "
                  >
                    <img src={edit} alt={edit} />
                  </Link>
                  <Link
                    to={`/streams/delete/${stream.id}`}
                    className="z-10 w-6 h-6 right-3"
                  >
                    <img src={deleteItem} alt={deleteItem} />
                  </Link>
                </div>
              ) : (
                ""
              )}
              <img
                src={stream.image}
                alt={stream.image}
                className="absolute hover:opacity-60 duration-500 w-56 h-80"
              />
              <Link to={`/streams/${stream.id}`} className="z-10">
                <img src={playbutton} alt={playbutton} className="h-16 w-16" />
              </Link>
              <div
                className="absolute flex flex-col bg-white duration-500 bg-opacity-10 
                hover:-translate-x-6 hover:bg-opacity-5 mt-48 w-52 space-y-2 p-4"
              >
                <p className="hover:text-2xl hover:text-white z-10">
                  {stream.title}
                </p>
                {/* <p className='text-sm'>{stream.description}</p> */}
              </div>
            </div>
          ))}
        </Carousel>
        <h1 className="text-2xl font-sans font-bold pl-2">
          Recommended for you
        </h1>
        <div className="flex flex-row items-center justify-center space-x-2 overflow-x-auto scrollbar-hide">
          {items.map((item, index) => (
            <button
              key={index}
              className="p-2 border-2 text-xl font-sans font-thin rounded-full"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {newStream.map((stream, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center 
            w-52 h-56 mt-20 mb-6  text-white border-gray-500"
            >
              {stream.userId === currentUserId && isSignedIn ? (
                <div className="absolute flex flex-row space-x-36 -mt-64">
                  <Link
                    to={`/streams/edit/${stream.id}`}
                    className="z-10 w-6 h-6 left-3 "
                  >
                    <img src={edit} alt={edit} />
                  </Link>
                  <Link
                    to={`/streams/delete/${stream.id}`}
                    className="z-10 w-6 h-6 right-3"
                  >
                    <img src={deleteItem} alt={deleteItem} />
                  </Link>
                </div>
              ) : (
                ""
              )}
              <img
                src={stream.image}
                alt={stream.image}
                className="absolute hover:opacity-60 duration-500 w-56 h-80"
              />
              <Link to={`/stream/${stream.id}`} className="z-10">
                <img src={eye} alt={eye} className="h-10 w-16" />
              </Link>
              <div
                className="absolute flex flex-col bg-white duration-500 
                bg-opacity-10 hover:-translate-x-6 hover:bg-opacity-5 mt-48 w-52 space-y-2 p-2"
              >
                <p className="hover:text-4xl hover:text-white z-10">
                  {stream.title}
                </p>
                {/* <p className='text-sm'>{stream.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.user?.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
