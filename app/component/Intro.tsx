/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from 'next/image'
import React from 'react'
import profile from "@/public/profile.png"
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import people from "@/public/svgs/peopleperhour.jpg"

function Intro() {
  return (
    <section className='mb-28 max-w-[54rem] text-center sm:mn-0'>
      <div className='flex items-center justify-center '>
        <div className='relative'>
          <motion.div
            initial={{opacity:0 , scale:0}}
            animate={{opacity:1 , scale:1 }}
            transition={{
              type:"tween",
              duration:0.4,
            }}
          >
            <Image src={profile} alt='Gokay profile' width="70" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
          </motion.div>
            <motion.span className='absolute bottom-0 right-0 text-2xl'
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              transition={{
                  type:"spring",
                  stiffness:125,
                  delay:0.1,
                  duration:0.7,
              }}
            >
              👋
            </motion.span>
        </div>       
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Gökay.</span> I'm a{" "}
        <span className="font-bold">Frontend developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy building 
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          delay:0.3,
        }}>
        <Link href="#contact" className='group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 outline-none rounded-full focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'>
              Contact Me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition'/>
        </Link>
        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-105  active:scale-105 transition border border-black/10' href='/Cv.pdf'download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>
        <div className='flex gap-2 w-auto'>
            <a href='https://www.linkedin.com/in/g%C3%B6kay-%C3%B6nc%C3%BC/' target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15 hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition border border-black/10'><BsLinkedin/></a>
            <a href='https://github.com/gokayoncu' target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'><FaGithubSquare/></a>
            <a href='https://www.peopleperhour.com/freelancer/technology-programming/g%C3%B6kay-%C3%96nc%C3%BC-front-end-developer-zzwqvqnw' target='_blank' className='bg-white p-1 text-gray-700 flex items-center rounded-full cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'><Image src={people} alt='Gokay profile' width="70" height="192" quality="95" priority={true} className="h-11 w-11 rounded-full object-cover border-[0.35rem] border-white "/></a>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro
