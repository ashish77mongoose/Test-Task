import React from 'react'
import { icons } from '@utils/icons';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';

const Filter = () => {
  return (
    <div className='w-[300px] lg:sticky top-20 flex flex-col gap-8'>
      <div>
      <h6 className='mb-4'>Filter By</h6>
        <div>
            <div className='flex gap-2 items-center mb-2'> <span className='text-sm'>{icons.prev}</span> <span className='font-semibold text-sm'>All Categories</span></div>
            <ul className='ml-4 space-y-2'>
                
                <li className='font-bold text-sm text-gradient-pink'>All Computers</li>
                <li className='font-semibold text-sm'>Laptop</li>
                <li className='font-semibold text-sm'>Keyboard</li>
            </ul>
        </div>
      </div>
      <div>
      <h6 className='mb-4'>Price Per Month</h6>
        <div>
              <RangeSlider
        aria-label={['min', 'max']}
        colorScheme='pink'
        defaultValue={[10, 30]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
            
        </div>
        <div className="flex justify-between mt-2">
          <span className='text-xs font-semibold'>AED 12</span>
          <span className='text-xs font-semibold'>AED 12</span>
        </div>
      </div>
       <div>
       <h6 className='mb-4'>Brands</h6>
        <div >
         <div className='flex flex-col gap-4 brands'>

           { ['All','Apple','Samsung','Black berry','Sony','Asus','Google'].map((item,index)=>(
            <label htmlFor={`cat-${index}`} className='flex gap-6 items-center'>
                <input type="checkbox" name="" id={`cat-${index}`} hidden />
                <span> <i>{icons.check} </i></span>
                <div className='name font-medium text-sm'>{item} </div>
            </label>
           ))
            }                 
         </div>
        </div>
       </div>
       

    </div>
  )
}

export default Filter