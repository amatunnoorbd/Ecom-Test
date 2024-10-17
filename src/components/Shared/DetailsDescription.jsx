import { useState } from "react";

const DetailsDescription = () => {
    const [activeTab, setActiveTab] = useState("Tab1");

    return (
        <div className="w-full">

            {/* Tab Headers */}
            <div className="flex border-b border-gray-300">
                <button
                    className={`py-2 mr-10 transition ${activeTab === "Tab1"
                        ? "border-b-[3px] border-blue-500 font-semibold text-blue-600"
                        : "text-gray-800 hover:border-b-2 hover:border-gray-400"
                        }`}
                    onClick={() => setActiveTab("Tab1")}
                >
                    DESCRIPTION
                </button>
                <button
                    className={`py-2 transition ${activeTab === "Tab2"
                        ? "border-b-[3px] border-green-500 font-semibold text-green-600"
                        : "text-gray-800 hover:border-b-2 hover:border-gray-400"
                        }`}
                    onClick={() => setActiveTab("Tab2")}
                >
                    DELIVERY OPTIONS
                </button>
            </div>


            {/* Tab Content */}
            <div className="p-4 mt-2 rounded-lg">
                {activeTab === "Tab1" && (
                    <div>

                        {/* about the category */}
                        <h1 className="text-lg font-semibold mb-2">About the Category</h1>
                        <p>Dress up your everyday look with our men's solid shirts.The relaxed fit can be worn to match your mood and plans – whether it’s a casual hangout or a dinner date, from office meetings to late night parties, pick our solid shirts and you’re ready to go.

                            <span className="block mt-2">Let Manfare be Your Everyday Style Statement.</span></p>


                        {/* Product Specifications: */}
                        <h1 className="text-lg font-semibold mb-1 mt-6">Product Specifications:</h1>
                        <ul class="list-disc list-inside ml-5">
                            <li> Fabrics: Breathable export quality oxford cotton for maximum comfort.</li>
                            <li>Full sleeves with buttoned cuffs for versatility.</li>
                            <li>Slightly curved hem that strengthens the shirts.</li>
                            <li> Relaxed fit for utmost comfort that goes with your desired look.</li>
                            <li>Logo Embroidery: To make you stand out from the crowd.</li>
                            <li>Quality Control : To identify if each Shirt is up to the Highest Quality Standard.</li>
                        </ul>


                        {/* Care Instruction: */}
                        <h1 className="text-lg font-semibold mb-1 mt-6">Care Instruction:</h1>
                        <ul class="list-disc list-inside ml-5">
                            <li>Wash Separately With Cool Water</li>
                            <li>  Do Not Bleach</li>
                            <li>Do Not Tumble Dry</li>
                            <li>Iron Medium Heat</li>
                            <li>Do Not Iron Over The Label</li>
                        </ul>

                        {/* About the Brand  */}
                        <h1 className="text-lg font-semibold mb-2 mt-6">About the Brand</h1>
                        <p>
                            Manfare has become locally renowned for the classy collection of men’s everyday wear. The premium design and comfort of our shirts will become your best daily companion. As a lifestyle brand MANFARE aims to serve the customers with the quality one deserves. Since 2017, Manfare has been serving the fashion industry with pride and mastered the art of making men’s wardrobe a reflection of their personality.
                        </p>
                        <p className="mt-2">
                            Define your Everyday Style Statement! Welcome to the world of Manfare Clothing!
                        </p>


                    </div>
                )}

                {activeTab === "Tab2" && (
                    <div>
                        <p className="mb-8">ঢাকা সিটি -হোম ডেলিভারী -৭০ টাকা
                            ঢাকা সিটি’র ভেতরে অর্থাৎ ঢাকা সিটি কর্পোরেশনের মধ্যে যে এলাকাগুলো রয়েছে সেই এলাকাগুলোতে সম্পূর্ণ ক্যাশ অন ডেলিভারি-তে ড্রেস ডেলিভারি করা হয়।
                            অর্থাৎ একজন ক্রেতা কোন প্রোডাক্ট অর্ডার করার পর প্রোডাক্টটি হাতে পেয়ে ডেলিভারিম্যানের কাছে প্রোডাক্টের মূল্য পরিশোধ করতে পারবেন।
                        </p>
                        <p>
                            ঢাকার বাইরে -সারা বাংলাদেশ- হোম ডেলিভারি অথবা কুরিয়ার ডেলিভেরী -১৫০ টাকা <br />
                            ঢাকার বাইরের অর্ডারের ক্ষেত্রে যে এলাকাসমূহতে কন্ডিশনে কুরিয়ার যায় সেই ক্ষেত্রে শুধুমাত্র ডেলিভারি চার্জ এডভান্স করে অর্ডার করতে হয়। <br /> 
                            পরবর্তীতে কুরিয়ার থেকে প্রোডাক্ট সংগ্রহের সময় শুধুমাত্র প্রোডাক্টের মূল্য পরিশোধ করে ক্রেতা তার প্রোডাক্টটি সংগ্রহ করতে পারবেন। <br />
                            ঢাকার বাইরে হোম ডেলিভারির সুযোগ সাধারণত থানা সদরগুলোতে পাওয়া যায় । কুরিয়ারের ডেলিভারির সময় থেকে , হোম ডেলিভারিতে একটু বেশী সময় প্রয়োজন হয়, ৩-৫ দিন <br />
                            ঢাকার বাইরে হোম ডেলিভারির ক্ষেত্রে শুধুমাত্র ডেলিভারি চার্জ টা এডভান্স পেমেন্ট করতে হয় <br />
                            বাকী টাকা ক্যাশ অন ডেলিভারিতে অর্থাৎ প্রোডাক্ট রিসিভ করার সময় ডেলিভারিম্যানের কাছে টাকা দিয়ে প্রোডাক্ট রিসিভ করতে পারবেন।
                        </p>

                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailsDescription;
