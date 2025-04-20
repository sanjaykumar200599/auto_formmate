import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PricingPage from '@/components/PricingPage'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getForms } from '@/actions/getForms'
import { getUserSubscription } from '@/actions/userSubscription'

const HomePage =async () => {
  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }
  const forms = await getForms();
  const totalNumberOfFormCreated = forms?.data?.length || 0 as number;
  const isSubscribed = await getUserSubscription(user?.id as string) as boolean;
  
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
        <HeroSection totalForms={totalNumberOfFormCreated} isSubscribed={isSubscribed}/>
        <PricingPage userId='{user?.id}'/>
        <Footer/>
    </div>
  )
}

export default HomePage