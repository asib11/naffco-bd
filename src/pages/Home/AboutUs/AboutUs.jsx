// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/CEO-NAFFCO-updated.jpg'
import img2 from '../../../assets/naffco_logo.jpg'

const AboutUs = () => {
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )
    return (
        <div className='flex'>
            <div className='flex ml-16'>
                <div className=' w-[452px] mr-24'>
                    <div className='my-5'><Link to="/about" className='text-5xl' data-aos="fade-up" >About <strong className='text-[#b01c12]'>NAFFCO</strong></Link></div>
                    <p className='text-justify' data-aos="fade-up">Headquartered in Dubai, NAFFCO FZCO is among the world’s leading producers and suppliers of top-tier firefighting equipment, fire protection systems, fire alarms, security and safety engineering systems. Aligned with our vision to become world’s no.1 provider of innovative solutions, we are committed to providing our expertise to our customers in protecting life, environment, and property.</p>
                </div>
                <div className='flex items-end'>
                    <div className='bg-[#f1f2f4] px-9 py-16'>
                        <img className='w-[64px] ' src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className=''>
                    <p className='bg-[#b01c12] text-white text-3xl p-2 w-[306px] h-[192px]  flex justify-center items-center'><strong className='text-8xl'>30+</strong>years</p>
                    <p className='text-[#b01c12] font-bold text-xl p-8 w-[306px] h-[192px] flex justify-center items-center ' data-aos="fade-up">Keeping you safe and
                        your property secure is our business.</p>
                </div>
                <div className=' w-[577px]'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>

    );
};

export default AboutUs;