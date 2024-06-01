import React, { useState, useEffect, useContext } from 'react'
import { FaStar } from "react-icons/fa";
import data from '../data'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios'
import { URL } from "../url"
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2'

// let arr = [product1, product2, product3, product4, product5, product6, product7, product8]
function Product_page() {
    const [products, setProducts] = useState([]);
    const {user}=useContext(UserContext)
    console.log("hello")
    if (user !== null) {
        console.log(user);
      }
    console.log("world")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(URL + "/api/product/get");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        fetchData();
    }, []);
   

    const handleAddToCart = async (productId) => {
        try {
                       
            const userId = user._id; 
            const quantity = 1; 
            await axios.post(URL + "/api/cart/add-to-cart", {
                userId,
                productId,
                quantity
            });
            
            Swal.fire({
                title: "Wow!",
                text: "Your order has been added to the cart!",
                icon: "success"
              });
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className='text-3xl md:text-4xl text-center font-bold pb-3 shadow-sm my-16'><span className='text-gray-700'>Our</span> <span className='text-blue-500  underline underline-offset-4'>Products</span></div>
            <div className='flex flex-col flex-wrap md:flex-row justify-center items-center gap-2 lg:gap-4'>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        img={product.image}
                        title={product.title}
                        desc={product.description}
                        price={product.price}
                        rating={product.rating}
                        reviews={product.reviews}
                        onAddToCart={() => handleAddToCart(product._id)} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
function Card({ img, title, desc, price, reviews, rating, onAddToCart }) {
    console.log(img)
    return (
        <div className='border border-gray rounded-xl mx-5 lg:mx-2 my-4 flex flex-col gap-3 flex-grow max-w-xs lg:max-w-sm items-center h-[570px] hover:scale-[102%] transition duration-300  delay-200 ease-linear'>
            <img src={img} className='w-80'/>
            <div className='text-center w-full mb-6 gap-6 flex flex-col'>
                <div className='px-5 flex flex-col gap-4'>
                    <h1 className='text-gray-700 text-lg font-bold'>{title}</h1>
                    <p className='text-gray-500'><PartialText maxLength={74} text={desc} /></p>
                    <p className='font-bold text-3xl'>₹{price}</p>
                </div>
                <div className="flex justify-center gap-3">
                    <div className='flex text-gray-400 text-xl justify-center pl-4'>
                        {
                            Array(5).fill(0).map(
                                (value, index) => (
                                    
                                        index+1 <= rating ?
                                    <FaStar className='text-yellow-400'/>:<FaStar/>
                                )
                            )
                        }
                    </div>
                        <p className='text-gray-500'>({reviews})</p>
                </div>
                <div className='flex gap-3 md:gap-5 mx-auto justify-center bottom-3'>
                    <button onClick={onAddToCart} className='bg-blue-600 py-3 rounded-md text-white w-28 font-semibold text-sm'>Add to Cart 🛒</button>
                </div>

            </div>
        </div>
    )
}
function PartialText({ text, maxLength }) {
    const isTruncated = text.length > maxLength;
    const truncatedText = isTruncated ? text.slice(0, maxLength) + '...' : text;
    return (
        <span>{truncatedText}</span>
    );
}

export default Product_page
