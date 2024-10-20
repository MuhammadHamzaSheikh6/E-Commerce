import Image from "next/image";
import { FaInstagram, FaMobile, FaTwitter, FaVoicemail, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full h-full bg-green-950">
            <div className="flex flex-col md:flex-row justify-around text-white px-5 md:px-28 text-base pt-16 gap-14">
                <div>
                    <ul>
                        <li className="p-3">
                            <Image 
                                src='/favicon.ico'
                                alt="Logo"
                                width={160}
                                height={160}
                            />
                        </li>
                        <li className="py-1">
                            <p>Lorem ipsum dolor sit amet consectetur Vitae nunc.</p>
                        </li>
                        <li className="py-1">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="py-1">
                            <a href="#">Terms and Condition</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="font-bold text-xl">INFORMATION</h3>
                        </li>
                        <li className="py-1"><a href="">Old city Street, USA</a></li>
                        <li className="py-1"><a href="">About us</a></li>
                        <li className="py-1"><a href="">Check out</a></li>
                        <li className="py-1"><a href="">Return and refund</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="font-bold text-xl">HELP</h3>
                        </li>
                        <li className="py-1"><a href="">My Account</a></li>
                        <li className="py-1"><a href="">Free Home Delivery</a></li>
                        <li className="py-1"><a href="">Cart</a></li>
                        <li className="py-1"><a href="">Order Status</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="font-bold text-xl">SOCIAL MEDIA</h3>
                        </li>
                        <li className="py-2">
                            <ul className="flex gap-3">
                                <li>
                                    <a 
                                        href="" 
                                        className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        <FaInstagram className="text-gray-200" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="" 
                                        className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        <FaTwitter className="text-gray-200" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="" 
                                        className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        <FaYoutube className="text-gray-200" />
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="py-2 flex items-center">
                            <p className="flex items-center">
                                <FaMobile className="mr-2" />
                                <a href="">+(00)-000-000-0000</a>
                            </p>
                        </li>
                        <li className="py-1 flex items-center gap-2">
                            <p className="flex items-center">
                                <FaVoicemail className="mr-2" />
                                <a href="">infoname@mail.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="bg-green-950 pb-1">
                    {/* Horizontal line */}
                    <hr className="mx-5 md:mx-32 border-gray-300" />
                    {/* Optional text above the line */}
                    <div className="flex flex-col md:flex-row justify-around items-center my-4 text-white">
                        <div className=" flex gap-8 items-center">
                        <h3 className="font-bold text-lg pl-3 md:pl-0">Category</h3>
                            <ul className="flex gap-3 flex-wrap">
                                <li><a href="">Tanks</a></li>
                                <li><a href="">T-Shirts</a></li>
                                <li><a href="">Polo Shirts</a></li>
                                <li><a href="">Casual Shirts</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>&copy; Men-Shirts 2023 | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
