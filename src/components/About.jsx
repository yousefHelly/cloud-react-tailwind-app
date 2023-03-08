import React from 'react'
import{motion} from 'framer-motion'
import {textContainerVariants,CardContainerVariants,TextVariants} from '../animations/variants.js'
export const About = () => {
  return (
    <React.Fragment>
        <div className='container mx-auto my-12 '>
            <motion.section variants={textContainerVariants}  initial='init' viewport={{once:true}} whileInView='show' id='About' className='flex flex-col items-center justify-center'>
                <motion.h2 variants={TextVariants} className='text-3xl text-center dark:text-slate-200  md:text-4xl font-bold'>Trusted by developers across the world</motion.h2>
                <motion.p variants={TextVariants} className='my-4 text-center dark:text-slate-300  text-zinc-500 text-xl'>Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.</motion.p>
                <motion.div  variants={CardContainerVariants}  initial='init' viewport={{once:true}} whileInView='show' className='grid gap-3 w-full px-20 md:grid-cols-2 lg:grid-cols-3'>
                    <motion.div variants={TextVariants} className='text-center rounded-sm shadow-md py-5 bg-indigo-500/10 backdrop-blur-sm'>
                        <span className='text-indigo-500 text-5xl font-bold'>100%</span>
                        <p className='text-zinc-500'>Completion</p>
                    </motion.div>
                    <motion.div variants={TextVariants} className='text-center rounded-sm shadow-md py-5 bg-indigo-500/10 backdrop-blur-sm'>
                        <span className='text-indigo-500 text-5xl font-bold'>24/7</span>
                        <p className='text-zinc-500'>Delivery</p>
                    </motion.div>
                    <motion.div variants={TextVariants} className='text-center rounded-sm shadow-md py-5 bg-indigo-500/10 backdrop-blur-sm'>
                        <span className='text-indigo-500 text-5xl font-bold'>100K</span>
                        <p className='text-zinc-500'>Transactions</p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    </React.Fragment>
  )
}
