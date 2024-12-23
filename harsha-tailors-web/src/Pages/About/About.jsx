import Navbar from '../../Components/Navbar/Navbar'
import AboutBackgroundImg from '../../Images/About_img.png'
import ContentImg1 from '../../Images/about-content-img1.png'
import Contentimg2 from '../../Images/about-content1-img2.png'
import ContentImg3 from '../../Images/about-content1-img3.png'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
      <Navbar />
      
      <section   //Area 1 Image
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AboutBackgroundImg})`, height: '40%' }}
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
        <div //area 2 img with contecnt
         className="relative overflow-hidden bg-white">
        <div className="pb-40 pt-16 sm:pb-20 sm:pt-24 lg:pb-32 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <p className="mt-4 text-xl text-gray-500">
                It’s an honor to say that Mr.Kasthurisinghe Arachchilage Harischandra is the founder of Sri Lanka’s number one leading tailor. As a result of this unending devotion over 30 years, Harsha Tailors was created. Because of his continuous service which is full of courtesies and experience. The secret of Harsha Tailors is a creation, devotion, dedication without any hesitation.            <br />
                  <br />
                  Harsha Tailors is ever ready with your needs, that’s the Vision of Harsha Tailors. Also designing and tailoring with a fine finishing and becoming the super tailor in Asia is the supreme idea and target, of Harsha Tailors.By respecting the Sri Lanka’s identity, modern designs and styles are generated with more than one hundred thousand customers. If you want the beauty at the proper, needed times go to Harsha Tailors. Also the best place is Harsha Tailors, for your memorable wedding, any kind of festive occasions, or any kind of dresses such as for office, institutes or companies.          </p>
              </div>

              {/* Image Content */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={ContentImg1} // Replace with the desired image URL or variable
                  alt="Harsha Tailors Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div //area 3 img with contecnt
         className="relative overflow-hidden bg-white">
        <div className="pb-40 pt-16 sm:pb-20 sm:pt-24 lg:pb-32 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={Contentimg2} // Replace with the desired image URL or variable
                  alt="Harsha Tailors Showcase"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Content */}
              <div>
                <p className="mt-4 text-xl text-gray-500">
                It’s an honor to say that Mr.Kasthurisinghe Arachchilage Harischandra is the founder of Sri Lanka’s number one leading tailor. As a result of this unending devotion over 30 years, Harsha Tailors was created. Because of his continuous service which is full of courtesies and experience. The secret of Harsha Tailors is a creation, devotion, dedication without any hesitation.            <br />
                  <br />
                  Harsha Tailors is ever ready with your needs, that’s the Vision of Harsha Tailors. Also designing and tailoring with a fine finishing and becoming the super tailor in Asia is the supreme idea and target, of Harsha Tailors.By respecting the Sri Lanka’s identity, modern designs and styles are generated with more than one hundred thousand customers. If you want the beauty at the proper, needed times go to Harsha Tailors. Also the best place is Harsha Tailors, for your memorable wedding, any kind of festive occasions, or any kind of dresses such as for office, institutes or companies.          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div //full image
      >
        <img src={ContentImg3} alt=""  className='w-full h-1/4	'/>
      </div>
      <Footer />
    </div>
  )
}

export default About
