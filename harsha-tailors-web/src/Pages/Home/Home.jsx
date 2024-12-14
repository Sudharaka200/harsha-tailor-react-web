import Navbar from "../../Components/Navbar/Navbar"
import CardImg1 from "../../Images/card-img1.jpg"
import CardImg2 from "../../Images/card-img2.jpg"
import CardImg3 from "../../Images/card-img3.jpg"
import CardImg4 from "../../Images/card-img4.jpg"
import CardImg5 from "../../Images/card-img5.jpg"
import CardImg6 from "../../Images/card-img6.jpg"
import CardImg7 from "../../Images/card-img7.jpg"
import HomeBanner from "../../Components/HomeBanner/HomeBanner"
import Icon1 from "../../Images/icon1.png"
import Icon2 from "../../Images/icon2.png"
import Icon3 from "../../Images/icon3.png"
import Icon4 from "../../Images/icon4.png" 
import SampleGallery from "../../Components/SampleGallery/SampleGallery"
import Footer from "../../Components/Footer/Footer"

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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A warm welcome for Harsha Tailors!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
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
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100	" //area 3 
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>
            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
              provident impedit esse recusandae facere libero harum sequi.
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
            </div>
          </dl>
        </div>  
      </div> <br />
      <div className="container mx-auto" //area4
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Explore Our Services</h2>
        <br />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg ">
            <a href="#" className="group block">
              <img
                src={Icon1}
                alt=""
                className="aspect-square w-20 m-auto rounded object-cover"
              />

              <div className="mt-3">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-gray-700 text-center	">$150</p>
              </div>
            </a>
          </div>
          <div className="h-32 rounded-lg ">
            <a href="#" className="group block">
                <img
                  src={Icon2}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Simple Watch
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 text-center	">$150</p>
                </div>
              </a>
          </div>
          <div className="h-32 rounded-lg ">
            <a href="#" className="group block">
                <img
                  src={Icon3}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Simple Watch
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 text-center	">$150</p>
                </div>
              </a>
          </div>
          <div className="h-32 rounded-lg ">
            <a href="#" className="group block">
                <img
                  src={Icon4}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Simple Watch
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 text-center	">$150</p>
                </div>
              </a>
          </div>
        </div>
      </div>
      <br /><br />
      <div //area 5
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Gallery of Sample Designs</h2>
        <SampleGallery />
      </div>
      <Footer />
    </div>
  )
}

export default home
