import GalleryImg1 from '../../Images/g_img1.jpg'
import GalleryImg2 from '../../Images/g_img2.jpg'
import GalleryImg3 from '../../Images/g_img3.jpg'
import GalleryImg4 from '../../Images/g_img4.jpg'
import GalleryImg5 from '../../Images/g_img5.jpg'
import GalleryImg6 from '../../Images/g_img6.jpg'
import GalleryImg7 from '../../Images/g_img7.jpg'
import GalleryImg8 from '../../Images/g_img8.jpg'

 
const products = [
    {
      id: 1,
      href: '#',
      imageSrc: GalleryImg1,
    },
    {
      id: 2,
      href: '#',
      imageSrc: GalleryImg2,
    },
    {
      id: 3,
      href: '#',
      imageSrc: GalleryImg3,
    },
    {
      id: 4,
      href: '#',
      imageSrc: GalleryImg4,
    },
    {
      id: 5,
      href: '#',
      imageSrc: GalleryImg5,
    },
    {
      id: 6,
      href: '#',
      imageSrc: GalleryImg6,
    },
    {
      id: 7,
      href: '#',
      imageSrc: GalleryImg7,
    },
    {
      id: 8,
      href: '#',
      imageSrc: GalleryImg8,
    },
    // More products...
  ]
  
  export default function SampleGallery() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover  xl:aspect-[7/8] relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  