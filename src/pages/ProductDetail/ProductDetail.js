import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import Hamburg from '@components/Hamburg'
import ReactCustomSelect from '@components/ReactCustomSelect';
import SpecialOffer from '@components/SpecialOffer'
import SwiperReview from '@components/SwiperReview';
import SwipperProductImage from '@components/SwipperProductImage';
import SwipperYouMayLike from '@components/SwipperYouMayLike';
import { accordianContent, howItWorks, productfeatures, rentalPlan } from '@utils/constants'
import React, { useState } from 'react'
import { productcolor } from './../../utils/constants';

const ProductDetail = () => {

    const [productColor,setProductColor]=useState(1);
    const [storage,setStorage]=useState(1);
    const handleProductColor=(index)=>{
        setProductColor(index)
    }
    const handleStorage=(index)=>{
        setStorage(index)
    }
    

  return (
    <section className='container py-6'>
        <Hamburg links={[
            {name:'Shop' ,path:'/'},
            {name:'Phones & Tablets' ,path:'/'},
            {name:'Apple IPhone 13 Pro' ,path:'/'},
            ]}/>
            <div className="grid grid-cols-2 mt-10 gap-8">
                <div className='detail-left '>
                    <div>
                        <div className='relative bg-gray-2 p-[40px] h-[578px] w-full max-w-[578px] center rounded-[10px]'>
                                <img className=' max-w-[390px] max-h-[496px] mix-blend-darken' src={'/images/product-detail/iphone-13.png'} alt="" />
                                <SpecialOffer>Sale</SpecialOffer>
                        </div>
                        <div className=" mt-3">
                          <SwipperProductImage/>

                            

                        </div>
                        <div className='mt-3 bg-gray-2 rounded-md px-4 py-3 flex gap-3 items-center'>
                            <img src="/images/product-detail/certification.svg" alt="" />
                            <div>
                                <h6 className='font-bold text-green-1'>Liv promise - only the best</h6>
                                <span className='text-sm'>All devices are in excellent condition and comes with damage protection.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='detail-right'>
                    <div>
                        <div className='h5 font-semibold mb-3'>Apple iPhone 13 Pro</div>
                        <h6 className='line-through mb-1'>AED 49/monthly</h6>
                       <div> <span className='h6 text-gradient-pink font-bold'>Rent for AED 39/month </span><span className='text-sm font-semibold'>for 12 months</span></div>
                       <div className='mt-6 flex items-center gap-6 flex-wrap'>
                        {productfeatures.map((feature,index)=>(
                            <div key={index} className='flex items-center gap-2'>
                                <img src={feature.imgpath} alt="" />
                                <span className='text-sm font-semibold'>{feature.productname}</span>

                            </div>
                        ))}

                       </div>
                       <hr className='bg-gray-5 h-[1px] w-full mt-7 mb-6' />
                       <div>
                          <div><strong>Color:</strong> <span className='text-sm'>Sierra Blue</span></div>
                          <div className='flex items-center flex-wrap gap-3 mt-3 '>
                            {productcolor.map((color,index)=> (
                               <div  key={index} className={` rounded-full  relative  w-10 h-10 ${productColor===index ?`gradient-pink`:`bg-white`}`}>
                                <div onClick={()=>handleProductColor(index)} style={{background:`${color.color}`}} className={`absolute  inset-[1.6px] z-[1] rounded-full cursor-pointer `}></div>
                                </div>
                            ))}
                          </div>
                       </div>
                       <div className='mt-6'>
                          <div><strong>Storage:</strong> <span className='text-sm'>512GB</span></div>
                          <div className='flex items-center  gap-3 mt-3 '>
                           {['128GB','256GB','512GB','1TB'].map((item,index)=>(
                            <div key={index} className={` rounded-[6px] z-0   relative min-w-[83px] h-[43px]  center  ${storage ==index ?`gradient-pink`:`bg-gray-5`}`}>
                            <div  onClick={()=>handleStorage(index)}  className={`absolute  py-3  px-4  center bg-white  inset-[1.6px] z-[1] rounded-[4px] cursor-pointer `}> <span className={`relative font-bold z-[2] whitespace-nowrap ${storage ==index&&`text-gradient-pink`}`}>{item}</span> </div>
                            </div>
                           ))}

                          </div>
                          
                       </div>
                       <div className='mt-6'>
                        <label htmlFor="" className='text-sm font-bold mb-3 flex'>Select your minimum rental plan</label>
                        <ReactCustomSelect option={[...rentalPlan]}/>
                       </div>
                       <button className='gradient-btn mt-4'>Checkout Now</button>
                       <div className="flex gap-2 items-center bg-gray-1 rounded-md py-3 px-4 mt-4">
                        <img src="/images/product-detail/file.svg" alt="" />
                        <span className='font-semibold'> All subscriptions are subject to approval</span>

                       </div>
                       <div className="mt-6">
                       <Accordion defaultIndex={[0]} allowMultiple>
                        {accordianContent.map((item,index)=>(
                                <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                    {item.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                               {item.para}
                                </AccordionPanel>
                                </AccordionItem>
                        ))}
                           

                           
                    </Accordion>
                       </div>
                       {/* <div class="accordion mt-6" id="productdetail">
                                <div class="accordion-item  border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="headingOne">
                                    <button class="accordion-button  relative  flex  items-center  w-full  py-4  px-5  text-base text-gray-800 text-left  bg-white  border-0  rounded-none  transition  focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        Product Details
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#productdetail">
                                    <div class="accordion-body py-4 px-5 text-black">
                                    <p className='text-black'> 6.1-inch Super Retina XDR Display with ProMotion, Pro camera system, up to 22 hours battery life, A15 Bionic Chip, 5G and MagSafe compatible</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item  border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="headingOne">
                                    <button class="accordion-button  relative  flex  items-center  w-full  py-4  px-5  text-base text-gray-800 text-left  bg-white  border-0  rounded-none  transition  focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                        aria-controls="collapseTwo">
                                       Delivery and returns
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#productdetail">
                                    <div class="accordion-body py-4 px-5 text-black">
                                    <p className='text-black'> 6.1-inch Super Retina XDR Display with ProMotion, Pro camera system, up to 22 hours battery life, A15 Bionic Chip, 5G and MagSafe compatible</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item  border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="headingThree">
                                    <button class="accordion-button  relative  flex  items-center  w-full  py-4  px-5  text-base text-gray-800 text-left  bg-white  border-0  rounded-none  transition  focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
                                        aria-controls="collapseThree">
                                        What happens at the end of contract?
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#productdetail">
                                    <div class="accordion-body py-4 px-5 text-black">
                                    <p className='text-black'> 6.1-inch Super Retina XDR Display with ProMotion, Pro camera system, up to 22 hours battery life, A15 Bionic Chip, 5G and MagSafe compatible</p>
                                    </div>
                                    </div>
                                </div>
  
                      </div> */}

                    </div>
                </div>
            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>How it works</h4>
                <div className="grid grid-cols-4 place-items-center gap-6">

                    {howItWorks.map((item,index)=>(
                        <div className='flex flex-col items-center max-w-[250px]'>
                            <div className='bg-pink-light rounded-full relative center w-[150px] h-[150px]'>
                                <img src={item.imgpath} alt="" />
                                <div className='center border-2 border-pink-light w-10 h-10 bg-white rounded-full absolute top-[2px] left-[4px] '><span className='text-gradient-pink font-bold'>{item.step}</span></div>

                            </div>
                            <h6 className='mt-6 text-center'>{item.title} </h6>
                            <p className='text-gray-text text-center mt-4'>{item.para}</p>
                        </div>
                         ))}
                   
                </div>

            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>We think you may also like</h4>
                <SwipperYouMayLike/>

            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>The reviews are In</h4>
                <SwiperReview/>

            </div>

            
        
    </section>
  )
}

export default ProductDetail