import React from 'react'
import { FaCheck } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { CardContainerVariants, textContainerVariants, TextVariants } from './../animations/variants';
export const Pricing = () => {
  return (
    <section className='relative my-12' id='Pricing'>
        <div className='absolute w-full h-[500px] bg-gray-900'>
        </div>
        <motion.div variants={textContainerVariants} initial='init' viewport={{once:true}} whileInView='show' className='relative text-white md:py-12 md:mb-12'>
            <motion.h3 variants={TextVariants} className='text-slate-100 dark:text-slate-300 uppercase text-center mt-12 mb-7 text-3xl'>Pricing</motion.h3>
            <motion.h2 variants={TextVariants} className='text-slate-50 dark:text-slate-200 text-4xl text-center mb-7 font-bold'>The right price for your research</motion.h2>
            <motion.p variants={TextVariants} className=' container dark:text-slate-400 mx-auto text-center text-slate-300 text-xl md:text-2xl'>
            Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
            Lorem, ipsum dolor sit ames consectetur dicing elite.
            </motion.p>
        </motion.div>
        <div className='relative'>
            <motion.div variants={CardContainerVariants} initial='init' viewport={{once:true}} whileInView='show' className='mt-12 grid lg:grid-cols-2 mx-12 md:mx-24 gap-12'>
                <motion.div variants={TextVariants} className='bg-slate-50 dark:text-slate-200 dark:bg-slate-800   p-6 relative rounded-xl shadow-lg'>
                    <span className='text-indigo-900 dark:text-slate-300 rounded-3xl px-2 bg-indigo-400 dark:bg-indigo-900 uppercase'>
                        Standard
                    </span>
                    <h3 className='font-bold text-4xl my-3'>$49 <span className='text-xl ml-[-0.5rem]'>/mo</span></h3>
                    <p className='text-xl'>Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
                    <div className='py-5'>
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-3 text-slate-900 dark:text-slate-300'><FaCheck className='text-indigo-600'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 text-slate-800 dark:text-slate-400'><FaCheck className='text-indigo-500'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 text-slate-700 dark:text-slate-500'><FaCheck className='text-indigo-400'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 text-slate-600 dark:text-slate-600'><FaCheck className='text-indigo-300'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 text-slate-500 dark:text-slate-700'><FaCheck className='text-indigo-200'/>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <button className='w-full py-2 rounded-none'>Get Started</button>
                </motion.div>
                <motion.div variants={TextVariants} className='bg-slate-50 dark:text-slate-200 dark:bg-slate-800  p-6 relative rounded-xl shadow-lg'>
                    <span className='text-indigo-900 dark:text-slate-300 rounded-3xl px-2  bg-indigo-400 dark:bg-indigo-900  uppercase'>
                        Enterprise
                    </span>
                    <h3 className='font-bold text-4xl my-3'>$89 <span className='text-xl ml-[-0.5rem]'>/mo</span></h3>
                    <p className='text-xl'>Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
                    <div className='py-5'>
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-3 dark:text-slate-300'><FaCheck className='text-indigo-600'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 dark:text-slate-400'><FaCheck className='text-indigo-500'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 dark:text-slate-500'><FaCheck className='text-indigo-400'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 dark:text-slate-600'><FaCheck className='text-indigo-300'/>Lorem ipsum dolor</p>
                            <p className='flex items-center gap-3 dark:text-slate-700'><FaCheck className='text-indigo-200'/>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <button className='w-full py-2 rounded-none'>Get Started</button>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}
