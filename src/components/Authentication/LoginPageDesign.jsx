"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginPageDesign = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track if it's login or signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { x: isLogin ? '-100%' : '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: isLogin ? '100%' : '-100%', opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex border-2 shadow-xl border-[#d4cbcb] w-[830px] h-[460px]">
      {/* Left Section */}
      <motion.div
        className={`w-[48%] bg-cover bg-center text-white flex flex-col justify-center items-center  text-center ${isLogin ? 'order-1' : 'order-2'}`}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://i.ibb.co/3MNTrxz/photo-1482398650355-d4c6462afa0e-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg")'
        }}
      >
        <h1 className="text-4xl font-bold mb-4">{!isLogin ? "Welcome Back!" : "Join Us!"}</h1>
        <p className="mb-2">{!isLogin ? "Already signed up?" : "Let’s get you all set up."}</p>
        <p className="mb-6">{!isLogin ? "Log in to your account." : "Sign up to create an account."}</p>

        <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-blue-800 transition" onClick={toggleForm}>
          {!isLogin ? "Log In" : "Sign Up"}
        </button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className={`w-[54%] flex ${isLogin ? 'order-2' : 'order-1'}`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        {isLogin ? (
          <motion.form
            className="w-full max-w-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            {/* login page */}
            <div>
              {/* google facebook */}
              <div className='flex gap-5 bg-[#ced0d4] w-full justify-center py-3' >

                <button className="flex items-center  bg-[#0F549A] font-semibold ">
                  <div className='bg-[#163059] p-2'>
                    <FaFacebookF className="w-5 h-5 pt-[3px] bg-white rounded-sm " />
                  </div>
                  <span className='text-white px-3 text-sm'>FACEBOOK LOGIN</span>
                </button>

                <button className="flex items-center bg-[#E33C2A] font-semibold ">
                  <div className='bg-[#A42623] p-2'>
                    <FaGoogle className="text-lg text-white font-bold" />
                  </div>
                  <span className='text-white px-3 text-sm'>GOOGLE LOGIN</span>
                </button>

              </div>

              {/* login with otp */}
              <div className='text-center my-6'>
                <h1 className='font-semibold pb-2'>LOGIN WITH OTP CODE</h1>
                <div>
                  <input type="text" name="" id="" placeholder='0 1 X X X - X X X X X X ' className='border border-[#b0a7a7] p-1 pl-5 focus:outline-none' />
                  <button className='bg-[#AB8D74] text-white p-[5px] px-2 rounded-sm ml-3'>SEND CODE</button>
                </div>
              </div>

              {/* divider */}
              <div className='my-5 flex items-center justify-between gap-2 px-14 '>
                <p className='w-full border border-dashed border-[#878080]'></p>
                <p>OR</p>
                <p className=' w-full border border-dashed border-[#878080]'></p>
              </div>

              <form className='px-14'>
                {/* <h2 className="text-2xl font-semibold pb-2">LOGIN</h2> */}
                <p className=''>Mobile number</p>
                <input type="email" placeholder="enter your mobile number" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <p className='mt-1'>Password</p>
                <input type="email" placeholder="enter password" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <div className='text-center'>
                  <button className='bg-[#AB8D74] text-white p-[5px] px-5 py-2 rounded-sm hover:bg-[#93735a] mt-4'>LOGIN</button>
                </div>
              </form>

            </div>

          </motion.form>
        ) : (
          <motion.form
            className="w-full max-w-md space-y-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            {/* Signup page */}
            <div>
              {/* google facebook */}
              <div className='flex gap-5 bg-[#ced0d4] w-full justify-center py-3' >

                <button className="flex items-center  bg-[#0F549A] font-semibold ">
                  <div className='bg-[#163059] p-2'>
                    <FaFacebookF className="w-5 h-5 pt-[3px] bg-white rounded-sm " />
                  </div>
                  <span className='text-white px-3 text-sm'>FACEBOOK SIGNUP</span>
                </button>

                <button className="flex items-center bg-[#E33C2A] font-semibold ">
                  <div className='bg-[#A42623] p-2'>
                    <FaGoogle className="text-lg text-white font-bold" />
                  </div>
                  <span className='text-white px-3 text-sm'>GOOGLE SIGNUP</span>
                </button>

              </div>

              {/* signup with otp */}
              <div className='text-center my-6'>
                <h1 className='font-semibold pb-2'>SIGN UP WITH OTP CODE</h1>
                <div>
                  <input type="text" name="" id="" placeholder='0 1 X X X - X X X X X X ' className='border border-[#b0a7a7] p-1 pl-5 focus:outline-none' />
                  <button className='bg-[#AB8D74] text-white p-[5px] px-2 rounded-sm ml-3'>SEND CODE</button>
                </div>
              </div>

              {/* divider */}
              <div className='my-5 flex items-center justify-between gap-2 px-14 '>
                <p className='w-full border border-dashed border-[#878080]'></p>
                <p>OR</p>
                <p className=' w-full border border-dashed border-[#878080]'></p>
              </div>

              <form className='px-14'>
                {/* <h2 className="text-2xl font-semibold pb-2">LOGIN</h2> */}
                <p className=''>Mobile number</p>
                <input type="email" placeholder="enter your mobile number" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <p className='mt-1'>Password</p>
                <input type="email" placeholder="enter password" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <div className='text-center'>
                  <button className='bg-[#AB8D74] text-white p-[5px] px-5 py-2 rounded-sm hover:bg-[#93735a] mt-4'>SIGN UP</button>
                </div>
              </form>

            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default LoginPageDesign;
