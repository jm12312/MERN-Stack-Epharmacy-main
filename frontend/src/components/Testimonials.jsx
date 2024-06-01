import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quotes from "../assets/images/Testimonials/right-quote-sign.png";
import testimonial1 from "../assets/images/Testimonials/testimonial1.png";
import testimonial2 from "../assets/images/Testimonials/testimonial2.png";
import testimonial3 from "../assets/images/Testimonials/testimonial3.png";
import testimonial4 from '../assets/images/Testimonials/testimonial4.png';
import testimonial5 from '../assets/images/Testimonials/testimonial5.png';

const Testimonial = ({ testimonialData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const data = [
    { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus semper libero eget sagittis. Nullam dapibus scelerisque ipsum, eget fringilla nunc consectetur in.', author: 'John Doe', rating: 4, imageSrc: testimonial1 },
    { quote: 'Proin nec nisi ut arcu maximus bibendum. Integer vitae lacus malesuada, eleifend elit a, consequat nunc. Nulla a tortor a nisi facilisis varius.', author: 'Jane Smith', rating: 5, imageSrc: testimonial2 },
    { quote: 'Fusce eleifend est sit amet orci elementum, ac volutpat quam convallis. Curabitur rutrum, enim nec luctus blandit, velit mi molestie urna, vel pharetra justo nunc nec neque.', author: 'Mike Johnson', rating: 3.5, imageSrc: testimonial3 },
    { quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in turpis est. Integer sollicitudin leo quis magna iaculis, vel vestibulum lorem pharetra.', author: 'Emily Brown', rating: 4.5, imageSrc: testimonial4 },
    { quote: 'Ut sodales est ac orci feugiat, vitae blandit nisi tempor. Duis nec ipsum eget lorem euismod volutpat. Suspendisse potenti. Ut eget tortor ut lorem scelerisque viverra id non libero.', author: 'David Wilson', rating: 4, imageSrc: testimonial5 },
  ];

  return (
    <div className="max-w-screen-lg mx-auto my-60 text-center">
      <h2 className="font-bold text-4xl black-text-blue-underline mb-14">Our Testimonials</h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-lg p-4 h-96 border mx-auto max-w-3xl flex flex-col items-center justify-center">
                <img src={quotes} alt= "quotation" className="mb-2 w-10 h-10" />
              <blockquote className="text-lg italic mb-4">{item.quote}</blockquote>
              <div className="flex items-center mb-4">
                {[...Array(5).keys()].map((star, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-yellow-400 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1.53l1.96 4.908h5.196l-4.33 3.993 1.524 5.243L10 14.342l-4.35 2.335 1.524-5.243-4.33-3.993h5.196L10 1.53zm0 2.162L8.404 7.85H3.747l3.596 3.304-1.072 3.683 3.108-1.655 3.558 1.898-1.072-3.683 3.596-3.304H11.6L10 3.692zM3.757 16.16l-.95-3.27H7.47l1.15-2.872-3.02-2.78 3.76-.203 1.16-3.177 1.17 3.177 3.758.203-3.02 2.78 1.15 2.872h4.663l-.95 3.27-3.096-1.655-3.277 2.35z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <img src={item.imageSrc} alt={`Author ${index + 1}`} className="mb-2 w-24 h-24 rounded-full" />
                <p className="text-lg font-semibold">{item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
