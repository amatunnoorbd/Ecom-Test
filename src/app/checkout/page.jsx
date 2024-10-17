"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import card_1 from '../../components/Image/NewArrival/card_1.jpeg'
import card_11 from '../../components/Image/NewArrival/card_1(1).jpeg'
import card_2 from '../../components/Image/NewArrival/card_2.jpeg'
import card_22 from '../../components/Image/NewArrival/card_2(2).jpeg'
import { FiGift } from 'react-icons/fi';
const initialItems = [
    {
        imge1: card_1,
        image2: card_11,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_2,
        image2: card_22,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
];

const CheckoutPage = () => {

    const [cartItems, setCartItems] = useState(initialItems); // Cart state
    const [coupon, setCoupon] = useState(''); // Coupon state
    const [discount, setDiscount] = useState(0); // Discount state

    // Function to remove an item from the cart
    const removeItem = (index) => {
        const updatedItems = cartItems.filter((_, idx) => idx !== index);
        setCartItems(updatedItems);
    };

    // Subtotal calculation
    const subtotal = cartItems.reduce(
        (total, item) => total + parseInt(item.discount_price),
        0
    );

    // Delivery cost (fixed)
    const delivery = 70;

    // Total calculation with discount
    const total = subtotal + delivery - discount;

    // Coupon apply handler
    const applyCoupon = () => {
        if (coupon === 'DISCOUNT10') {
            setDiscount(subtotal * 0.1); // 10% discount
            alert('Coupon Applied: 10% discount');
        } else {
            alert('Invalid Coupon Code!');
            setDiscount(0);
        }
    };


    return (
        <div className='border-2 bg-[#faf7f7] border-[#dfe3df] mx-[5.5%] mt-5 mb-20 pb-10 shadow-xl'>
            {/* page heading  */}
            <h1 className="text-4xl font-bold text-center text-white py-4 mb-8 bg-gradient-to-r from-[#387ae5] via-[#40c571] to-[#0893ab]">
                Checkout Form
            </h1>


            {/* billing and cart section */}
            <div className='flex gap-8 px-10'>

                {/* billing info part */}
                <div className='w-2/3 border bg-white shadow-2xl p-5'>

                    {/* heading  */}
                    <h1 className='mb-4 pb-1 border-b-2 border-dashed border-[#bbafaf] text-xl font-semibold'>
                        <span className=' pb-[1px]'>BILLING INFO</span>
                    </h1>

                    {/* information part */}
                    <form>
                        <div className='flex gap-8 mb-5'>
                            {/* name */}
                            <div className='w-full'>
                                <p className='pb-[2px] text-lg'>Name</p>
                                <input type="text" placeholder='Enter Your Full Name' className='pl-3 border border-[#c7bdbd] rounded-md shadow-lg p-[6px] w-full focus:outline-[#c0b4b4]' />
                            </div>
                            {/* mobile number  */}
                            <div className='w-full'>
                                <p className='pb-[2px] text-lg'>Mobile Number</p>
                                <input type="text" placeholder='Enter Your Phone Number' className='pl-3 border border-[#c7bdbd] rounded-md shadow-lg p-[6px] w-full focus:outline-[#c0b4b4]' />
                            </div>
                        </div>


                        <div className='flex gap-8 mb-5'>
                            {/* District */}
                            <div className='w-full'>
                                <p className='pb-[2px] text-lg'>District</p>
                                <input type="text" placeholder='Enter Your District Name' className='pl-3 border border-[#c7bdbd] rounded-md shadow-lg p-[6px] w-full focus:outline-[#c0b4b4]' />
                            </div>
                            {/* Upazila  */}
                            <div className='w-full'>
                                <p className='pb-[2px] text-lg'>Upazila</p>
                                <input type="text" placeholder='Enter Your Upazila Name' className='pl-3 border border-[#c7bdbd] rounded-md shadow-lg p-[6px] w-full focus:outline-[#c0b4b4]' />
                            </div>
                        </div>

                        {/* full addres */}
                        <div className='w-full mb-5'>
                            <p className='pb-[2px] text-lg'>Full Addres</p>
                            <input type="text" placeholder='Enter Your Upazila Name' className='border border-[#c7bdbd] rounded-md shadow-lg p-[6px] w-full focus:outline-[#c0b4b4] pl-3' />
                        </div>


                        {/* order note  */}
                        <fieldset className='mb-8 border border-[#c7bdbd] rounded-md shadow-lg w-full'>
                            <legend className='ml-5'>Order Note(Optional)</legend>
                            <textarea name="" id="" rows="3" className='pl-5 w-full focus:outline-none' placeholder='Additional Information'></textarea>
                        </fieldset>

                        {/* PAYMENT METHOD */}
                        <h1 className='text-xl font-medium border-b pb-1 '>PAYMENT METHOD</h1>
                        <div className='mb-5'>
                            <div className='text-lg my-2'>
                                <input type="radio" defaultChecked name="radio-1" className='mr-2' />
                                Cash On Delivery
                            </div>
                            <Image
                                width={200}
                                height={200}
                                alt='delivery method'
                                src="https://manfarebd.com/_next/static/media/cash.435f6c9f.png"
                            >
                            </Image>
                        </div>


                    </form>
                </div>


                {/* product info part */}
                <div className='w-1/3 border bg-white shadow-2xl p-5'>
                    <h1 className='pb-1 flex justify-between mb-5 border-b-2 border-dashed border-[#bbafaf] text-xl font-semibold'>
                        <span>ORDER OVERVIEW</span>
                        <span className='flex items-center gap-2'>
                            <FaCartArrowDown className='text-blue-800' />
                            <span>{cartItems.length}</span> {/* Cart item count */}
                        </span>
                    </h1>

                    {/* Cart Items */}
                    <div className='space-y-3 mb-14'>
                        {cartItems.map((item, idx) => (
                            <div key={idx} className='relative flex gap-4 border p-1 shadow-xl'>
                                <Image
                                    width={90}
                                    height={80}
                                    alt='product_img'
                                    src={item.imge1}
                                    className='rounded-xl'
                                />
                                <div>
                                    <h1 className='font-semibold'>{item.title}</h1>
                                    <p className='font-semibold'>TK. {item.discount_price}</p>
                                    <p className='flex gap-5 font-semibold'>
                                        <span>Size: XL</span>
                                        <span>Color: Multicolor</span>
                                    </p>
                                </div>

                                <button
                                    onClick={() => removeItem(idx)}
                                    className="z-10 border-2 border-white absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#5c5757] text-white font-semibold hover:bg-gray-800 transition"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Price Calculation */}
                    <div className='flex justify-between items-center p-2 border-t'>
                        <h1>Sub-Total</h1>
                        <p className='font-semibold'>{subtotal}</p>
                    </div>

                    <div className='flex justify-between items-center p-2 border-t'>
                        <h1>Delivery</h1>
                        <p className='font-semibold'>{delivery}</p>
                    </div>

                    <div className='flex justify-between items-center p-2 border-t'>
                        <h1>Discount</h1>
                        <p className='font-semibold'>{discount}</p>
                    </div>

                    <div className='flex justify-between items-center p-2 border-t'>
                        <h1>Total</h1>
                        <p className='font-semibold'>{total}</p>
                    </div>

                    {/* Coupon Code Section */}
                    <div className='flex items-center gap-2 pl-2 my-2'>
                        <FiGift />
                        <p>Have a Coupon or Promo Code?</p>
                    </div>

                    <div className='w-72 border p-1 border-[#c2b8b8] rounded-lg ml-2'>
                        <input
                            type="text"
                            placeholder='Promo code'
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className='focus:outline-none ml-3'
                        />
                        <button
                            onClick={applyCoupon}
                            className='text-white bg-[#976733] font-semibold py-1 px-2 ml-2 rounded-lg'
                        >
                            Redeem
                        </button>
                    </div>

                    {/* Place Order Button */}
                    <div className='text-center mt-6'>
                        <button className="relative items-center justify-center inline-block p-4 px-7 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white font-semibold">Place Order</span>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CheckoutPage;