import React from 'react'
import { motion } from 'framer-motion'
import { Experience, Technology } from "../typings"
import { urlFor } from '@/sanityExport';

type Props = {
  experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-screen h-2/3 md:h-[600px] mt-20 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden'>
        <motion.img initial={{y:-100, opacity: 0,}} transition={{duration:1.2}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-scale-down' src={urlFor(experience?.companyImage).url()} alt="CLOCS-A Icon" />
        <div className='px-10 md:px-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                {experience.technologies.map(technology => (
                  <img key={technology._id} className='h-10 w-10 rounded-full' src={urlFor(technology.image).url()} alt=""/>
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin'>
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard