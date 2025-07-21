import React, {useEffect, useState, useRef} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from '../functions/pictures'
import { feedback } from '../functions/customerFeedback'
import Card from '../components/Card';
import Project from '../components/Project';
import Choose from '../components/Choose';
import image from '../functions/bgImage';
import Book from "../components/Book";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [Image, setImage] = useState('')
  const servicesRef = useRef(null);

  const changer = () => {
    const bg = image[Math.floor(Math.random() * image.length)];
    setImage(bg)
  }

  useEffect(() => {
    setInterval(changer, 5000);
  },[])
 
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[60vh] md:h-[620px] w-full flex items-center justify-center">
        <img
          className="h-full w-full bg-image absolute top-0 left-0 right-0 z-0 object-cover"
          src={Image && Image}
          alt="four white ceramic urinal sink"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="py-16 md:py-24 z-10 flex flex-col items-center text-white text-center relative">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold my-4 animate__animated animate__zoomIn">Quality Plumbing at its best</h1>
          <p className="text-base sm:text-lg md:text-2xl mb-3">Best plumbing and maintenance company in America</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full max-w-xs md:max-w-none justify-center items-center">
            <NavLink to="/message">
              <button className="p-3 font-bold px-8 border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 active:border-blue-800 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">CONTACT US</button>
            </NavLink>
            <button
              className="p-3 font-bold px-8 border-2 border-white bg-blue-transparent rounded-md hover:bg-blue-800 hover:border-blue-800 active:bg-blue-900 active:border-blue-900 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              onClick={() => servicesRef.current && servicesRef.current.scrollIntoView({ behavior: 'smooth' })}
            >
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-50 bottom-0 left-0 right-0 z-50 hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,165.3C672,181,768,235,864,266.7C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div ref={servicesRef} className="bg-white dark:bg-gray-800 shadow md:mx-5 rounded-md py-8 my-5 transition-colors duration-300">
        <h2 className="text-blue-500 font-bold text-[30px] text-center">Plumbing Repairing Service</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-center py-2" style={{ fontSize: '16px' }}>
          If you need any help with your plumbing, give us a call at kasbass Plumbing. We offer variety of
          plumbing services in kasbass enterprises
        </p>
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {service.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            alt={data.alt}
            skill={data.skill}
            summary={data.summary}
            index={index}
          />
        ))}
          </div>
        </div>
      </div>
      <div className="my-8 justify-center items-center bg-white dark:bg-gray-800 shadow pt-10 pb-5 md:mx-5 rounded-md transition-colors duration-300">
        <Project />
      </div>
      <div>
        <Book />
      </div>
      <div>
        <Choose />
      </div>
      <div className="py-5 bg-white shadow rounded-md my-5 md:mx-5 px-3 md:px-0">
        <div className='text-center flex flex-col space-y-2 my-6'>
          <h2 className="text-zinc-600 font-bold text-[30px]">TESTIMONIALS</h2>
          <p className="font-bold text-[20px] md:text-4xl text-blue-500">What clients say</p>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-zinc-600 py-2">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center bg-white p-10 md:mx-0 rounded-md">
          {feedback.map((feed, index) => (
            <Testimonial
            key={index}
            image={feed.image}
            alt={feed.alt}
            message={feed.message}
            name={feed.name}
            prof={feed.prof}
          />
          ))}
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default Home;
