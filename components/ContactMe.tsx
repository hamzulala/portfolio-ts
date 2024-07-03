import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}
type Props = {}

function ContactMe({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Hamza Ahmed",
            "<Lets-Build-Something-Cool-Together/>"
        ],
        loop: false,
        delaySpeed: 3000,
    });
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        console.log(formData);
        window.location.href = `mailto:hamzaunaiz@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, \n ${formData.message} \n from ${formData.email}`
    };
  return (
    <div className='h-screen flex relative flec-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>Contact</h3>

        <div className='flex flex-col space-y-10 md:w-1/2 md:h-1/2'>
            {/* Greeting */}
            <h4 className='text-4xl font-semibold text-center'><span>{text}<Cursor cursorColor='#F7AB0A'/></span></h4>
            {/* Info */}
            <div>
                {/* Phone */}
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+61497927546</p>
                </div>

                {/* Email */}
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>hamzaunaiz@gmail.com</p>
                </div>

                {/* Address */}
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Melbourne, VIC, Australia</p>
                </div>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} type="text" placeholder='Name' className='contactInput'/>
                    <input {...register('email')} type="email" placeholder='Email' className='contactInput'/>
                </div>
                <input {...register('subject')} type="text" placeholder='Subject' className='contactInput'/>
                <textarea {...register('message')} className='contactInput' placeholder='Message'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>

        </div>

    </div>
  )
}

export default ContactMe