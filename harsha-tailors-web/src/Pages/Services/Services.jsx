import Navbar from "../../Components/Navbar/Navbar"
import servicesBackgrounImg from '../../Images/services-BackImg.jpg'
import CardImg1 from "../../Images/card-img1.jpg"
import OurServicesIcons from "../../Components/OurServicesIcons/OurServicesIcons"
import Footer from "../../Components/Footer/Footer"


function Services() {
  return (
    <div>
      <Navbar />
      <section   //Area 1 Image
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBackgrounImg})`, height: '40%' }}
        >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              <strong className="block font-extrabold text-rose-500">Harsha Tailors.</strong>
            </h1>
          </div>
        </div>
      </section>
              <div //area 2
              className="relative overflow-hidden bg-white">
                <div className="pb-40 pt-16 sm:pb-20 sm:pt-24 lg:pb-32 lg:pt-40">
                  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Image Section */}
                      <div className="relative">
                        {/* Base Image */}
                        <img
                          src={CardImg1} // Replace with your base image
                          alt="Shirt"
                          className="relative w-full h-auto"
                        /> 
                      </div>
                      {/* Content Section */}
                      <div>
                        <h1 className=" font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                          A warm welcome for Harsha Tailors!
                        </h1>
                        <p className="mt-4 text-base text-gray-500">
                          With over 30 years of experience, we specialize in high-quality, custom-tailored clothing designed to perfectly match your shape, measurements, and style preferences. Our expertise extends to a wide range of designs, including uniforms for schools, industries, and defense, as well as festive and special occasion wear. We pride ourselves on offering personalized design recommendations tailored to occasions and modern trends, ensuring exceptional quality through our skilled and experienced staff.
                          <br />
                          <br />
                          Over the years, we have crafted more than 5 million garments, ranging from casual to formal wear, including trousers, shirts, party and wedding attire, and various uniforms. In addition to custom tailoring, we also provide dress hire services and ready-made garments with premium finishing, catering to diverse customer needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <OurServicesIcons />
              </div>
                
              <br /><br />
              <Footer />
    </div>
  )
}

export default Services
