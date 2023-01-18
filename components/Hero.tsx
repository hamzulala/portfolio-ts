import { urlFor } from '@/sanity';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Full-Stack-Developer.tsx",
            "Web-Developer.json",
            "<TypeScript-Developer/>",
            "<JavaScript-Developer/>",
            "<React-Native-Developer/>",
            "<ReactJS-Developer/>",
            "<Android-Developer/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt="Hamza's Profile Picture"/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-1 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
        <div className='pt-5'>
            <Link href="#about" ><button className='heroButton'>About</button></Link>
            <Link href="#experience" ><button className='heroButton'>Experience</button></Link>
            <Link href="#skills" ><button className='heroButton'>Skills</button></Link>
            <Link href="#projects" ><button className='heroButton'>Projects</button></Link>
        </div>
    </div>
  )
}

export default Hero