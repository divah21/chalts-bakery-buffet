import { useSimilarProducts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';
import React from 'react'
import PostCard from './PostCard';
import { useParams } from 'next/navigation';

const SimilarProducts = () => {
    const{id} = useParams();
    const {data:product, isPending: productLoading} = useSimilarProducts(id || '' );
    if(productLoading) return <div>loading data</div>

  return (
    <div className='py-14 flex flex-col gap-2 w-full'>
    <p className='section-text'>
     Similar Products
    </p>
    <div className='flex flex-wrap gap-10 mt-7 w-full'>
    <div className='flex items-center justify-center'>
      {productLoading && !product ? (
        <div>
          loading
        </div>
      ): (
        <ul className='lg:gap-6 grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 w-full'>
         {
          product?.documents.map((post: Models.Document) =>(
            <li key={post.caption} className=''>
              <PostCard post ={post}  />
            </li>
          ))
         }
        </ul>
      ) }
    </div>
    
    </div>
    <div className='w-full py-16 px-0'>
        <hr className=' border-[5px] border:bg-black ' />
    </div>
   </div>
  )
}

export default SimilarProducts