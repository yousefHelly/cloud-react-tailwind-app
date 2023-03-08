import React,{useEffect, useRef, useState} from 'react'
import{FaBars, FaChevronUp, FaMoon, FaSun} from 'react-icons/fa'
import{AiOutlineClose} from 'react-icons/ai'
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { navBarVariants , darkModeTogglerVariants } from '../animations/variants'
const ScrollToTopBtn = ()=>{
    const [showBtn, setShowBtn] = useState(false)
    const r = 20
    const circle = useRef(0)
    let circumference = 2*Math.PI*20
    const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
        latest>=0.15?setShowBtn(true):setShowBtn(false)
        circle.current.style.strokeDashoffset = circumference - (circumference*latest)
    })
    return(
        <React.Fragment>
        <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}} className='fixed right-4 bottom-4 z-10'>
        <svg width='50' height='50' className='-rotate-90'>
            <motion.circle ref={circle} className='fill-none stroke-indigo-500 stroke-2' style={{strokeDasharray:`${2*Math.PI*20}px`,strokeDashoffset:`${circumference}px`}} r={`${r}px`} cx='25' cy='25'></motion.circle>
        </svg>
        <AnimatePresence>
        {
            showBtn && <motion.span initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><FaChevronUp onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} className='absolute cursor-pointer right-4 bottom-4 pr-[2px] pb-[2px] text-indigo-500'/></motion.span>
        }
        </AnimatePresence>
        </motion.div>
        </React.Fragment>
    )
}


export const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [dark,setDark] = useState(false)
    useEffect(()=>{
        const current = JSON.parse(localStorage.getItem('dark'))
        if(current){
            setDark(true)
            document.querySelector('html').classList.add('dark')
        }else{
            setDark(false)
        }
    },[])
    const clickHandler = ()=>setNav(!nav)
    const darkModeHandler = ()=>{
        !dark?document.querySelector('html').classList.add('dark'):document.querySelector('html').classList.remove('dark')
        !dark?localStorage.setItem('dark',true):localStorage.setItem('dark',false)
        setDark(!dark)
    }
  return (
    <React.Fragment>
    <div className='w-screen flex fixed bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 h-[80px] shadow-md z-10'>
        <div className='container mx-auto'>
            <div className='px-2 w-full h-full flex justify-between items-center'>
                <div className='flex items-center'>
                    <h1 className='text-3xl sm:text-4xl mr-4 font-bold'>Brand.</h1>
                    <ul className='hidden md:flex'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Support">Support</a></li>
                        <li><a href="#Platform">Platforms</a></li>
                        <li><a href="#Pricing">Pricing</a></li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                <AnimatePresence initial={false} mode='wait'>
                {
                    dark?
                        <motion.span key='dark' initial={{y:-50 ,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-50 ,opacity:0}} className='self-center'><FaSun onClick={darkModeHandler} className='text-xl text-slate-200 mx-3 cursor-pointer hover:text-indigo-500'/></motion.span>
                    :
                        <motion.span key='light' initial={{y:-50 ,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-50 ,opacity:0}} className='self-center'><FaMoon onClick={darkModeHandler} className='text-xl text-indigo-500 mx-3 cursor-pointer hover:text-zinc-900'/></motion.span>

                }
                </AnimatePresence>
                    <a className='bg-transparent border-none self-center p-3 cursor-pointer hover:text-indigo-500'>Sign In</a>
                    <button className='px-3 py-2'>Sign Up</button>
                </div>
                { 
                    nav? <AiOutlineClose onClick={()=>clickHandler()} className='text-2xl self-center mr-4 sm:m-0 md:hidden cursor-pointer hover:text-indigo-600'/>
                    :<FaBars onClick={()=>clickHandler()} className='text-2xl self-center mr-4 sm:m-0 md:hidden cursor-pointer hover:text-indigo-600'/>
                }
                <AnimatePresence>                
                {
                    nav&&
                    <motion.div variants={navBarVariants} animate='open' exit='close' className='absolute left-0 top-[80px] px-3 w-full bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300'>
                        <ul className='pb-5'>
                        <li className='border-b-2 border-zinc-400'><a href="#">Home</a></li>
                        <li className='border-b-2 border-zinc-400'><a href="#About">About</a></li>
                        <li className='border-b-2 border-zinc-400'><a href="#Support">Support</a></li>
                        <li className='border-b-2 border-zinc-400'><a href="#Platform">Platforms</a></li>
                        <li className='border-b-2 border-zinc-400'><a href="#Pricing">Pricing</a></li>
                        </ul>
                        <div className='flex flex-col pb-5'>
                        <AnimatePresence initial={false} mode='wait'>
                        {
                            dark?
                                <motion.span key='dark' variants={darkModeTogglerVariants} initial='init' animate='show' exit='exit' className='self-center'><FaSun onClick={darkModeHandler} className='text-3xl text-slate-200 m-5 cursor-pointer hover:text-indigo-500'/></motion.span>
                            :
                                <motion.span key='light' variants={darkModeTogglerVariants} initial='init' animate='show' exit='exit'  className='self-center'><FaMoon onClick={darkModeHandler} className='text-3xl text-indigo-500 m-5 cursor-pointer hover:text-zinc-900'/></motion.span>        
                        }
                        </AnimatePresence>
                        <button className='bg-transparent px-3 py-2 text-black mb-4'>Sign In</button>
                        <button className='px-3 py-2'>Sign Up</button>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
    </div>
    <ScrollToTopBtn/>
    </React.Fragment>
  )
}
