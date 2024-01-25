
import { useEffect, useState } from "react"
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"
const SingleProduct = () => {
    const {id} = useParams()
    const [products,setProducts] = useState([])


    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch('/product.json')
                const data = await response.json();
                const product = data.filter((p)=>p.id == id);
                console.log(product)
                setProducts(product[0])
               
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[id])

    const {title,  price, image,} = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
         <div className="p-3 max-w-7xl m-auto">
            <div className="mt-6 sm:mt-10">

               <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                <div>
                <img src={image} alt="" className="w-full" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold capitalize  my-8 text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto officia earum natus nihil ipsum atque esse quisquam corporis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eius! Laborum sequi accusantium pariatur alias voluptates perferendis quibusdam magnam nostrum! </p>


              <span className="my-2 text-xl text-yellow-300 flex items-center gap-4 sm:my-4">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>

              </span>

              <p className="text-xl text-red-500 font-semibold sm:text-2xl"  >${price}</p>




              <div className="mt-4">
                    <div className="text-left flex flex-col gap-2 w-full">
                        <label className="font-semibold">Qunatity : 1</label>
                        
                    </div>
                    <div className="mt-4">
                        <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-500 shadow-slate-600 hover:text-red-500 hover:bg-white lg:m-0 md:px-6"> <span>Confirmed Order</span> <FaArrowAltCircleRight/>  </button>
                    </div>
                </div>



                </div>

               




               </div>
            </div>

         </div>
    </div>
  )
}

export default SingleProduct



