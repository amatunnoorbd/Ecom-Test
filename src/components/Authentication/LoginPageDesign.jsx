"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import SocialSignin from '../Shared/SocialSignin';

const LoginPageDesign = ({ onLoginSuccess, onLoginerror, closeModal }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // State to track if it's login or signup
  const [loading, setLoading] = useState(false);

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

  // signup with number and pass functonality
  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    const mobile = event.target.mobile.value;
    const password = event.target.password.value;

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password }),
      });

      const data = await response.json();
      if (response.status === 201) {
        // User created, now sign in the user
        const result = await signIn("credentials", {
          redirect: false,
          mobile,
          password,
        });

        if (result?.ok) {
          closeModal(); // Close the modal
          Swal.fire({
            title: "Good job!",
            text: "New User Created",
            icon: "success",
            timer: 1000,
            showConfirmButton: false, // Optional: Hide the confirm button
          }).then(() => {
            // Redirect after SweetAlert finishes
            window.location.href = "/user";
          });

        } else {
          console.error("Sign in failed:", result);
        }
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }

  };


  // signin with number and pass 
  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    const mobile = event.target.mobile.value.trim();  // trim করে খালি স্পেস রিমুভ করছি
    const password = event.target.password.value;
    console.log(mobile, password);

    const res = await signIn("credentials", {
      mobile,
      password,
      redirect: false,
    });

    if (res.error) {
      onLoginerror();
      console.log("Login failed:", res.error); // Error লগ করে দেখো কি আসছে
    } else {
      onLoginSuccess();
      router.push('/user');
      setLoading(false);
    }

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
          <motion.div
            className="w-full max-w-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            {/* login page */}
            <div>
              {/* google facebook */}
              <SocialSignin />


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

              <form className='px-14' onSubmit={handleSignIn}>
                {/* <h2 className="text-2xl font-semibold pb-2">LOGIN</h2> */}
                <p className=''>Mobile number</p>
                <input type="text" name='mobile' placeholder="enter your mobile number" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <p className='mt-1'>Password</p>
                <input type="password" name='password' placeholder="enter password" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <div className='text-center'>
                  <button className='bg-[#AB8D74] text-white p-[5px] px-5 py-2 rounded-sm hover:bg-[#93735a] mt-4'>
                    {loading ? <span className="loading loading-spinner loading-sm"></span> : "LOGIN"}
                  </button>
                </div>
              </form>

            </div>

          </motion.div>
        ) : (
          <motion.div
            className="w-full max-w-md space-y-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            {/* Signup page */}
            <div>
              {/* google facebook */}
              <SocialSignin />
              

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

              {/* signup with number and pass */}
              <form className='px-14' onSubmit={handleSignup}>
                {/* <h2 className="text-2xl font-semibold pb-2">LOGIN</h2> */}
                <p className=''>Mobile number</p>
                <input type="text" name='mobile' placeholder="enter your mobile number" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <p className='mt-1'>Password</p>
                <input type="password" name='password' placeholder="enter password" className="p-2 border border-[#aea9a9] rounded bg-[#ecedf0] focus:outline-[#b3a9a9] w-full" />
                <div className='text-center'>
                  <button className='bg-[#AB8D74] text-white p-[5px] px-5 py-2 rounded-sm hover:bg-[#93735a] mt-4'>
                    {/* SIGN UP */}
                    {loading ? <span className="loading loading-spinner loading-sm"></span> :
                      "SIGN UP"
                    }
                  </button>
                </div>
              </form>

            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginPageDesign;
