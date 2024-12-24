import Navbar from "../../Components/Navbar/Navbar"
import CardImg1 from "../../Images/card-img1.jpg"
import CardImg2 from "../../Images/card-img2.jpg"
import CardImg3 from "../../Images/card-img3.jpg"
import CardImg4 from "../../Images/card-img4.jpg"
import CardImg5 from "../../Images/card-img5.jpg"
import CardImg6 from "../../Images/card-img6.jpg"
import CardImg7 from "../../Images/card-img7.jpg"
import HomeBanner from "../../Components/HomeBanner/HomeBanner"
import Satisfaction from '../../Components/Satisfaction/Satisfaction'
import SampleGallery from "../../Components/SampleGallery/SampleGallery"
import Footer from "../../Components/Footer/Footer"
import OurServicesIcons from "../../Components/OurServicesIcons/OurServicesIcons"

function home() {
  return (
    <div>
        <Navbar />
        <HomeBanner />
        <div className="relative overflow-hidden bg-white" //area 2 
        >
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
              A warm welcome for Harsha Tailors!
              </h1>
              <p className="mt-4 text-base text-gray-500">
              With over 30 years of experience, we specialize in high-quality, custom-tailored clothing designed to perfectly match your shape, measurements, and style preferences. Our expertise extends to a wide range of designs, including uniforms for schools, industries, and defense, as well as festive and special occasion wear. We pride ourselves on offering personalized design recommendations tailored to occasions and modern trends, ensuring exceptional quality through our skilled and experienced staff.
                <br /><br />
              Over the years, we have crafted more than 5 million garments, ranging from casual to formal wear, including trousers, shirts, party and wedding attire, and various uniforms. In addition to custom tailoring, we also provide dress hire services and ready-made garments with premium finishing, catering to diverse customer needs.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={CardImg1}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg6}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg3}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg4}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg5}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg2}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={CardImg7}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-rose-600 px-8 py-3 text-center font-medium text-white hover:bg-red-700"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Satisfaction />
      </div>
      <br /><br />
        <div className="mt-20">
          <OurServicesIcons />
        </div>
      <div //area 5
      >
        <h2 className=" font-bold text-gray-900  text-3xl sm:text-4xl text-center mt-20">Gallery of Sample Designs</h2>
        <SampleGallery />
      </div>
      <Footer />
    </div>
  )
}

export default home
