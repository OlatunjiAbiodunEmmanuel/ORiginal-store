import Container from '@/app/components/Container'
import { product } from '@/utilis/productt'
import React from 'react'
import ProductDetails from './ProductDetails'

interface IParams{
    productId?: string
}


const page = ({params}:{params: IParams}) => {





  return (
    <div className='p-8'>
        <Container>
            <ProductDetails product ={product}/>
        </Container>
    </div>
  )
}

export default page