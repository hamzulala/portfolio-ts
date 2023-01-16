import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden'>
        <motion.img initial={{y:-100, opacity: 0,}} transition={{duration:1.2}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-scale-down' src="https://clocs-a.org.au/wp-content/uploads/2021/09/cropped-CLOCS-A-white-1.png" alt="CLOCS-A Icon" />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Job Title</h4>
            <p className='font-bold text-2xl mt-1'>Company</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                <img className='h-10 w-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=826&t=st=1673876490~exp=1673877090~hmac=af55bad04f367de53dd38cfda37d20ac61b3cef73d715ac58e9cb25deaaaa947" alt=""/>
                
                {/* Tech used */}
                <img className='h-10 w-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=826&t=st=1673876490~exp=1673877090~hmac=af55bad04f367de53dd38cfda37d20ac61b3cef73d715ac58e9cb25deaaaa947" alt=""/>
                
                {/* Tech used */}
                <img className='h-10 w-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=826&t=st=1673876490~exp=1673877090~hmac=af55bad04f367de53dd38cfda37d20ac61b3cef73d715ac58e9cb25deaaaa947" alt=""/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Point..</li>
                <li>Summary Point..</li>
                <li>Summary Point..</li>
                <li>Summary Point..</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard