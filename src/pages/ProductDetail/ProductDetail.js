import Hamburg from '@components/Hamburg'
import SwiperReview from '@components/SwiperReview';
import SwipperYouMayLike from '@components/SwipperYouMayLike';
import React from 'react'
import { useSelector } from 'react-redux';
import HowItWorks from './howItWorks'
import ProductImageContainer from './productImageContainer'
import ProductInfo from './productInfo'

const ProductDetail = () => {
    const { productInfo } = useSelector((state) => state.productReducer)

    console.log(productInfo)

    return (
        <section className='container py-6'>
            <Hamburg links={[
                { name: 'Shop', path: '/' },
                { name: 'Phones & Tablets', path: '/' },
                { name: 'Apple IPhone 13 Pro', path: '/' },
            ]} />
            <div className="grid grid-cols-2 mt-10 gap-8">
                <ProductImageContainer productImages={productInfo.images} />
                <div className='detail-right'>
                    <ProductInfo productInfo={productInfo} />
                </div>
            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>How it works</h4>
                <HowItWorks />

            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>We think you may also like</h4>
                <SwipperYouMayLike />

            </div>
            <div className='py-14 border-t border-gray-2 mt-10'>
                <h4 className='text-center mb-10'>The reviews are In</h4>
                <SwiperReview />

            </div>



        </section>
    )
}

export default ProductDetail