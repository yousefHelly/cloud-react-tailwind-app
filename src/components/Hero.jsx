import React from 'react'
import img from '../assets/cyber-bg.png'
import{FaDatabase, FaCloud} from 'react-icons/fa'
import{RiDashboardFill, RiSendPlane2Fill} from 'react-icons/ri'
import {motion} from 'framer-motion'
import {textContainerVariants, ImgVariants, FeaturesVariants, TextVariants} from '../animations/variants.js'

export const Hero = () => {
  return (
    <React.Fragment>
        <div className='relative pt-[125px] md:pt-[80px] bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 min-h-screen flex flex-col justify-center items-center text-center md:text-start md:items-start'>
          <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-5'>
              <motion.div variants={textContainerVariants} initial='init' animate='show' className='flex flex-col justify-center items-center md:items-start'>
                <motion.p variants={TextVariants} className='text-2xl dark:text-slate-300'>Unique Sequencing & production</motion.p>
                <motion.h1 variants={TextVariants} className='my-3 text-4xl dark:text-slate-200  font-bold md:text-5xl'>Cloud Management</motion.h1>
                <motion.p variants={TextVariants} className='text-2xl dark:text-slate-300 '>This is our tech brand</motion.p>
                <motion.button variants={TextVariants} className='py-2 px-3 my-4 w-48'><a href="#Support">Get Started</a></motion.button>
              </motion.div>
              <motion.div variants={ImgVariants} initial='init' animate='show' >
                <img className='max-w-[20rem] mx-auto md:max-w-full ' src={img}/>
              </motion.div>
              <motion.div variants={FeaturesVariants} initial={`${window.innerWidth>=768?'init':'mobInit'}`} animate={`${window.innerWidth>=768?'show':'mobShow'}`} className='md:absolute md:left-1/2 md:bottom-5 p-5 md:-translate-x-1/2 flex flex-col bg-zinc-50/25 backdrop-blur-[5px] dark:text-slate-300 shadow-lg rounded-sm'>
                <h3 className='font-bold text-center mb-2'>Data Services</h3>
                <div className='flex flex-wrap flex-col md:flex-row gap-5'>
                  <p className='flex items-center gap-2'><FaDatabase className='text-indigo-700'/> App Security</p>
                  <p className='flex items-center gap-2'><RiDashboardFill className='text-indigo-700'/> Dashboard Design</p>
                  <p className='flex items-center gap-2'><FaCloud className='text-indigo-700'/> Cloud Data</p>
                  <p className='flex items-center gap-2'><RiSendPlane2Fill className='text-indigo-700'/> API Services</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}