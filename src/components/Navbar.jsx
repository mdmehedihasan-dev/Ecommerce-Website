import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { useState } from "react";

const Navbar = () => {

    const navItems = [
        {title:"Jewelry & Accessories",path:"/"},
        {title:"Clothing & Shoes",path:"/"},
        {title:"Home & Living",path:"/"},
        {title:"Wedding & Party",path:"/"},
        {title:"Toys & Entertainment",path:"/"},
        {title:"Art & Collectibles",path:"/"},
        {title:"Craft Supplies & Tools",path:"/"}
    ]

    const [showMenu, setShowMenu] = useState(false)

    const handlebtn = ()=>{
        setShowMenu(!showMenu)
    }


  return (
    <header className="max-w-screen-2xl lg:px-28 px-4 absolute top-0 left-0 right-0 ">
      <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
        <FaSearch className="w-5 h-5 cursor-pointer hidden md:block" />

        {/* logo  */}
        <Link to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>

            {/* account and shopping button start here */}
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
            <a href="/" className="flex items-center gap-2 "> <FaUser/> Account </a>
            <a href="/" className="flex items-center gap-2 "> <FaShoppingBag/> Shopping </a>
        </div>

           {/* account and shopping button end here */}

           {/* nav item for small devices  */}

           <div className="md:hidden ">
            <button onClick={handlebtn}>
                {
                    showMenu? <FaTimes className="w-5 h-5" />: <FaBars className="w-5 h-5"/> 
                }
            </button>
           </div>








      </nav>

      <hr />

      {/* category items start here  */}

        <div className="pt-4">
            <ul className="lg:flex items-center justify-between hidden text-black">
                {navItems.map(({title,path})=>(
                    <li key={title} className="hover:text-orange-500 my-4">
                        <Link to={path}> {title}  </Link>
                    </li>
                ))}
            </ul>
        </div>

      {/* category item end here  */}

      {/* category item for mobile devices  */}
      <div>
            <ul className={`text-white bg-Black rounded p-4 ${showMenu ? "" : "hidden"}`}>
                {navItems.map(({title,path})=>(
                    <li key={title} className="hover:text-orange-500 my-4">
                        <Link to={path}> {title}  </Link>
                    </li>
                ))}
            </ul>
        </div>
    </header>
  );
};

export default Navbar;
