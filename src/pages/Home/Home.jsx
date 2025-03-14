import FormContact from "../../components/FormContact/FormContact";
import Hero from "../../components/Home/Hero/Hero";
import OurClients from "../../components/Home/OurClients/OurClients";
import Service from "../../components/Home/Services/Service";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import TopProjects from "../../components/Home/TopProjects/TopProjects";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="container home">
        <Hero />
        <Service />
        <TopProjects />
        <Testimonials />
      </div>
      <OurClients />
      <FormContact />
    </div>
  );
}

export default Home;
