"use client"
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Services from '@/components/Services'
import Subscribe from '@/components/Subscribe'
import PostCard from '@/components/shared/PostCard'
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite'
import Image from 'next/image'
import React from 'react'

const page = () => {
const {data: posts, isPending: isPostLoading, isError: isErrorPosts} = useGetRecentPosts();

  return (
    <>
    <section className=' px-6 md:px-20 py-20'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
         <p className='small-text'>
          Shopping Starts here: 
          <Image
           src="/assets/icons/arrow-right.svg"
           alt='arrow-right'
           width={18}
           height={18}
           className='bg-dark-4 rounded-full'
          />
         </p>
         <h1 className='head-text'>
          Unleash the Taste of
          <span className='text-primary'> ChaltsBakeryBuffet</span>

         </h1>
         <p className='mt-6 text-[20px] font-semibold'> Giving quality till we feel free, Enjoy value for your money with quality over quantity!</p>
         <Searchbar/>
        </div>

        <HeroCarousel/>

      </div>

    </section>

    <section className='trending-section'>
      <h2 className='section-text flex items-center justify-center pb-16'>
      Our Latest<span className='text-primary ml-2 mr-2'> Menu</span>
      </h2>
      <div className='flex items-center justify-center'>
        {isPostLoading && !posts ? (
          <div>
            loading
          </div>
        ): (
          <ul className='relative sm:px-10 py-5 sm:pt-5 pb-5 lg:gap-6 grid lg:grid-cols-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 w-full'>
           {
            posts?.documents.map((post: Models.Document) =>(
              <li key={post.caption} className=''>
                <PostCard post ={post}  />
              </li>
            ))
           }
          </ul>
        ) }
      </div>
    </section>
    <section className='sm:px-16 px-8'>
      <Services/>
      
    </section>

    <section className='sm:px-16 px-8 sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>

    <section className="rounded-md sm:px-16 px-8 sm:pt-24 pt-12 pb-8  py-16">
    <Footer/>
    </section>
    </>
  )
}

export default page