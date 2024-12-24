import Navbar from "../../Components/Navbar/Navbar"
import ContactBackgroundImg from '../../Images/contact_backImg.png'
import Footer from "../../Components/Footer/Footer"
import GoogleMap from '../../Components/GoogleMap/GoogleMap'

function Contact() {
  return (
    <div>
      <Navbar />
      <section   //Area 1 Image
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ContactBackgroundImg})`, height: '100%' }}
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
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className=" rounded-lg bg-gray-200 lg:col-span-2">
              <GoogleMap />
            </div>
            <div className="h-32 rounded-lg">
                <div>
                  <h2 className=" font-bold text-gray-900  text-3xl sm:text-4xl mt-10">Get In Touch</h2>
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
