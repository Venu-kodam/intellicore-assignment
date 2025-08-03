"use client"
import Image from "next/image"
import React, { useRef, useState } from "react"
import img_none from "@/public/img_none.svg"
import quote from "@/public/quote.svg"
import love_landing from "@/public/love_landing.svg"
import fh from "@/public/fh.jpeg"
import tc from "@/public/tc.jpeg"
import ts from "@/public/ts.jpeg"
import cl from "@/public/cl.jpeg"
import bg from "@/public/bg.jpeg"
import gb from "@/public/gb.jpeg"
import vid from "@/public/vid.jpg"
import play from "@/public/play.svg"
import TypewriterText from "./TypewriterText"
const jobs = [
    { company: "Hyatt", time: "12 hours ago", position: "Director of Sales" },
    { company: "Zynga", time: "50 hours ago", position: "Data Analyst" },
    { company: "Sfk groups", time: "12 hours ago", position: "Dealer sales director" },
    { company: "Adobe", time: "2 hours ago", position: "Software Engineer" },
    { company: "Exploratorium", time: "8 hours ago", position: "Marketing Co-ordinator" },
    { company: "EDO", time: "24 hours ago", position: "Senior Data analyst" },
    { company: "Netflix", time: "6 hours ago", position: "Data Scientist" },
    { company: "Jun group", time: "18 hours ago", position: "Product Manager" },
    { company: "Roku", time: "12 hours ago", position: "Frontend Developer" },
    { company: "Jacobs", time: "6 hours ago", position: "Junior software engineer" },
    { company: "Kensho", time: "10 hours ago", position: "DevOps Engineer" },
    { company: "Airbnb", time: "16 hours ago", position: "UX Designer" }
]

const testimonials = [
    {
        id: 1,
        text: "I am able to find more relevant jobs faster, since using Jobright I have tripled my interview rate. I am truly impressed.",
        author: "Fred H.",
        title: "Senior Software Engineer",
        size: "medium",
        margin: "ml-0",
        image: fh
    },
    {
        id: 2,
        text: "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!!",
        author: "Tracy C.",
        title: "Sr. Digital Marketing Manager",
        size: "large",
        margin: "ml-8",
        image: tc
    },
    {
        id: 3,
        text: "You must check out Jobright. It has been saving me hours in my job search! I'm blown away at how easy it is to use!!",
        author: "Tyler S.",
        title: "Instructional Designer",
        size: "small",
        margin: "ml-4",
        image: ts
    },
    {
        id: 4,
        text: "I've enjoyed seeing so many matching jobs. This has completely revamped my job search process. Excited to keep exploring!",
        author: "Chelsea L.",
        title: "Senior Recruiter",
        size: "medium",
        margin: "ml-12",
        image: cl
    },
    {
        id: 5,
        text: "It’s a 10/10!! Especially the resume editor which helps me very easily write the content to match the job description. The AI guidance and support has been game changing. Loving it so far!",
        author: "Brandi G.",
        title: "Software Engineer",
        size: "small",
        margin: "ml-12",
        image: bg
    },
    {
        id: 6,
        text: "Not only does jobright show you the most relevant jobs it ALSO helps you network and get potential referrals! The matching system uses my experience, skills, and so much more to find the best fit. Definitely recommend!",
        author: "Gabriella B.",
        title: "LinkedIn Strategist",
        size: "large",
        margin: "ml-12",
        image: gb
    },
]
const JobsSection = () => {
    const [done, setDone] = useState(false);
    return (
        <div className="mt-120 sm:my-0 mx-2 sm:mx-20">
            <div className='bg-[#f2f4f5] py-16 rounded-[5rem] rounded-tl-none my-6'>
                <div className='max-w-7xl mx-auto '>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 mx-8 gap-8 mb-12'>
                        <div className='border-none sm:border-r-2 pr-8'>
                            <h2 className='text-xl font-bold text-gray-900 mb-4'>
                                Never Miss Out On New Jobs Again. <br />Join The Largest Job Board!
                            </h2>
                        </div>
                        <div className='border-none sm:border-r-2 pr-8'>
                            <div className='text-5xl font-bold text-gray-900 mb-2'>400,000+</div>
                            <div className='text-lg font-medium text-gray-600'>Today's new jobs</div>
                        </div>
                        <div className=''>
                            <div className='text-5xl font-bold text-gray-900 mb-2'>8,000,000+</div>
                            <div className='text-lg font-medium text-gray-600'>Total jobs</div>
                        </div>
                    </div>
                    {/* Scrolling Jobs Section */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll hover:pause-scroll">
                            {jobs.map((job, index) => (
                                <div key={index} className="flex-shrink-0 bg-gray-100 rounded-xl p-6 mx-3 min-w-[320px]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <Image src={img_none} alt="img-none" className="w-12 h-12 rounded-lg" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-900 text-sm">{job.company} </span>
                                                <span className="text-sm">.{job.time}</span>
                                            </div>
                                            {/* <span className="text-gray-600"></span> */}
                                            <span className=" text-lg font-semibold">{job.position}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate jobs for seamless loop */}
                            {jobs.map((job, index) => (
                                <div key={`duplicate-${index}`} className="flex-shrink-0 bg-gray-100 rounded-xl p-6 mx-3 min-w-[320px]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <Image src={img_none} alt="img-none" className="w-12 h-12 rounded-lg" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-900 text-sm">{job.company} </span>
                                                <span className="text-sm">.{job.time}</span>
                                            </div>
                                            <span className=" text-lg font-semibold">{job.position}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#00f0a0] rounded-[5rem] rounded-tr-none px-4 sm:px-16 pt-12 pb-6">
                <h1 className="text-3xl text-center sm:text-left sm:text-5xl uppercase font-bold leading-15">
                    <TypewriterText text={"520,000+ happy<br/>users' love"} />
                </h1>

                <div className="flex flex-col items-end">
                    <span className="text-right">
                        <Image src={love_landing} alt="love-landing" />
                    </span>
                    <p>Thank you for your praise and suggestions. With your support, we can go further. We hope to accompany</p>
                    <p>you throughout your job search journey.</p>
                    <div className="py-8 sm:px-8 rounded-4xl my-2">
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
                                                case 'small':
                                                    return {
                                                        minHeight: 'min-h-[140px]',
                                                        width: 'w-full sm:w-[47%]'
                                                    }
                                            }
                                        }

                                        const styles = getCardStyles(testimonial.size)
                                        return (
                                            <div key={testimonial.id} className={`bg-white rounded-4xl rounded-tr-none p-6 shadow-lg ${styles.minHeight} ${styles.width} ${testimonial.margin}`}>
                                                <div className={`flex flex-col items-start gap-4`}>
                                                    <div><Image src={quote} alt="quote" className="w-6" /></div>
                                                    <div className="flex-1">
                                                        <p className={`text-gray-800 pb-4 text-base leading-relaxed`}>
                                                            {testimonial.text}
                                                        </p>
                                                        <div className={`flex items-center gap-4 border-gray-200`}>
                                                            <div className="bg-gray-300 rounded-full overflow-hidden w-8 h-8">
                                                                <Image src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div>
                                                                <span className="font-semibold text-gray-900">{testimonial.author} </span>
                                                                <span className="text-sm text-gray-600">/ {testimonial.title}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className={`flex flex-col items-center sm:flex-row gap-4 bg-white rounded-4xl rounded-tr-none p-6 shadow-lg w-full sm:w-[60%]`}>
                                        <div>
                                            <Image src={vid} alt="vid" width={150} height={100} className=" rounded-full sm:rounded-lg w-12  h-12  sm:w-40 sm:h-full" />
                                        </div>
                                        <div className="flex flex-col items-start gap-4">
                                            <div><Image src={quote} alt="quote" className="w-6" /></div>
                                            <div className="flex-1">
                                                <p className={`text-gray-800 pb-4 text-base leading-relaxed`}>
                                                    It's an AI tool that is just amazing. It scans your resume and finds jobs and tells you within a percentage exactly how likely you are to be a match for that job.
                                                </p>
                                                <div className={`flex items-center gap-4 border-gray-200`}>
                                                    <button className="rounded-full bg-black  text-white px-6 py-1.5 flex items-center gap-2">
                                                        <span><Image src={play} alt="play-button" className="w-6 h-6" /> </span> Watch full video
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobsSection
