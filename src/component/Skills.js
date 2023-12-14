import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name,x,y}) => {
  return (
    <>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute' whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.5}}
    viewport={{once:true}}>
        {name}
    </motion.div>
    </>
  )
}


const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'></div>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    p-8 shadow-dark cursor-pointer' whileHover={{scale:1.05}}>
        web
    </motion.div>
    <skill name="HTML" x="-25vw" y="2"/>
    <skill name="css" x="-5vw" y="-10vw"/>
    <skill name="javascript" x="20vw" y="6vw"/>
    <skill name="ReactJs" x="0vw" y="12vw"/>
    <skill name="NextJs" x="-20vw" y="-15vw"/>
    <skill name="GatsbyJs" x="15vw" y="-12vw"/>
    <skill name="web Design" x="32vw" y="-5vw"/>
    <skill name="figma" x="0vw" y="-20vw"/>
    <skill name="Firebase" x="-25vw" y="18vw"/>
    <skill name="tailwind css" x="18vw" y="18vw"/>
    </>
  )
}

export default Skills