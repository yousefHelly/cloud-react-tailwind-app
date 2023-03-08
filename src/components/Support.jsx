import React,{useRef} from 'react'
import supportImg from '../assets/support.jpg'
import {FaPhoneAlt, FaTeamspeak ,FaPaintRoller ,FaArrowRight} from 'react-icons/fa'
import {motion,useScroll, useTransform,useMotionValueEvent} from 'framer-motion'
import { CardContainerVariants, textContainerWithoutXVariants, TextVariants } from './../animations/variants';
export const Support = () => {
    const support = useRef(0)
    const img =useRef(0)
    const {scrollYProgress} = useScroll({
        target:support,
        offset: ["start end", "end end"]
    })
    const y = useTransform(scrollYProgress,[0,1],['0vh','-10vh'])
    useMotionValueEvent(y,'change',(y)=>img.current.style.transform = `translateY(${y})`)

    const scale = useTransform(scrollYProgress,[0,1],[1,0.95])
    useMotionValueEvent(scale,'change',(scale)=>img.current.style.scale = `${scale}`)

    const opacity = useTransform(scrollYProgress,[0,1],[1,0])
    useMotionValueEvent(opacity,'change',(opacity)=>img.current.style.opacity = `${opacity}`)
  return (
    <section className='w-full relative my-12' id='Support'>
        <div className='absolute overflow-hidden w-full h-[500px] bg-gray-900/90'>
            <motion.img ref={img} className='w-full h-full  mix-blend-overlay object-cover' src={supportImg}/>
        </div>
        <motion.div variants={textContainerWithoutXVariants} ref={support} initial='init' viewport={{once:true}} whileInView='show' className='relative text-white md:py-12 md:mb-12'>
            <motion.h3 variants={TextVariants} className='text-slate-100 dark:text-slate-300 uppercase text-center mt-12 mb-7 text-3xl'>Support</motion.h3>
            <motion.h2 variants={TextVariants} className='text-slate-50 dark:text-slate-200 text-4xl text-center mb-7 font-bold'>Finding the right team</motion.h2>
            <motion.p variants={TextVariants} className=' container mx-auto text-center text-slate-400 text-xl md:text-2xl'>
            Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
            Lorem, ipsum dolor sit ames consectetur dicing elite.
            </motion.p>
        </motion.div>
        <div className='relative'>
            <motion.div variants={CardContainerVariants} ref={support} initial='init' viewport={{once:true}} whileInView='show' className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 mx-16 gap-10'>
                <motion.div  variants={TextVariants} className='bg-slate-50 dark:bg-slate-800 relative rounded-xl shadow-lg'>
                    <div className='text-white dark:text-slate-200 ml-5 bg-indigo-500 w-fit p-3 rounded-lg absolute top-0 -translate-y-1/2'>
                        <FaPhoneAlt className='text-xl'/>
                    </div>
                    <div className='pt-10 pb-5 px-6'>
                        <h3 className='font-bold text-xl dark:text-slate-200 mb-3'>Sales</h3>
                        <p className='dark:text-slate-300'>Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
                        Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
                    </div>
                    <div className='bg-slate-200 dark:bg-slate-900 py-3 rounded-b-xl'>
                        <a className='bg-transparent text-indigo-800 font-bold border-none mx-6 flex items-center gap-1'>Contact Us <FaArrowRight/></a>
                    </div>
                </motion.div>
                <motion.div  variants={TextVariants} className='bg-slate-50 dark:bg-slate-800  relative rounded-xl shadow-lg'>
                    <div className='text-white dark:text-slate-200 ml-5 bg-indigo-500 w-fit p-3 rounded-lg absolute top-0 -translate-y-1/2'>
                        <FaTeamspeak className='text-xl'/>
                    </div>
                    <div className='pt-10 pb-5 px-6'>
                        <h3 className='font-bold text-xl dark:text-slate-200 mb-3'>Technical Support</h3>
                        <p className='dark:text-slate-300'>Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
                        Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
                    </div>
                    <div className='bg-slate-200 dark:bg-slate-900 py-3 rounded-b-xl'>
                        <a className='bg-transparent text-indigo-800 font-bold border-none mx-6 flex items-center gap-1'>Contact Us <FaArrowRight/></a>
                    </div>
                </motion.div>
                <motion.div  variants={TextVariants} className='bg-slate-50 dark:bg-slate-800  relative rounded-xl shadow-lg'>
                    <div className='text-white dark:text-slate-200 ml-5 bg-indigo-500 w-fit p-3 rounded-lg absolute top-0 -translate-y-1/2'>
                        <FaPaintRoller className='text-xl'/>
                    </div>
                    <div className='pt-10 pb-5 px-6'>
                        <h3 className='font-bold dark:text-slate-200 text-xl mb-3'>Media Inquiries</h3>
                        <p className='dark:text-slate-300'>Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
                        Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
                    </div>
                    <div className='bg-slate-200 dark:bg-slate-900 py-3 rounded-b-xl'>
                        <a className='bg-transparent text-indigo-800 font-bold border-none mx-6 flex items-center gap-1'>Contact Us <FaArrowRight/></a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}
