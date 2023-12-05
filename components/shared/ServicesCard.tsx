
 type Props ={
    imgURL: any;
    label: string;
    subtext: string;

}

const ServicesCard = ({imgURL,label, subtext} :Props) => {
  
  return (
    <div className='flex-1 sm:w-[200px] sm:min-w-[200px] border-2 border-gray-400 w-full rounded-[20px] shadow-2xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex'>
        <img src="/assets/icons/truck-fast.svg"
        alt="tf"
        width={24}
        height={24}
         />
      </div>
      <h3 className='mt-5 font-2xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard