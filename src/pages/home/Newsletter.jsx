import { Link } from "react-router-dom"

const Newsletter = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">Follow products and discounts on Instagram</h2>
    
    {/* Instagram grid  */}
     <div className="flex mb-20 justify-center items-center flex-wrap gap-4">
     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img1.png" alt="" />
     </Link>
   
     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img2.png" alt="" />
     </Link>
     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img3.png" alt="" />
     </Link>

     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img4.png" alt="" />
     </Link>
     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img5.png" alt="" />
     </Link>
     <Link to="/" >
      <img className="hover:scale-105" src="/images/instagram/img6.png" alt="" />
     </Link>
     </div>

     <div>
     <h2 className="text-3xl font-semibold capitalize text-center my-8">Or subscribe to the newsletter</h2>
        
       <form className="md:w-1/2 mx-auto text-center">
        <input type="email" name="email" id="email" placeholder="email address..." className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5" />
        <button className="bg-black text-white px-6 py-1 rounded-md ml-4" >Submit</button>
       </form>

     </div>
   
    </div>
  )
}

export default Newsletter