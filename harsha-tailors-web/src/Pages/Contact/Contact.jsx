import Navbar from "../../Components/Navbar/Navbar"
import ContactBackgroundImg from '../../Images/contact_backImg.png'
import Form from '../../Components/Form/Form'

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
      <Form />







    </div>
  )
}

export default Contact
