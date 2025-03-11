import "./Testimonials.scss"

function Testimonials() {
  return (
    <div className='clients_say'>
        <h1>What our clients say</h1>
        <div className="clients_wrapper">
            <div className="clients_cart">
                <img src="../../../../public/images/testimonials/Image (1).png" alt="" />
                <h1>James Anderson</h1>
                <p>"Exceptional service and support from start to finish. Highly recommend!"</p>
            </div>
            <div className="clients_cart">
                <img src="../../../../public/images/testimonials/Image (2).png" alt="" />
                <h1>Samantha Lee</h1>
                <p>"Their attention to detail and creative solutions were beyond my expectations."</p>
            </div>
            <div className="clients_cart">
                <img src="../../../../public/images/testimonials/Image.png" alt="" />
                <h1>James Anderson</h1>
                <p>""A fantastic team that delivered a stunning result on our project.""</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials