import "./Testimonials.scss"
import client1 from "../../../../public/images/testimonials/Image (2).png"
import client2 from "../../../../public/images/testimonials/Image (1).png"
import client3 from "../../../../public/images/testimonials/Image.png"
function Testimonials() {
  return (
    <div className='clients_say'>
        <h1>What our clients say</h1>
        <div className="clients_wrapper">
            <div className="clients_cart">
                <img src={client1} alt="" />
                <h1>James Anderson</h1>
                <p>"Exceptional service and support from start to finish. Highly recommend!"</p>
            </div>
            <div className="clients_cart">
                <img src={client2} alt="" />
                <h1>Samantha Lee</h1>
                <p>"Their attention to detail and creative solutions were beyond my expectations."</p>
            </div>
            <div className="clients_cart">
                <img src={client3} alt="" />
                <h1>James Anderson</h1>
                <p>""A fantastic team that delivered a stunning result on our project.""</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials