import React from 'react'
import ArrowRight from '@/public/arrow-right.svg'
import phmonth from '@/public/phmonth.svg'
import openaiTop from '@/public/openaitop.svg'
import Image from "next/image";
const Hero = () => {
    return (
        <div className="mx-2 sm:mx-20 py-14 sm:py-20 flex flex-col items-center justify-center">
            <div className="max-w-fit font-black mx-auto my-8 px-2 flex items-center justify-center rounded-full gap-4 py-1.5 bg-gradient-to-r from-[#81f8d2] to-[#63e3ec]">
                <span className="text-sm bg-white font-semibold px-3 py-1 rounded-full">New</span>
                <h1 className="text-sm sm:text-base font-normal ">Introducing <span className="text-black font-bold">Jobright Agent:</span> the first AI that hunts jobs for you.</h1>
                <span className="cursor-pointer rounded-full bg-white p-2"><Image src={ArrowRight} alt="arrow-right" width={15} height={15} /></span>
            </div>
            <div className="flex items-center gap-8 justify-center py-4">
                <div>
                    <Image src={phmonth} className="w-40" alt='phmonth' />
                </div>
                <div>
                    <Image src={openaiTop} className="w-40" alt='openaitop' />
                </div>
            </div>
            <div className="text-center">
                <p className="text-4xl sm:text-7xl font-normal py-4">No More Solo Job Hunting
                </p>
                <p className="text-4xl sm:text-7xl uppercase font-extrabold">Do it with AI Copilot</p>
                <p className="text-base py-4 max-w-3xl mx-auto">Our AI makes landing job interviews dramatically easier and faster! - get matched jobs, tailored resume, and recommended insider connections in less than 1 min!</p>
            </div>
            <button className="bg-[#00f0a0] rounded-full text-lg font-bold cursor-pointer  px-12 py-4 my-8">Try Jobright for Free</button>
            <div className=" relative w-full z-10 aspect-[4/3] sm:aspect-video mt-12">
                <iframe width="1200" height="675" src="https://www.youtube.com/embed/f2oQsk2er0Y?controls=0" title="Jobright: Your AI Job Search Copilot - More Interviews, Less Effort" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mt-12 absolute top-0 left-0 px-2 w-full rounded-2xl'></iframe>
            </div>
        </div>
    )
}

export default Hero
