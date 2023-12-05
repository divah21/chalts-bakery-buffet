import PostForm from '@/components/forms/PostForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-1 bg-slate-500 mt-[20px] text-white rounded-md shadow-lg'>
       <div className='common-container'>
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
            <img 
            src='/assets/icons/add-post.svg'
            height={36}
            width={36}
            alt='add'
            className=""

            />
            <h2 className='h3-bold md:bold text-left w-full text-white'>Create Post</h2>
        </div>
        <PostForm/>
       </div> 
    </div>
  )
}

export default page