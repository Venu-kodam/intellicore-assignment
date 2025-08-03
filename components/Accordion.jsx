"use client"
import { ChevronDownCircle } from 'lucide-react'
import React, { useState } from 'react'
import TypewriterText from './TypewriterText'

const faqItems = [
    {
        question: "How is Jobright different from other job platforms like LinkedIn?",
        answer: "The most unique thing about Jobright.ai is that it accompanies you on your job search, unlike LinkedIn and Indeed where you’re on your own. With Jobright, it’s like having an experienced career coach guiding you towards your next dream role. Our platform saves you hours through built-in automation for every step of the job search, making the process more efficient and tailored to your needs.",
    },
    {
        question: "Will Jobright share my personal information?",
        answer: "No, Jobright takes your privacy seriously. We do not share your personal information with third parties without your consent. Your information is used solely to provide you with AI job matching, resume tailoring, and other personalized services within the Jobright.ai platform.",
    },
    {
        question: "Is Jobright free to use?",
        answer: "Yes, all features on Jobright.ai are free to use. We strive to provide every user with equal opportunities for better job search results. However, due to higher service costs, certain features like resume tailoring have daily usage limits. For users seeking more extensive usage, we also offer a paid option for unlimited access.",
    },
    {
        question: "Where do Jobright's job listings come from?",
        answer: "Our job listings primarily come from the career sites of hundreds of thousands of companies, ensuring that you have access to a wide range of opportunities. Additionally, we aggregate the latest job postings from major job platforms, so you don’t have to switch between multiple sites. Jobright continuously screens all new job postings, removing fake listings to ensure a reliable and trustworthy job search experience for you.",
    },
    {
        question: "What regions does Jobright's service cover?",
        answer: "Our primary service is currently within the United States. Additionally, we offer job search options that support H1B visas and remote working. We’re continuously expanding into new regions and will keep our users informed as we grow.",
    },
    {
        question: "I have more questions!",
        answer: "Please contact support@jobright.ai if you need any help or have questions or feedback for us. Thanks for joining this journey with us!",
    },
]

const Accordion = () => {
    const [openItem, setOpenItem] = useState(0);
    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    return (
        <div className='bg-[#f2f4f5] rounded-[5rem] mx-2 sm:mx-20 my-8 px-4 sm:px-16 pt-12 pb-6 rounded-tl-none'>
            <h1 className="text-3xl text-center  sm:text-left sm:text-5xl uppercase font-bold leading-15">
                <TypewriterText text={"Frequently <br />Asked Questions"} />
            </h1>
            <div className="w-full flex flex-col sm:items-end">
                {faqItems.map((faq, index) => (
                    <div key={index} className="bg-white w-full sm:w-[50%] rounded-3xl  my-2 px-8 py-8">
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full cursor-pointer text-base font-semibold hover:no-underline group flex justify-between items-start"
                        >
                            <div className="flex-1 text-left">
                                <span>{faq.question}</span>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="text-gray-600 leading-relaxed text-sm pb-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                            <ChevronDownCircle
                                className={`h-6 w-6 flex-shrink-0 transition-transform duration-300 ease-in-out ${openItem === index ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion
