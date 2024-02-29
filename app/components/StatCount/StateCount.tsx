'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'

interface StateCountProps {
  targetCount: number;
  title: string;
}


const StateCount = ({ targetCount,title }:StateCountProps) => {
    const count = useMotionValue(0)
const rounded = useTransform(count, latest => Math.round(latest))

useEffect(() => {
  const controls = animate(count, targetCount ,{ duration: 2 })

  return controls.stop
}, [targetCount,count])

  return (
    <motion.div
    className="flex flex-col items-center justify-center h-full  "
  >
    <motion.span initial={{color:'white'}} animate={{color:'white'}} className="text-4xl font-bold">{rounded}</motion.span>
    <motion.span initial={{color:'white'}} animate={{color:'white'}} className="font-bold text-2xl  mb-1">{title}</motion.span>
  </motion.div>



  )
}

export default StateCount