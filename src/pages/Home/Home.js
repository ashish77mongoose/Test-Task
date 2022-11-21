

import Filter from '@components/Filter'
import GradientOutlineBtn from '@components/GradientOutlineBtn'
import Hamburg from '@components/Hamburg'
import ReactCustomSelect from '@components/ReactCustomSelect'
import SpecialOffer from '@components/SpecialOffer'
import Swipper from '@components/Swipper'
import { allproducts } from '@utils/constants'
import { icons } from '@utils/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
const HomePage = () => {
  const [sortby, setSortBy] = useState(false);
  const [select, setSelect] = useState('Most Popular');
  let toggleContainer = React.createRef();
  const sortdata=[
    {value:'lh',label:'Price (high to low)'},
    {value:'hl',label:'Price (low to high)'},
  ]

 useEffect(() => {
  window.addEventListener('click', onClickOutsideHandler);
 })
 
  const onClickOutsideHandler= (event)=>{
    if (sortby && !toggleContainer.current.contains(event.target)) {
     setSortBy(!sortby);
    }
  }
  
  return (
    <div className='container py-6'>
      <Hamburg links={[{name:'All Products' ,path:'/'}]}/>
      <div>
        <Swipper/>

      </div>
      <div className='flex  gap-8 pt-12'>
        <div>
          <Filter/>
        </div>
        <div className='flex-1'>

          <div className='flex justify-between'>
            <div>
              <h5 className='mb-2'>Computers</h5>
              <span>Seo text will be here</span>
            </div>
            <div className='flex  items-center gap-6'>
              <span className='text-gray-text font-bold text-sm flex-shrink-0'>Sort By</span>
              <div className='relative min-w-[200px] h-[40px]'>
                  <div ref={toggleContainer}   className={`absolute z-10 bg-white sort-by ${sortby&&`active`}`}>
                      <div  
                      onClick={()=>{setSortBy(!sortby);
                        
                      }} className='flex justify-between items-center px-4 py-2 font-bold text-black'> <span>{select}</span> <img src="/images/product-detail/arrow.svg" alt="" /></div>
                      <ul className='flex flex-col '>

                        {sortdata.map((item,index)=>(

                        <li onClick={()=>{
                          setSortBy(!sortby);
                          setSelect(item.label);

                        }} key={index} className='py-3 px-4  border-b-[2px] border-gray-5 last:border-b-0'>{item.label}</li>
                        ))}
                        
                      </ul>
                      <div  className='flex justify-between items-center px-4 py-2 font-bold text-gradient-pink'> <span>Most Popular</span> <span className='w-5 h-5 center rounded-full bg-green-2 text-white text-[15px]'>{icons.check}</span></div>


                  </div>
              </div>
              
            </div>

          </div>
          <div className='grid grid-cols-3 gap-x-6 gap-y-8 mt-6'>
            {allproducts.map((item,index)=>(
              <div>
                <div className='relative bg-gray-2 p-[38px] h-[285px] w-full max-w-[285px] center rounded-[10px]'>
                  <img className=' max-w-[235px] max-h-[210px] mix-blend-darken' src={item.imgpath} alt="" />
                  <SpecialOffer>Special Offer</SpecialOffer>
                </div>
                <div className='flex flex-col gap-2 pt-4'>
                  <span className='text-gray-text '>{item.productname}</span>
                  {item.rent&&  <span className='text-gray-text line-through text-sm'>{item.rent}</span>}
                  <span className={`font-bold ${item.rent ? `text-gradient-pink`:`text-gray-6 `}`}>{item.Emi}</span>
                 
                </div>

              </div>

            ))}
          </div>
          <div className='flex justify-center mt-6'><GradientOutlineBtn>Load More Products</GradientOutlineBtn></div>
        </div>

      </div>
     
    </div>
  )
}

export default HomePage