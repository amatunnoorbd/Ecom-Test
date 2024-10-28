"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const SocialSignin = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const path = searchParams.get('redirect')
    const session = useSession()
    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : '/'
        })
    }

    return (

        <div className='flex gap-5 bg-[#ced0d4] w-full justify-center py-3' >

            <button onClick={() => handleSocialLogin('facebook')}  className="flex items-center  bg-[#0F549A] font-semibold ">
                <div className='bg-[#163059] p-2'>
                    <FaFacebookF className="w-5 h-5 pt-[3px] bg-white rounded-sm " />
                </div>
                <span className='text-white px-3 text-sm'>FACEBOOK LOGIN</span>
            </button>

            <button className="flex items-center bg-[#E33C2A] font-semibold ">
                <div className='bg-[#A42623] p-2'>
                    <FaGoogle className="text-lg text-white font-bold" />
                </div>
                <span onClick={() => handleSocialLogin('google')} className='text-white px-3 text-sm'>GOOGLE LOGIN</span>
            </button>

        </div>
    );
};

export default SocialSignin;