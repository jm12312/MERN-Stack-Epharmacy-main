import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import service1 from '../assets/images/Services/service1.png';
import service2 from '../assets/images/Services/service2.png';
import service3 from '../assets/images/Services/service3.png';
import service4 from '../assets/images/Services/service4.png';
import service5 from '../assets/images/Services/service5.png';
import service6 from '../assets/images/Services/service6.png';

const Services = ({ servicesData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    { title: 'Pharmacy Helpline', description: 'Do you need answers to questions about prescription drugs? We\'re here', imageSrc: service1 },
    { title: 'Prescribing Tools', description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical', imageSrc: service2 },
    { title: 'Speciality Medications', description: 'Some patients require speciality drugs for chronic or complex condition', imageSrc: service3 },
    { title: 'Pharmacy Claims', description: 'Search our formulary list of preferred drugs. Find a pharmacy clinical', imageSrc: service4 },
    { title: 'Log in to our Provider Portal', description: 'The provider portal has information and tools to complete real-time tr', imageSrc: service5 },
    { title: 'Our URAC pharmacy accrediations', description: 'URAC is an independent, non-profit health care accrediting organization', imageSrc: service6 },
  ];

  return (
    <div className="max-w-screen-lg mx-auto my-40 text-center">
      <h2 className="font-bold text-4xl black-text-blue-underline mb-14">Our Services</h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-lg p-4 h-80 border mr-4 w-auto flex flex-col items-center justify-between">
              <img src={item.imageSrc} alt={`Image ${index + 1}`} className="mb-2 w-24" />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded text-md mt-4">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
