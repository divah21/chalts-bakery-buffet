import { services } from '@/constants'
import ServicesCard from './shared/ServicesCard'

const Services = () => {
  return (
    <section className='max-container flex flex-col '>
         <h2 className='section-text pb-16 flex lg:flex-row sm:flex-col items-center justify-center'>
             Services We  <span className='text-primary ml-2 mr-2'> Continue to  </span> Offer
        </h2>
        <div className='flex justify-center flex-wrap gap-9'>
        {services.map((service) =>(
            <ServicesCard key={service.label} {...service}/>
        ))}
        </div>
       
       
    </section>
  )
}

export default Services