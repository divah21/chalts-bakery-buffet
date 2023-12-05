"use client"
import { useParams } from 'next/navigation';
import { useGetPostById, useSimilarProducts } from '@/lib/react-query/queriesAndMutations';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import PriceInforCard from '@/components/PriceInforCard';
import Link from 'next/link';
import PostCard from '@/components/shared/PostCard';
import { Models } from 'appwrite';
import SimilarProducts from '@/components/shared/SimilarProducts';



const PostDetails = () => {
    const{id} = useParams();
    const {data: post, isPending} = useGetPostById(id || '' );
    
     
      if(isPending) return <div>loading</div>
      
      if(!post) {
        redirect('/');
        return null;
      }

     

  return (
    <div className='product-container'>
      <div className='flex gap-28 xl:flex-row flex-col'>
        <div className='flex-grow xl:max-w-[50%] max-w-full border border-[#CDDBFF] rounded-[17px]'>
          <img
          src={post.imageUrl}
          alt={post.$id}
          width={500}
          height={400}
          className='mx-auto place-self-center'
          />
        </div>
        <div className='flex-1 flex-col'>
         <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
          <div className=' flex flex-col gap-3'>
            <p className='text-[28px] text-secondary font-semibold'>{post.tags}</p>
          </div>
          <div className='flex items-center gap-3'>
          <div className='product-hearts'>
            <img
              src='/assets/icons/red-heart.svg'
              alt='heart'
              width={20}
              height={20}
            />

            <p className='text-base font-semibold text-[#D46F77]'>
              {post.likes}
            </p>
          </div>
          <div className='p-2 bg-white-100 rounded-10'>
            <Image
            src="/assets/icons/bookmark.svg"
            alt='bookmark'
            width={20}
            height={20}
            />
          </div>
          <div className='p-2 bg-white-100 rounded-10'>
            <img
            src="/assets/icons/share.svg"
            alt='share'
            width={20}
            height={20}
            />
          </div>
          </div>
         </div>
         <div className='product-infor'>
          <div className='flex flex-col gap-2'>
           <p className='text-[34px] text-secondary font-bold'>
            $ {post.price}
           </p>
           <p className='text-[21px] text-black opacity-50 line-through'>
            $ 1.50
           </p>
          </div>
          <div className='flex flex-col gap-4'>
           <div className='flex gap-3'>
            <div className='product-stars'>
             <Image
             src="/assets/icons/star.svg"
             alt='start'
             height={16}
             width={16}
             />
             <p className='text-sm text-primary-orange font-semibold'>
              {30}
             </p>
            </div>
            <div className='product-reviews'>
            <Image
            src="/assets/icons/comment.svg"
            alt='comment'
            width={16}
            height={16}
            />
            <p className='text-sm text-secondary font-semibold'>
              {post.saves || 100} Reviews
            </p>
            </div>
           </div>
           <p className='text-sm text-black opacity-50'>
            <span className='text-primary-green font-bold'> 93%</span> of buyers have recommended this.
           </p>
          </div>
         </div>
         <div className='my-7 flex flex-col gap-5'>
         <div className='flex gap-5 flex-wrap'>
         <PriceInforCard
         title = "Current Price"
         iconSrc = "/assets/icons/price-tag.svg"
         value ={`$${post.price}`}
         borderColor = "#b6dbff"
         />
         <PriceInforCard
         title = "Average Price"
         iconSrc = "/assets/icons/chart.svg"
         value ={`$${post.price}`}
         borderColor = "#b6dbff"
         />
         <PriceInforCard
         title = "Current Price"
         iconSrc = "/assets/icons/arrow-up.svg"
         value ={`$${post.price}`}
         borderColor = "#b6dbff"
         />
         <PriceInforCard
         title = "Current Price"
         iconSrc = "/assets/icons/arrow-down.svg"
         value ={`$${post.price}`}
         borderColor = "#BEFFC5"
         />
         </div>
         </div>

         Modal
        </div>
      </div>

    <div className='flex flex-col gap-16 border rounded-md px-[16px] py-6'>
     <div className=' flex flex-col gap-5 '>
       <h3 className='text-2xl text-secondary font-bold'>
        Product Description
       </h3>
       <div className='flex flex-col text-secondary font-semibold text-xl gap-4'>
      {post?.caption?.split('\n')}
       </div>
     </div>
      <button className='btn w-fit mx-auto  flex items-center justify-center min-w-[200px]'>
        <Image
        src="/assets/icons/bag.svg"
        alt='check'
        width={22}
        height={22}
        />
        <Link href="/" className='text-base text-white'>
          Place Order
        </Link>
      </button>
    </div>
      
      <SimilarProducts/>

    </div>
  )
}

export default PostDetails