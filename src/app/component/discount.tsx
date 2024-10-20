'use client';
import Image from "next/image";
import { useState } from 'react';

function Discount() {
    const [email, setEmail] = useState<string>(''); // Track email input

    // Handles form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents default form submission behavior
  
        if (!email) {
            console.error('Email is required!');
            return; // Stop if email is empty
        }
  
        // Logic for email submission can go here
        console.log('Email submitted:', email);
  
        // Optionally, clear the input field after submission
        setEmail('');
    };
    
    return (
        <div className="flex flex-col md:flex-row relative h-full w-full bg-cover bg-gray-200 bg-center justify-between items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <Image
                    src="/product/121.png"
                    alt="discount"
                    width={415}
                    height={317}
                    className="object-cover " // Ensures the image covers the available space
                />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4 md:pr-28"> {/* Added padding for mobile */}
                <h5 className="text-gray-700 py-2">20% DISCOUNT</h5>
                <h3 className="font-semibold text-2xl py-2">Subscribe & Get 20% Discount code</h3>
                <h6 className="text-gray-800 pb-3 pt-1">Looking for a discount code for Your surprise?</h6>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update state with the input value
                        className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
                    >
                        Subscribe
                    </button>
                </form>
                <h6 className="text-gray-800 py-3">Sign up for our newsletter below to receive the latest discount codes for Yoursurprise.</h6>
            </div>
        </div>
    )
}

export default Discount;
