import HeroSection from '@/components/HeroSection'
import PricingPage from '@/components/PricingPage'
import React from 'react'

const HomePage = () => {
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
        <HeroSection/>
        <PricingPage userId='{user?.id}'/>
    </div>
  )
}

export default HomePage