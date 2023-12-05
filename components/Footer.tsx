
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container bg-slate-gray px-6 py-8 rounded-lg shadow-lg  ">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
         <a href="/">
          <img src= '/assets/images/logo.png' alt="footer logo"
          width={150}
          height={56}
           />
         </a>
         <p className="mt-6 test-[18px] font-semibold leading-7 text-black sm:max-w-sm">
          Grab your breakfast, lunch or dinner at Chalts-bakery-buffet. Find Your perfect Meal. Get Rewards
         </p>
         <div className="flex items-center gap-5 mt-8">
             
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="/assets/icons/facebook.svg" alt="fac"
                width={24}
                height={24}
                 />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="/assets/icons/twitter.svg" alt="twi"
                width={24}
                height={24}
                 />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="/assets/icons/instagram.svg" alt="ins"
                width={24}
                height={24}
                 />
              </div>
         </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) =>(
            <div>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 text-[18px] font-semibold leading-normal hover:text-slate-gray cursor-pointer"
                   key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center  cursor-pointer gap-2 ">
           
            <p>Copyright. All rights reserved.</p>
        </div>
        <p className="pr-[350px]">@CraftSolutions</p>
        <p className=" cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer