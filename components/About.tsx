import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img initial={{scale:0.75, opacity:0,}} transition={{duration:1.2,}} whileInView={{scale:1, opacity:1,}} viewport={{once:true,}} className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]" src="/profile-pic.png"/>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]-50'>little</span> background</h4>
            <p className='text-sm'>Currently an undergraduate student completing a Bachelor’s in Computer Science at Swinburne University of Technology. Experienced in full-stack development with a particular interest in developing interactive and user-friendly applications. I’m keen on gaining an insight into business operations with the intention to work with real clients and provide software solutions that would streamline their output. I am excited to explore the various challenges within the industry and provide value to it with the knowledge I have accumulated over my tertiary education.</p>
        </div>
    </motion.div>
  )
}

export default About