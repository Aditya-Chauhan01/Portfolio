import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt'
import githubpic from '../../assets/githubpic.jpg'

function About() {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-20'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-3 leading-tight'>
            Aditya Chauhan
          </h2>
          {/* skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>I am a </span>
            <Typewriter 
            words={[
              'MERN Developer',
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            />
          </h3>
          {/* about me paragraph */}
          <p className='text-base text-gray-400 mb-10 mt-8 leading-tight'>
            I’m a passionate and detail-oriented MERN Stack Developer with hands-on experience in building modern, responsive web applications using MongoDB, Express, React, and Node.js. I enjoy tackling real-world challenges through clean, efficient code and am always eager to learn and grow as a developer.
          </p>
            {/* Resume Button */}
          <a 
          href="https://drive.google.com/file/d/18hea4Q3VqLnqd-WyObMqt8PvI-iHFg2e/view?usp=drive_link"
          target="_blank"
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
          >
            Resume
          </a>
        </div>
        {/* Right side */}
          <div className='md:w-1/2 flex justify-end md:justify-items-end'>
            <Tilt
              className='w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full'
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={true}
              gyroscope={true}
            >
              <img src={githubpic}
                alt="aditya chauhan" 
                className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
              />
            </Tilt>
          </div>
      </div>

    </section>
  )
}

export default About
