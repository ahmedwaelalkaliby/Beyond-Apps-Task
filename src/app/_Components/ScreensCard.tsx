import React from 'react'

import MobileMockup from './MobileMockup'

export default function ScreensCard() {
  return (
   <div className='container w-full h-[350px] sm:h-[400px] lg:h-[450px] bg-zinc-100 bg-opacity-20 rounded-3xl flex items-end justify-center shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden'>
  <div className='translate-y-1/2'>
    <MobileMockup />
  </div>
</div>
      
  )
}
