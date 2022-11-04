import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import Parts from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className="hero  my-32">
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2 relative'>
                <img src={person} alt='/' className=" h-full w-4/5 rounded-lg shadow-2xl" />
                <img src={Parts} alt='/' className=" absolute w-3/5 top-1/2 left-48 rounded-lg shadow-2xl" />
            </div>
          
          <div className='w-1/2'>
            <p className='text-orange-700 font-bold'>About us</p>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;