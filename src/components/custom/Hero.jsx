import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-zinc-100 to-slate-100">
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'>
            <span className='text-[#0077b6]'>Discover your Next Adventure with AI:</span> Personalized Trip at Your FingerTips
        </h1>
        <p className='text-xl text-gray-500 text-center'>AI Trip Planner makes travel planning effortless and enjoyable. Powered by advanced AI technology, our platform crafts personalized travel experiences tailored to your preferences, budget, and schedule. From discovering hidden gems to organizing the perfect itinerary, AI Trip Planner is your go-to travel assistant.</p>
        <Link to={'/create-trip'}>
        <Button className='ml-[300px]'>Get Started, It's Free</Button>
        <img src='bg.svg' className='mt-4'/>
        </Link>
    </div>
    </div>
  )
}

export default Hero