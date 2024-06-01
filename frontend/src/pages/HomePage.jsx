import React from 'react';
import medal from '../assets/images/medal.png';
import banner from '../assets/images/banner.png';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Testimonial from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8 flex">
                <div className="w-1/2 mt-9 py-10">
                    <div className='flex items-center'>
                        <img src={medal} alt="Image" className="max-w-full h-20 my-10" />
                        <h1 className="text-3xl font-bold mb-4 mx-4 px-20">Best Quality <br /> Medicine in 2024</h1>
                    </div>
                    <p className="text-lg mb-4">Our products are the best in the world. We sell only authentic products. Welcome to our shop.</p>
                    <Link to={"/products"}><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Explore our shop</button></Link>
                </div>
                <div className="w-1/2">
                    <img src={banner} alt="Image" className="max-w-full h-auto" />
                </div>
            </div>
            <Services />
            <Testimonial />
            <Footer />
        </>
    );
};

export default HomePage;
