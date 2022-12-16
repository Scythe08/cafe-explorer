import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import AboutUs from "../components/About";



function Home() {
  return (
    <div>
      <Navbar/>
      <Hero
        heading1="Brewed with Style"
        address="Freshly ground coffee into your cups."
        Order="Order Now"
      />
      <AboutUs />
      <Contact />
    </div>
  );
  
}

export default Home;
