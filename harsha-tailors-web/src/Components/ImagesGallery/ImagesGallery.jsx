import GalleryImg1 from '../../Images/gallery1.jpg'
import GalleryImg2 from '../../Images/gallery2.jpg'
import GalleryImg3 from '../../Images/gallery3.jpg'
import GalleryImg4 from '../../Images/gallery4.jpg'
import GalleryImg5 from '../../Images/gallery5.jpg'
import GalleryImg6 from '../../Images/gallery6.jpg'
import GalleryImg7 from '../../Images/gallery7.jpg'
import GalleryImg8 from '../../Images/gallery8.jpg'
import GalleryImg9 from '../../Images/gallery9.jpg'
import GalleryImg10 from '../../Images/gallery10.jpg'
import GalleryImg11 from '../../Images/gallery11.jpg'
import GalleryImg12 from '../../Images/gallery12.jpg'

export function ImagesGallery() {
    // Sample data for the images
    const images = [
      [
        GalleryImg1,GalleryImg2,GalleryImg3
      ],
      [
        GalleryImg4,GalleryImg5,GalleryImg6
      ],
      [
        GalleryImg7,GalleryImg8,GalleryImg9
      ],
      [
        GalleryImg10,GalleryImg11,GalleryImg12
      ],
    ];
  
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((column, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {column.map((src, imgIndex) => (
              <div key={imgIndex}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                  src={src}
                  alt={`Gallery photo ${colIndex + 1}-${imgIndex + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default ImagesGallery;
  