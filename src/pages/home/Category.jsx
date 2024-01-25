import { Link } from "react-router-dom";

const Category = () => {
  const companyLogo = [
    { id: 1, img: "/images/company/brand1.png" },
    { id: 2, img: "/images/company/brand2.png" },
    { id: 3, img: "/images/company/brand3.png" },
    { id: 4, img: "/images/company/brand4.png" },
    { id: 5, img: "/images/company/brand5.png" },
  ];
  return (
    <div className="max-w-screen-2xl lg:px-28 px-4 container mx-auto py-28">
      {/* brand logo all here  */}
      <div className="flex justify-center gap-8 flex-wrap">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img className="my-2" src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid  */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold text-center uppercase  md:p-1.5 p-2 rounded-sm inline-flex md:-rotate-90  ">
          Explore new and popular styles
        </p>

        <div>
          <Link to="/">
            {" "}
            <img
              src="/images/category/image1.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-300"
            />{" "}
          </Link>
        </div>
        <div className=" md:w-1/2 grid grid-cols-2 gap-2">
          <img
            src="/images/category/image2.png"
            alt=""
            className="w-full hover:scale-105 transition-all duration-300"
          />
           <img
            src="/images/category/image3.png"
            alt=""
            className="w-full hover:scale-105 transition-all duration-300"
          />
           <img
            src="/images/category/image4.png"
            alt=""
            className="w-full hover:scale-105 transition-all duration-300"
          />
           <img
            src="/images/category/image5.png"
            alt=""
            className="w-full hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
