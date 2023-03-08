import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 dark:bg-zinc-900 min-h-[250px] text-slate-100'>
        <div className='container gap-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-12 md:px-24 pt-12'>
            <div className='flex flex-col'>
                <h4 className='text-xl dark:text-slate-200 font-bold uppercase'>Solutions</h4>
                <div className='ul pl-2 flex flex-col gap-2 mt-3 text-slate-300'>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Data</p>
                <p>Cloud</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-xl dark:text-slate-200 font-bold uppercase'>Support</h4>
                <div className='ul pl-2 flex flex-col gap-2 mt-3 text-slate-300'>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-xl dark:text-slate-200 font-bold uppercase'>Company</h4>
                <div className='ul pl-2 flex flex-col gap-2 mt-3 text-slate-300'>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Partners</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-xl dark:text-slate-200 font-bold uppercase'>Legal</h4>
                <div className='ul pl-2 flex flex-col gap-2 mt-3 text-slate-300'>
                <p>Clint</p>
                <p>Privet</p>
                <p>Politics</p>
                <p>Terms</p>
                </div>
            </div>
            <div className='md:col-span-2 flex flex-col gap-3'>
            <h4 className='text-xl font-bold uppercase'>Subscribe to our newsletter</h4>
            <div className='flex flex-col gap-2  text-slate-300'>
            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
            </div>
            <div className='flex'>
                <input type="text" className='py-2 px-3 border rounded rounded-r-none focus-within:outline-none text-black dark:text-slate-200 dark:bg-zinc-800 dark:border-indigo-900' placeholder='Enter your Email' />
                <button className='rounded-l-none px-3'>Subscribe</button>
            </div>
        </div>
        </div>
        <div className='container mx-auto px-12 md:px-24 py-8'>
            <div className='w-full h-[1px] bg-gray-500'/>
            <div className='flex py-3 flex-col gap-3 items-center md:flex-row md:justify-between'>
                <p className='text-slate-400'>2022 Workflow,Cairo. All rights reserved.</p>
                <div className='ul mr-5 flex gap-8 text-slate-400 text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
            </div>
        </div>
    </footer>
  )
}
