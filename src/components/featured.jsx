import React from 'react'
import { FeaturedCard } from './featuredCard'

export const Featured = () => {
  return (
    <div className='px-16 my-8 flex-col flex items-center justify-center mt-16'>
        <div className='my-8'>
            <p className='text-2xl'>Featured Products</p>
        </div>
        <FeaturedCard/>

    </div>
  )
}
