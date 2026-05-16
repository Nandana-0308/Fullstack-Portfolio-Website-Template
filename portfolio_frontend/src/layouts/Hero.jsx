import React from 'react'
import { APP_DATA } from "../constants/appData";
import darkThemeHeroPic from '../assets/darkThemeHeroPic.png'
import lightThemeHeroPic from '../assets/lightThemeHeroPic.png'

import { Download } from 'lucide-react'

const Hero = ({ theme }) => {

    const firstLetter = APP_DATA.owner.charAt(0);
    const remainingName = APP_DATA.owner.slice(1);

    return (
        <section id='hero' className={`relative min-h-screen flex items-center overflow-hidden `}>
            {/* ${theme === 'light' ? 'hero-gradient' : ''} */}
            {/* BG */}
            {/* BG */}
            <div className='absolute    inset-0'>
                <img
                    src={theme === 'dark' ? darkThemeHeroPic : lightThemeHeroPic}
                    alt="bg pic" className='w-full h-full  opacity-40 ' />

            </div>

            {/* Content */}
            <div className='py-30'>


                {/* profile + content */}
                <div className='px-7  flex flex-col items-center gap-8 sm:flex-row  w-screen '>

                    {/* Image Container */}
                    <div className='px-10 relative '>
                        <img
                            src={APP_DATA.profilePic}
                            alt="Profile"
                            className={`mx-auto animate-fade-in object-cover 
                                            w-70 h-auto
                                            sm:w-80 sm:h-auto
                                            md:w-90 md:h-auto
                                            lg:w-100 lg:h-auto
                                            hover:scale-105
                                            transition-all duration-500 ease-in-out transform
                                    
                                            [mask-image:linear-gradient(to_bottom,black_70%,transparent)]
                                            [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]
                                            `}
                        //border-4 border-white/10 shadow-[0_0_20px_rgba(0,194,255,0.6)]  [border-radius:60%_40%_30%_70%/60%_30%_70%_40%]
                        />

                        {/* Availability badge */}
                        <div className='absolute bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float animation-delay-400'>
                            <div className="flex items-center gap-3 ">
                                <div className={`w-3 h-3 rounded-full animate-pulse ${theme === 'light' ? 'bg-yellow-500' : 'bg-[var(--color-baseColor)]'}`}></div>
                                <span className={`text-sm font-md text-[var(--color-color6)]`}>Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className='space-y-3 ' style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                        {/* title  */}
                        <div className='px-3 py-6 sm:px-5 sm:py-10 relative w-full flex justify-center sm:block'>
                            <span
                                className={`text-sm sm:text-base text-[var(--color-color6)] rounded-full px-5 py-2 sm:px-10 sm:py-3 ${theme == 'light' ? 'bg-black/4' : 'bg-white/5'
                                    } border border-white/10`}
                            >
                                Software Engineer | Cyber Security
                            </span>
                        </div>
                        <span className='block text-[var(--color-color6)] text-2xl md:text-3xl animate-fade-in animation-delay-200 font-semibold'>
                            <span className='pr-6'>Hi Iam</span>
                            <span className='
                                        text-5xl md:text-6xl
                                        font-extrabold
                                        text-[var(--color-primary)]
                                    '>
                                {firstLetter}<span className='text-[var(--color-color6)] text-3xl md:text-5xl animate-fade-in animation-delay-200 font-semibold'>{remainingName}</span>
                            </span>
                        </span>

                        <p className='text-[var(--color-color6)] animate-fade-in animation-delay-400 max-w-2xl leading-relaxed mt-3'>
                            A passionate full-stack developer focused on building modern, scalable web applications.
                            I enjoy turning ideas into real-world solutions using clean design and efficient code.
                        </p>
                        {/* Button - contact me*/}
                        <div className='flex justify-start items-center gap-6 mt-6 animate-fade-in animation-delay-200 '>
                            <div className='px-5 py-2 '>
                                <button className='animated-border-btn'>
                                    <span className='btn-inner-content text-xs sm:text-sm'><a href="#connect"> Connect with me</a></span>
                                </button>
                            </div>

                            <div className='px-5 py-2 '>
                                <button className='animated-border-btn'>
                                    <a href="/Nandana_General_Resume.pdf" download className='btn-inner-content flex items-center gap-3 text-xs sm:text-sm '>
                                        <Download size={22} className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Download CV
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='absolute inset-0 flex items-end z-10 px-7 py-6 '>
                    <p className='text-white'>Technologies known</p>
                </div> */}

        </section>
    )
}

export default Hero
