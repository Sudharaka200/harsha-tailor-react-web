import Navbar from "../../Components/Navbar/Navbar"
import GalleryBackgroundImg from '../../Images/gallery_Backimg.jpg'
import ImagesGallery from "../../Components/ImagesGallery/ImagesGallery"
import Footer from "../../Components/Footer/Footer"

function Gallery() {
  return (
    <div>
      <Navbar />
      <section   //Area 1 Image
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GalleryBackgroundImg})`, height: '40%' }}
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
      <br /><br />
      <div // Area 2 images and categories 
      >
        <div className="container mx-auto px-4 py-8">
          <ImagesGallery />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
