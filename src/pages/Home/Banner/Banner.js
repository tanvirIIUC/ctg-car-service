import React from 'react';

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel max-w-6xl mx-auto rounded-xl">
            <div id="slide1" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img1} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img2} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img3} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img4} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img5} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative max-w-6xl mx-auto">
                <div className='img-gradient'>
                    <img src={img6} className="max-w-6xl" />
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 w-2/5  top-1/2">
                    <p className='font-xl text-white '>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute text-white  flex justify-end transform -translate-y-1/2 left-12   top-3/4">
                <button className="btn btn-active mx-2 text-white btn-accent">Button</button>
                <button className="btn btn-outline text-white">Button</button>
                </div>
            </div>
           
           
           
          
        </div>
    );
};

export default Banner;