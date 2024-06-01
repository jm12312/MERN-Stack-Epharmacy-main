import React, { useState, useEffect } from 'react'
import emptyCart from '../assets/images/EmptyCart.png'
import axios from 'axios'
import { URL } from '../url'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdDelete } from 'react-icons/md'
import Swal from 'sweetalert2'

function OrderCartPage() {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext)

    useEffect(() => {
        const fetchCartDetails = async () => {
            try {
                if (!user) return;
                const userId = user._id;
                const res = await axios.get(`${URL}/api/cart/getcart/${userId}`);
                setCart(res.data.cart);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart details:', error);
                setLoading(false);
            }
        };

        fetchCartDetails();
    }, [user]);

    const handleDelete = async (productId) => {
        try {
            const userId = user._id;
            await axios.delete(`${URL}/api/cart/delete/${userId}/${productId}`);
            window.location.reload(true)
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };
    const onPay = async () => {
        try {
            const userId = user._id;
            await axios.delete(`${URL}/api/cart/clear/${userId}`);
            
            Swal.fire({
                title: "Payment Successful!",
                text: "Your order will be delivered in 6 days!",
                icon: "success",
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonText: "OK",
                allowOutsideClick: false, 
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/";
                }
            });
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    }; 

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <h1 className='text-3xl mb-16 mt-8'>Order Cart</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : cart && cart.oc.length > 0 ? (
                    <div>
                        <div>
                            {cart.oc.map((item, index) => (
                                <div className='border rounded-lg p-4 mb-4' key={index}>
                                    <div className="flex space-x-16">
                                        <h2 className="text-lg mb-2 mr-auto">{item.pid.title}</h2>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ₹{item.pid.price}</p>
                                        <button className="text-red-500" title="Delete" onClick={() => handleDelete(item.pid._id)}>
                                            <MdDelete />
                                        </button>
                                    </div>
                                    <div className="flex space-x-4">
                                        <p className="ml-auto">Amount: ₹{item.quantity * item.pid.price}</p>
                                    </div>
                                </div>
                            ))}
                            <hr className='my-8 border-l border-black w-auto'></hr>
                        </div>
                        <div>
                            <div className="my-4 space-y-4 border p-8 items-center">
                                <h1 className='text-3xl my-6'>Billing</h1>
                                <div className="flex justify-between">
                                    <p>Subtotal:</p>
                                    <p>₹{cart.oc.reduce((acc, item) => acc + (item.quantity * item.pid.price), 0)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>GST (10%):</p>
                                    <p>₹{cart.oc.reduce((acc, item) => acc + (item.quantity * item.pid.price), 0) * 0.1}</p>
                                </div>
                                <hr className='my-4 border-l border-black w-full'></hr>
                                <div className="flex justify-between">
                                    <p>Total:</p>
                                    <p>₹{cart.oc.reduce((acc, item) => acc + (item.quantity * item.pid.price), 0) * 1.1}</p>
                                </div>
                            </div>
                        </div>
                        <hr className='my-8 border-l border-black w-auto'></hr>
                        <div>
                            <div className="my-4 space-y-4">
                                <h1 className='text-3xl my-6'>Payment Options</h1>
                                <button onClick={onPay} className='w-full border h-10'>UPI</button>
                                <button onClick={onPay} className='w-full border h-10'>Wallet</button>
                                <button onClick={onPay} className='w-full border h-10'>Net Banking</button>
                                <button onClick={onPay} className='w-full border h-10'>Pay on Delivery</button>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="flex flex-col items-center justify-center my-16">
                        <img src={emptyCart} alt='Empty Order Cart' className="h-40 w-40" />
                        <h1 className="text-3xl font-bold mt-4">No items in the cart</h1>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default OrderCartPage;
