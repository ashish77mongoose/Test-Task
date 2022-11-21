import React from 'react'
import ProductCard from '@components/productCard'
const ProductList = () => {
    return (
        <div className='grid grid-cols-3 gap-x-6 gap-y-8 mt-6'>
            {[].map((product, index) => (
                <ProductCard product={product} index={index} />
            ))}
        </div>
    )
}
export default ProductList
