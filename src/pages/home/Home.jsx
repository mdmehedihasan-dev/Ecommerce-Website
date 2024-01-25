import Banner from "./Banner"
import BestSellers from "./BestSellers"
import Category from "./Category"
import Collections from "./Collections"
import Projects from "./Projects"
import Newsletter from "./newsletter"

const Home = () => {
  return (
    <div >
       
      <Banner/>
      <Category/>
      <Projects/>
      <Collections/>
      <BestSellers/>
      <Newsletter/>
    </div>
  )
}

export default Home