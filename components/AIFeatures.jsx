"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ai_star from "@/public/aistar_landing.svg"
import ArrowRight from "@/public/arrow-right.svg"
import drop_down from "@/public/drop_down.svg"
import rocket from "@/public/rocket.svg"
import quote from "@/public/quote.svg"
import n1 from "@/public/n1.png"
import n2 from "@/public/n2.png"
import n3 from "@/public/n3.png"
import n4 from "@/public/n4.png"
import km from "@/public/km.jpeg"
import ax from "@/public/ax.jpeg"
import edit_landing from "@/public/edit_landing.svg"
import social_landing from "@/public/social_landing.svg"
import chatbot_landing from "@/public/chatbot_landing.svg"
import Accordion from './Accordion'
import TypewriterText from './TypewriterText'

const testimonials = [
    {
        id: 1,
        text: "Job seekers have had to rely on tools that are decades old, jobright.ai is leveraging advanced cutting edge AI technology to offer personalized guidance throughout the entire job search process making it much easier and faster to land interviews. Finally there’s a smarter and efficient alternative! This is a game changer!",
        author: "Kenny Mendes",
        title: "HR Leader in Tech, Chief People Officer @ Grammarly",
        size: "medium",
        margin: "ml-0",
        image: km
    },
    {
        id: 2,
        text: "In my interactions with hundreds of thousands of tech interviewees, I've met highly talented job seekers. They all express the pain of job hunting; many lack the core skills to land interviews fast. Jobright.ai is like an experienced AI career coach that streamlines the job search and resume editing process making career advancement in tech less confusing.",
        author: "Alex XU",
        title: "Author of System Design Interview <br/> - Amazon Bestseller",
        size: "large",
        margin: "ml-8",
        image: ax
    }
]

const workModelOptions = ['Onsite', 'Remote', 'Hybrid'];

const locationOptions = [
    'Grandview, MO',
    'Lake Lure, NC',
    'Watertown, WI',
    'Sauk City, WI',
    'Tok, AK',
    'Addison, IL',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA',
];

const experiencelevelOptions = [
    'Intern/New Grad',
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Lead/Staff',
    'Director/Executive',
];


const AIFeatures = () => {
    const [selectedWorkModels, setSelectedWorkModels] = useState([]);
    const [isWorkModelDropdownOpen, setIsWorkModelDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState('');
    const [isSelectedDropdownOpen, setIsExperienceDropdownOpen] = useState(false);

    const toggleWorkModel = (model) => {
        if (selectedWorkModels.includes(model)) {
            setSelectedWorkModels(selectedWorkModels.filter(item => item !== model));
        } else {
            setSelectedWorkModels([...selectedWorkModels, model]);
        }
    };

    const removeWorkModel = (model) => {
        setSelectedWorkModels(selectedWorkModels.filter(item => item !== model));
    };

    const selectLocation = (location) => {
        setSelectedLocation(location);
        setIsLocationDropdownOpen(false);
    };
    const selectExperience = (experience) => {
        setSelectedExperience(experience);
        setIsExperienceDropdownOpen(false);
    };

    return (
        <>
            <div className='bg-[#f2f4f5] py-8 sm:py-16 mx-2 sm:mx-20 rounded-[5rem] my-8 px-4 sm:px-16'>
                <h1 className="text-3xl text-center sm:text-left sm:text-5xl uppercase font-bold leading-15 py-8">
                    <TypewriterText text={"AI FEATURES"} />
                </h1>
                <h1 className='text-2xl sm:text-4xl font-normal'><Image src={ai_star} alt='star-img' className='w-12 inline' /> <b>AI Job Match</b>  / <span>Job searching is already hard! <br /> Increase your odds with AI matched Jobs</span></h1>
                <div className='flex gap-10 mb-20 border-b sm:pb-20 border-gray-200'>
                    <div className='flex flex-col justify-between  gap-4 '>
                        <ul className='list-disc px-8 sm:py-8 mt-6 text-lg leading-10'>
                            <li>Apply only to Jobs you are qualified for</li>
                            <li>Discover matched jobs based on your skills, not only titles</li>
                            <li>Say goodbye to fake jobs</li>
                            <li>Apply early with our custom job alerts</li>
                        </ul>
                        <div className=''>
                            <button className='bg-black hover:bg-black/50 cursor-pointer px-4 w-80 py-3 text-white flex justify-between items-center rounded-full'>
                                <span className='text-lg font-semibold'>Start Matching</span>
                                <span className='w-6 h-6 rounded-full bg-white flex items-center justify-center text-white'><Image src={ArrowRight} alt='arrow-right' className='w-4 h-4' /></span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[560px] '>
                        <Image src={n1} alt='n1-image' className='' />
                    </div>
                </div>
                <div className='my-8 sm:py-16'>
                    <h1 className='text-2xl sm:text-4xl font-normal'><Image src={edit_landing} alt='edit-landing' className='w-12 inline' /> <b>Resume AI</b>  / <span>Stand out from the crowd with a <br /> top notch resume</span></h1>
                    <div className='flex gap-10 border-b sm:pb-20 border-gray-200'>
                        <div className='flex flex-col justify-between  gap-4 '>
                            <ul className='list-disc px-8 sm:py-8 mt-6 text-lg leading-10'>
                                <li>Get a professional quality resume in minutes, not hours</li>
                                <li>Keep tailoring your resume with AI and catch HR’s eyes in 6 seconds</li>
                                <li>Rest easy knowing your resume will be ATS compatible</li>
                            </ul>
                            <div>
                                <button className='bg-black hover:bg-black/50 cursor-pointer px-4 w-80 py-3 text-white flex justify-between items-center rounded-full'>
                                    <span className='text-lg font-semibold'>Improve My Resume</span>
                                    <span className='w-6 h-6 rounded-full bg-white flex items-center justify-center text-white'><Image src={ArrowRight} alt='arrow-right' className='w-4 h-4' /></span>
                                </button>
                            </div>
                        </div>
                        <div className='w-[560px] '>
                            <Image src={n2} alt='n2-image' className='' />
                        </div>
                    </div>
                </div>
                <div className='my-8 sm:py-16'>
                    <h1 className='text-2xl sm:text-4xl font-normal'><Image src={social_landing} alt='social-landing' className='w-12 inline' /> <b>Insider connections</b>  / <span>Network like a pro with <br /> our recommended insider connections. Connect, <br /> get referrals, and land interviews!</span></h1>
                    <div className='flex gap-10 border-b sm:pb-20 border-gray-200'>
                        <div className='flex flex-col justify-between  gap-4 '>
                            <ul className='list-disc px-8 sm:py-8 mt-6 text-lg leading-10'>
                                <li>Increase your chances of landing an interview by 4X with insider referrals</li>
                                <li>Easily discover alumni and past colleagues within your target company</li>
                                <li>Gain access to key connections, such as hiring managers and direct reports</li>
                                <li>Easily personalize your cold outreach message with our custom templates</li>
                            </ul>
                            <div>
                                <button className='bg-black hover:bg-black/50 cursor-pointer px-4 w-80 py-3 text-white flex justify-between items-center rounded-full'>
                                    <span className='text-lg font-semibold'>Get Connected</span>
                                    <span className='w-6 h-6 rounded-full bg-white flex items-center justify-center text-white'><Image src={ArrowRight} alt='arrow-right' className='w-4 h-4' /></span>
                                </button>
                            </div>
                        </div>
                        <div className='w-[560px] '>
                            <Image src={n3} alt='n3-image' className='' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-4xl font-normal'><Image src={chatbot_landing} alt='chatbot-landing' className='w-12 inline' /> <b>Orion, your AI Copilot</b>  / <span>Job searching can be lonely. Chat with Orion for 24/7 genuine career support</span></h1>
                    <div className='flex gap-10'>
                        <div className='flex flex-col justify-between gap-4 '>
                            <ul className='list-disc px-8 sm:py-8 mt-6 text-lg leading-10'>
                                <li>Focus your efforts with a more tailored list of jobs</li>
                                <li>Wow in your interviews with specific company insights</li>
                                <li>Understand why you are a good fit for a role</li>
                                <li>Stuck in your job search or career? Get personalized guidance and coaching</li>
                            </ul>
                            <div>
                                <button className='bg-black hover:bg-black/50 cursor-pointer px-4 w-80 py-3 text-white flex justify-between items-center rounded-full'>
                                    <span className='text-lg font-semibol'>Ask Orion</span>
                                    <span className='w-6 h-6 rounded-full bg-white flex items-center justify-center text-white'><Image src={ArrowRight} alt='arrow-right' className='w-4 h-4' /></span>
                                </button>
                            </div>
                        </div>
                        <div className='w-[560px] '>
                            <Image src={n4} alt='n4-image' className='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#00f0a0] rounded-[5rem] rounded-tr-none  mx-2 sm:mx-20 my-8 px-4 sm:px-16 pt-12 pb-6">
                <h1 className="text-3xl text-center  sm:text-left sm:text-5xl uppercase font-bold leading-15">
                    <TypewriterText text={"Trusted by <br /> Industry Leaders"} delay={140} />
                </h1>
                <div className="flex flex-col items-end">
                    <div className="py-8 px-2 sm:px-8 rounded-4xl my-2">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex justify-end">
                                {/* Testimonial Cards */}
                                <div className="space-y-6 flex flex-col items-end">
                                    {testimonials.map((testimonial) => {
                                        const getCardStyles = (size) => {
                                            switch (size) {
                                                case 'large':
                                                    return {
                                                        minHeight: 'min-h-[200px]',
                                                        width: 'w-full sm:w-[60%]'
                                                    }
                                                case 'medium':
                                                    return {
                                                        minHeight: 'min-h-[160px]',
                                                        width: 'w-full sm:w-[50%]'
                                                    }
                                            }
                                        }

                                        const styles = getCardStyles(testimonial.size)
                                        return (
                                            <div key={testimonial.id} className={`bg-white rounded-4xl rounded-tr-none p-6 shadow-lg ${styles.minHeight} ${styles.width} ${testimonial.margin}`}>
                                                <div className={`flex flex-col items-start gap-4`}>
                                                    <div className="flex flex-col gap-2  sm:flex-row items-center justify-between w-full">
                                                        <Image src={quote} alt="quote" width="24" height="24" />
                                                        <div className="flex flex-col-reverse items-center sm:flex-row gap-6" >
                                                            <div className="flex flex-col  sm:items-end">
                                                                <span className="font-semibold text-gray-900 text-center sm:text-right text-xl">{testimonial.author} </span>
                                                                <span dangerouslySetInnerHTML={{ __html: testimonial.title }} className="text-sm  text-gray-600 text-center sm:text-right"></span>
                                                            </div>
                                                            <div className="bg-gray-300 rounded-full  overflow-hidden w-20 h-20">
                                                                <Image src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className={`text-gray-800 pb-4 text-base border-l-2 pl-4 leading-relaxed`}>
                                                            {testimonial.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion />
            <div className='bg-[#f2f4f5] rounded-[5rem] mx-2 sm:mx-20 my-8 px-4 sm:px-16 pt-12 pb-6 rounded-tl-none'>
                <h1 className="text-3xl text-center  sm:text-left sm:text-5xl uppercase font-bold leading-15 my-4 sm:my-8">
                    <TypewriterText text={"Find Your <br />Perfect Job in a <br /> Click!"} />
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8'>
                    <div className='bg-white px-4 py-4 rounded-2xl'>
                        <input type="text" placeholder='Job Title' className='bg-transparent border-none outline-0 placeholder:text-sm placeholder:text-black w-full' />
                    </div>
                    <div
                        className='bg-white px-4 py-4 rounded-2xl relative cursor-pointer'
                        onClick={() => setIsWorkModelDropdownOpen(!isWorkModelDropdownOpen)}
                    >
                        <div className='flex flex-wrap gap-2 items-center min-h-[20px]'>
                            {selectedWorkModels.length > 0 && (
                                <>
                                    {selectedWorkModels.slice(0, 1).map((model) => (
                                        <div key={model} className='bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1 text-sm'>
                                            <span>{model}</span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeWorkModel(model);
                                                }}
                                                className='text-gray-500 hover:text-gray-700 text-xs'
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                    {selectedWorkModels.length > 1 && (
                                        <div className='bg-gray-200 px-2 py-1 rounded-lg flex items-center gap-1 text-sm'>
                                            <span>+ {selectedWorkModels.length - 1} ...</span>
                                        </div>
                                    )}
                                </>
                            )}
                            {selectedWorkModels.length === 0 && (
                                <span className='text-gray-400 text-sm'>Work Model</span>
                            )}
                        </div>
                        <div className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                            <Image src={drop_down} alt='drop-down' className={`h-4 w-4 transition-transform duration-200 ${isWorkModelDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {isWorkModelDropdownOpen && (
                            <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10'>
                                {workModelOptions.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => toggleWorkModel(option)}
                                        className={`px-4 py-2 cursor-pointer hover:bg-[#b5ffe4] gap-2 flex items-center justify-between ${selectedWorkModels.includes(option) ? 'bg-[#b5ffe4]' : ''
                                            }`}
                                    >
                                        <span className='text-sm'>{option}</span>
                                        {selectedWorkModels.includes(option) && (
                                            <span className='text-green-600'>✓</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className='bg-white px-4 py-4 rounded-2xl relative cursor-pointer'
                        onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                    >
                        <div className='flex items-center justify-between'>
                            <span className={`text-sm ${selectedLocation ? 'text-black' : 'text-gray-400'}`}>
                                {selectedLocation || 'Location'}
                            </span>
                            <Image src={drop_down} alt='drop-down' className={`h-4 w-4 transition-transform duration-200 ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {isLocationDropdownOpen && (
                            <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-60 overflow-y-auto'>
                                <div className='px-4 py-2 font-semibold text-sm border-b border-gray-200'>Within US</div>
                                {locationOptions.map((location) => (
                                    <div
                                        key={location}
                                        onClick={() => selectLocation(location)}
                                        className={`px-4 py-2 cursor-pointer hover:bg-[#b5ffe4] flex items-center justify-between ${selectedLocation === location ? 'bg-[#b5ffe4]' : ''
                                            }`}
                                    >
                                        <span className='text-sm'>{location}</span>
                                        {selectedLocation === location && (
                                            <span className='text-green-600'>✓</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className='bg-white px-4 py-4 rounded-2xl relative cursor-pointer'
                        onClick={() => setIsExperienceDropdownOpen(!isSelectedDropdownOpen)}
                    >
                        <div className='flex items-center justify-between'>
                            <span className={`text-sm ${selectedExperience ? 'text-black' : 'text-gray-400'}`}>
                                {selectedExperience || 'Experience Level'}
                            </span>
                            <Image src={drop_down} alt='drop-down' className={`h-4 w-4 transition-transform duration-200 ${isSelectedDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {isSelectedDropdownOpen && (
                            <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-60 overflow-y-auto'>
                                {experiencelevelOptions.map((experience) => (
                                    <div
                                        key={experience}
                                        onClick={() => selectExperience(experience)}
                                        className={`px-4 py-2 cursor-pointer hover:bg-[#b5ffe4] flex items-center justify-between ${selectExperience === experience ? 'bg-[#b5ffe4]' : ''
                                            }`}
                                    >
                                        <span className='text-sm'>{experience}</span>
                                        {selectedExperience === experience && (
                                            <span className='text-green-600'>✓</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='bg-black px-6 py-4 rounded-2xl cursor-pointer flex items-center justify-center'>
                        <button className='text-white font-semibold text-sm w-[100px] cursor-pointer'>GO</button>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r  flex flex-col items-center from-[#d2ffc8] to-[#b5ffe4] rounded-[5rem] mx-4 sm:mx-20 my-4 sm:my-8 px-4 sm:px-12 pt-14 pb-6 rounded-tl-none'>
                <div className='bg-white w-30 h-30 rounded-full flex items-center justify-center'>
                    <Image src={rocket} alt='rocket-icon' className='w-15 h-15' />
                </div>
                <h1 className='max-w-3xl text-center leading-15 text-3xl sm:text-4xl font-bold pt-8'>Ensure a Fast and Successful Journey to Your Next Career Move</h1>
                <button className="bg-black rounded-full text-lg font-bold cursor-pointer text-white  px-12 py-4 my-8">Try Jobright for Free</button>
            </div>
        </>
    )
}

export default AIFeatures
