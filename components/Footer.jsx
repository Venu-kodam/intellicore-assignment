import React from 'react'
import logo_text from "@/public/logo_text.svg"
import linkedin from "@/public/linkedin.svg"
import instagram from "@/public/instagram.svg"
import tiktok from "@/public/tiktok.svg"
import twitter from "@/public/twitter.svg"
import youtube from "@/public/youtube.svg"
import facebook from "@/public/facebook.svg"
import Image from 'next/image'

const logoItems = [linkedin, instagram, tiktok, twitter, youtube, facebook]
const footerData = [
    {
        title: "Features",
        links: ["Resume AI", "AI Job Match", "Insider Connections", "AI Copilot Orion", "Job Autofill", "H1B Jobs"],
    },
    {
        title: "Blog",
        links: ["Is Jobright Legit?", "Success Stories from Jobright Users", "What Top AI Companies Are Looking For", "Jobright AI Agent Launch", "Top Entry Level Jobs"],
    },
    {
        title: "Related Tools",
        links: ["AI Job Assistant", "AI Cover Letter Generator", "AI Resume Helper", "AI Job Tracker"],
    },
    {
        title: "Information",
        links: ["About Us", "Privacy Policy", "Terms of Service", "Partners"],
    },
];
const Footer = () => {
    return (
        <div className='mx-2 sm:mx-20 my-8 pt-14 pb-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src={logo_text} alt='logo-text' />
                </div>
                <div className='flex gap-3'>
                    {logoItems.map((logoitem, index) => <Image key={index} src={logoitem} alt={`image -${index}`} />)}
                </div>
            </div>
            <div>
                <div className="container my-8 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
                            <ul className="space-y-1">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href="#"
                                            className="text-xs  transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
