// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../../assets/naffco_logo_for_websites.png'
import smallIcon from '../../../assets/icons_white-01-small_1.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <div className=' bg-black pt-24'>
            <footer className="footer text-white p-10 max-w-7xl mx-auto">
                <aside>
                    <img className='py-6 w-[205px] pr-10' src={logo} alt="" />
                    <p className="text-lg font-bold pb-6">
                        World Headquarters, Jebel Ali Free Zone
                        <br />
                        Dubai, U.A.E  .P.O.  Box: 262169
                    </p>
                    <nav className='flex flex-col text-lg font-bold'>
                        <Link>T.  +971 4 815 1111</Link>
                        <Link>F.  +971 4 815 1222</Link>
                        <Link>info@naffco.com</Link>
                    </nav>
                </aside>
                <nav>
                    <div className='border-b-[1px] border-[#b01c12] w-full mb-4'>
                        <h6 className="text-lg font-bold">Explore</h6>
                    </div>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Product Catalog</Link>
                    <Link className="link link-hover">Markets</Link>
                    <Link className="link link-hover">News, Events, & Newsletter</Link>
                    <Link className="link link-hover">Contact Us</Link>
                </nav>
                <nav>
                    <div className='border-b-[1px] border-[#b01c12] w-full mb-4'>
                        <h6 className="text-lg font-bold">Products/Solutions</h6>
                    </div>
                    <Link className="link link-hover">Fire Fighting Equipment</Link>
                    <Link className="link link-hover">Fire Pumps & Controllers</Link>
                    <Link className="link link-hover">Foam Equipment & Concentrates</Link>
                    <Link className="link link-hover">Extra Low Voltage</Link>
                    <Link className="link link-hover">Fire Doors</Link>
                    <Link className="link link-hover">NAFFCO Aviation</Link>
                    <Link className="link link-hover">Trucks & Vehicles</Link>
                    <Link className="link link-hover">Smoke Management System</Link>
                    <Link className="link link-hover">Safety Signs</Link>
                    <Link className="link link-hover">Safety & Rescue</Link>
                    <Link className="link link-hover">Tufguard</Link>
                    <Link className="link link-hover">ELV Integrated System</Link>
                    <Link className="link link-hover">NAFFCO Modular</Link>
                    <Link className="link link-hover">Training</Link>
                    <Link className="link link-hover">Operations</Link>
                    <Link className="link link-hover">Maintenance</Link>
                </nav>
                <nav>
                    <div className='border-b-[1px] border-[#b01c12] w-full mb-4'>
                        <h6 className="text-lg font-bold">Truck & Vehicles</h6>
                    </div>
                    <Link className="link link-hover">ARFF Custom Built Chassis</Link>
                    <Link className="link link-hover">ARFF Commercial Chassis</Link>
                    <Link className="link link-hover">Municipal Firefighting</Link>
                    <Link className="link link-hover">Industrial Firefighting</Link>
                    <Link className="link link-hover">Rapid Intervention Vehicle</Link>
                    <Link className="link link-hover">Aerials Rescue & Firefighitng</Link>
                    <Link className="link link-hover">Special Vehicles</Link>
                </nav>
                <nav>
                    <nav>
                        <div className='border-b-[1px] border-[#b01c12] w-full mb-4'>
                            <h6 className="text-lg font-bold">Training</h6>
                        </div>
                        <Link className="link link-hover">NFPA Codes Training Courses</Link><br />
                        <Link className="link link-hover">Fire Fighting Training Courses</Link> <br />
                        <Link className="link link-hover">Medical, First Aid</Link>
                    </nav>
                    <nav className='mt-8'>
                        <div className='border-b-[1px] border-[#b01c12] w-full mb-4'>
                            <h6 className="text-lg font-bold">Follow us</h6>
                        </div>
                        <nav  className='flex text-lg '>
                            <div className='hover:text-[#b01c12] mr-2'>< FaFacebookF /></div>
                            <div className='hover:text-[#b01c12] mr-2'><FaXTwitter /></div>
                            <div className='hover:text-[#b01c12] mr-2'><FaLinkedinIn /></div>
                            <div className='hover:text-[#b01c12] mr-2'><TiSocialInstagram /></div>
                            <div className='hover:text-[#b01c12] mr-2'><FaYoutube /></div>
                        </nav>
                    </nav>
                </nav>
            </footer>
            <div className='flex text-white p-10 max-w-7xl mx-auto'>
                <div className='columns-3 flex flex-col justify-end border-t-[1px] mr-4 border-[#b01c12] space-y-2'>
                    <p>For Any Assistance,Please Contact</p>
                    <h2 className='text-4xl'><strong>800-</strong><strong className='text-[#b01c12]'>NAFFCO</strong> </h2>
                    <Link className='text-lg font-semibold tracking-widest'>8 0 0 6 2 3 3 2 6</Link>
                    <Link className='text-lg font-semibold'>customerservice@naffco.com</Link>
                </div>
                <div >
                    <img src={smallIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;