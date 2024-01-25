import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Projects = () => {

    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([])
    const [filteredItem, setFilteredItem] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(["all"])
    const [ sortOption, setSortOption] = useState(["Default"])

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch('product.json')
                const data = await response.json();
                setProducts(data)
                setFilteredItem(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    // console.log(products)

    // filtering function 
    const filterItem = (category)=> {
      const filtered = category === "all" ? (products) : products.filter((item)=> item.category === category)
   
      setFilteredItem(filtered)
    selectedCategory(category) 
  }

  // show all product 

  const showAll = () =>{
    setFilteredItem(products)
    setSelectedCategory("all")
  }

  // sorting function 
  const handleSortChange = (option)=>{
    setSortOption(option);

    //  logic for sorting 
    let sortedItems = [...filterItem];

    switch(option){
      case "A-Z":
        sortedItems.sort((a,b)=> a.title.localeCompare(b.title));
        break;
      case "Z-A":
          sortedItems.sort((a,b)=> b.title.localeCompare(a.title));
          break;
      case "low-to-high":
          sortedItems.sort((a,b)=> a.price-b.price);
          break;
      case "high-to-low":
          sortedItems.sort((a,b)=> b.price - a.price);
          break;     
      default:
         break;
    }
    setFilteredItem(sortedItems)
  }


  return (
    <div className="max-w-screen-2xl lg:px-28 px-4 container mx-auto py-28">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Or subscribe to the newsletter
      </h2>

      {/* product card  */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center  space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll} className="hover:font-semibold text-Black">
              All products
            </button>
            <button onClick={()=>filterItem("Dress")} className="hover:font-semibold text-Black">Cloting</button>
            <button onClick={()=>filterItem("Hoodies")} className="hover:font-semibold text-Black">Hoodies</button>
            <button onClick={()=>filterItem("Bag")} className="hover:font-semibold text-Black">Bag</button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select id="sort" onChange={(e)=>handleSortChange(e.target.value)} value={sortOption} className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>


      {/* show product data here  */}
      <Cards  filteredItem={filteredItem} />
    </div>
  );
};

export default Projects;
