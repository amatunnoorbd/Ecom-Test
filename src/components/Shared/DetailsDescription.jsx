import { useState } from "react";

const DetailsDescription = ({ product }) => {

    const [activeTab, setActiveTab] = useState("Tab1");
    const { about_category, product_specification, care_instructions, about_brand } = product[0];
    console.log(product_specification);

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
                        {/* About the Category */}
                        <h1 className="text-lg font-semibold mb-2">About the Category</h1>
                        <p>{about_category}</p>

                        {/* Product Specifications */}
                        <h1 className="text-lg font-semibold mb-1 mt-6">Product Specifications:</h1>
                        <ul className="list-disc list-inside ml-5">
                            {Object.values(product_specification).map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>

                        {/* Care Instructions */}
                        <h1 className="text-lg font-semibold mb-1 mt-6">Care Instructions:</h1>
                        <ul className="list-disc list-inside ml-5">
                            {Object.values(care_instructions).map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>

                        {/* About the Brand */}
                        <h1 className="text-lg font-semibold mb-2 mt-6">About the Brand</h1>
                        <p>{about_brand}</p>
                    </div>
                )}

                {activeTab === "Tab2" && (
                    <div>
                        <p className="mb-8">
                            ঢাকা সিটি -হোম ডেলিভারী -৭০ টাকা <br />
                            ঢাকা সিটি’র ভেতরে অর্থাৎ ঢাকা সিটি কর্পোরেশনের মধ্যে যে এলাকাগুলো রয়েছে সেই এলাকাগুলোতে সম্পূর্ণ ক্যাশ অন ডেলিভারি-তে ড্রেস ডেলিভারি করা হয়। অর্থাৎ একজন ক্রেতা কোন প্রোডাক্ট অর্ডার করার পর প্রোডাক্টটি হাতে পেয়ে ডেলিভারিম্যানের কাছে প্রোডাক্টের মূল্য পরিশোধ করতে পারবেন।
                        </p>
                        <p>
                            ঢাকার বাইরে -সারা বাংলাদেশ- হোম ডেলিভারি অথবা কুরিয়ার ডেলিভেরী -১৫০ টাকা <br />
                            ঢাকার বাইরের অর্ডারের ক্ষেত্রে যে এলাকাসমূহতে কন্ডিশনে কুরিয়ার যায় সেই ক্ষেত্রে শুধুমাত্র ডেলিভারি চার্জ এডভান্স করে অর্ডার করতে হয়। <br />
                            পরবর্তীতে কুরিয়ার থেকে প্রোডাক্ট সংগ্রহের সময় শুধুমাত্র প্রোডাক্টের মূল্য পরিশোধ করে ক্রেতা তার প্রোডাক্টটি সংগ্রহ করতে পারবেন। <br />
                            ঢাকার বাইরে হোম ডেলিভারির সুযোগ সাধারণত থানা সদরগুলোতে পাওয়া যায়। কুরিয়ারের ডেলিভারির সময় থেকে হোম ডেলিভারিতে একটু বেশী সময় প্রয়োজন হয়, ৩-৫ দিন। <br />
                            ঢাকার বাইরে হোম ডেলিভারির ক্ষেত্রে শুধুমাত্র ডেলিভারি চার্জ এডভান্স পেমেন্ট করতে হয়। বাকী টাকা ক্যাশ অন ডেলিভারিতে প্রোডাক্ট রিসিভ করার সময় ডেলিভারিম্যানের কাছে পরিশোধ করতে পারবেন।
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailsDescription;
