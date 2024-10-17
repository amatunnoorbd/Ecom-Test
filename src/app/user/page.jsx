"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const UserPage = () => {
    // Separate states for each section
    const [isEditingAccount, setIsEditingAccount] = useState(false);
    const [isEditingSecurity, setIsEditingSecurity] = useState(false);

    const handleEditAccount = (event) => {
        event.preventDefault(); 
        setIsEditingAccount(!isEditingAccount);
    };

    const handleEditSecurity = (event) => {
        event.preventDefault(); 
        setIsEditingSecurity(!isEditingSecurity);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 pt-3">
            {/* Account details form */}
            <form className="mb-8 shadow-xl border-2 border-[#f3f1f1] p-5 pb-10">
                <div className="mb-4 flex justify-between border-b pb-3">
                    <h3 className="text-lg font-semibold">Account Details</h3>
                    <button onClick={handleEditAccount} className="font-semibold border border-[#464141] py-[3px] px-2 rounded-lg hover:bg-gray-200">
                        <CiEdit className="text-xl inline-block mr-2" />
                        Edit
                    </button>
                </div>

                <div className="flex gap-8">
                    <div className="w-full">
                        <label className="block text-gray-600">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            disabled={!isEditingAccount}
                            className={`focus:outline-[#beb0b0] mt-1 block w-full p-2 border rounded ${
                                !isEditingAccount ? "bg-gray-200" : "bg-white"
                            }`}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-600">Phone Number</label>
                        <input
                            type="text"
                            value="88017434393982"
                            disabled
                            className="mt-1 block w-full p-2 border rounded bg-gray-200"
                        />
                    </div>
                </div>

                <div className="flex gap-8 mt-5">
                    <div className="w-full">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            disabled={!isEditingAccount}
                            className={`focus:outline-[#beb0b0] mt-1 block w-full p-2 border rounded ${
                                !isEditingAccount ? "bg-gray-200" : "bg-white"
                            }`}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block">Gender</label>
                        <select
                            disabled={!isEditingAccount}
                            className={`focus:outline-[#beb0b0] mt-1 block w-full p-2 border rounded ${
                                !isEditingAccount ? "bg-gray-200" : "bg-white"
                            }`}
                        >
                            <option>Choose a Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
            </form>

            {/* Security form */}
            <form className="border-2 shadow-xl border-[#f3f1f1] p-5 pb-10">
                <div className="mb-4 flex justify-between border-b pb-3">
                    <h3 className="text-lg font-semibold">Security</h3>
                    <button onClick={handleEditSecurity} className="font-semibold border border-[#464141] py-[3px] px-2 rounded-lg hover:bg-gray-200">
                        <CiEdit className="text-xl inline-block mr-2" />
                        Edit
                    </button>
                </div>

                <div className="flex gap-8">
                    <div className="w-full">
                        <label className="block">Current Password</label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            disabled={!isEditingSecurity}
                            className={`focus:outline-[#beb0b0] mt-1 block w-full p-2 border rounded ${
                                !isEditingSecurity ? "bg-gray-200" : "bg-white"
                            }`}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter your new password"
                            disabled={!isEditingSecurity}
                            className={`focus:outline-[#beb0b0] mt-1 block w-full p-2 border rounded ${
                                !isEditingSecurity ? "bg-gray-200" : "bg-white"
                            }`}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserPage;
