"use client"
import AuthProvider, { useUserContext } from '@/context/AuthContext';
import { Models } from 'appwrite';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import PostStats from './PostStats';

type PostCardProps ={
  post: Models.Document;  
}

const PostCard = ({post}: PostCardProps) => {
  const {user} = useUserContext();
  return (

    <div className='product-card'>
      <div className='flex justify-end mt-2'>
      <PostStats post={post} userId ={user.id} />
      </div>
          
    <Link href={`/posts/${post.$id}`} >
      <div className='product-card_img-container'>
      <img
      src={post.imageUrl || '/assets/icons/profile-placeholder.svg'}
      alt ='post image'
      width={200}
      height={200}
      className='product-card_img'
      />

      </div>
      
    </Link>
         <div className='flex justify-between px-5 mt-2'>
      <ul className='flex gap-1'>
        {post.tags.map((tag:string)=>(
          <li key={tag} className='text-primary font-semibold text-[20px]'>
            {tag}
          </li>
        ))}
      </ul>
     
       

       <p className='text-black font-semibold'><span className='text-light-3'>Price:</span> ${post?.price}</p>
      </div>

    </div>
    
  )
}

export default PostCard