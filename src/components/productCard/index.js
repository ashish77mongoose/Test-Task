import React from 'react'
import SpecialOffer from '@components/SpecialOffer'

export default function ProductCard({ product,index }) {
    return (
        <div key={index}>
            <div className='relative bg-gray-2 p-[38px] h-[285px] w-full max-w-[285px] center rounded-[10px]'>
                <img className=' max-w-[235px] max-h-[210px] mix-blend-darken' src={product.imgpath} alt="" />
                <SpecialOffer>Special Offer</SpecialOffer>
            </div>
            <div className='flex flex-col gap-2 pt-4'>
                <span className='text-gray-text '>{product.productname}</span>
                {product.rent && <span className='text-gray-text line-through text-sm'>{product.rent}</span>}
                <span className={`font-bold ${product.rent ? `text-gradient-pink` : `text-gray-6 `}`}>{product.Emi}</span>
            </div>
        </div>
    )
}
