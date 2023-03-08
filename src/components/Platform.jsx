import React,{useRef} from 'react'
import {FaCheck} from 'react-icons/fa'
import {motion, useScroll, useTransform, useMotionValueEvent, useSpring} from 'framer-motion'
import {TextVariants, textContainerVariants } from './../animations/variants';
export const Platform = () => {
    const platforms = useRef(0)
    const platformsInner1 = useRef(0)
    const {scrollYProgress} = useScroll({
        target:platforms
    })
    const xSpring = useSpring(scrollYProgress)
    const scale = useTransform(xSpring,[0,1],[1,0.75])
    useMotionValueEvent(scale,'change',(latest)=>{
        platformsInner1.current.style.transform=`scale(${latest})`
    })
  return (
    <section ref={platforms} className='overflow-x-hidden' id='Platform'>
    <div className="container mx-auto my-12">
        <motion.div variants={textContainerVariants} initial='init' viewport={{once:true}} whileInView='show'>
            <motion.h2 variants={TextVariants} className='text-4xl dark:text-slate-200 md:text-5xl text-center font-bold'>All-In-One Platform</motion.h2>
            <motion.p variants={TextVariants} className='text-center dark:text-slate-300 text-slate-600 my-5 text-xl md:text-2xl'>
            Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs.
            </motion.p>
        </motion.div>
    <motion.div ref={platformsInner1} className='grid gap-2 py-5 mx-5 lg:mx-12 sm:grid-cols-2 md:grid-cols-3 dark:text-slate-300 lg:grid-cols-4'>
        <div>
            <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
            <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
            <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
            <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
            <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
            <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
            <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
            <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
            <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
            <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
        <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
        <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
        <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
        <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
        <div>
        <h3 className='my-3 font-bold text-xl flex items-center gap-3'><FaCheck className='text-indigo-500'/> Notification</h3>
        <p className='pl-8'> Lorem, ipsum dolor sit ames consectetur dicing elite. A dolores priam dolorous tempore voluptuary nobs. Lorem, ipsum dolor sit ames consectetur dicing elite.</p>
        </div>
    </motion.div>
    </div>
    </section>
  )
}
