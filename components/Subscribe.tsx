

const Subscribe = () => {
  return (
    <section className=" max-container flex justify-between items-center max-lg:flex-col gap-10"
    id="contact-us"
    >
     <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold "> Subscribe for
      <span className="text-coral-red ">
        {" "}Latest
      </span> Updates
     </h3>
     <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-4
      sm:border sm:border-slate rounded-full bg-coral-red
     ">
      <input type="text"
      placeholder="subscribe@cbb.com"
      className="searchbar-input"
       />
       <div className="flex max-sm:justify-between max-sm:w-full">
        <button className="searchbar-btn">
        Subscribe
        </button>
       </div>
     </div>
    </section>
  )
}

export default Subscribe