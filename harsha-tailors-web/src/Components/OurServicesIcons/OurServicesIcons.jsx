import Icon1 from "../../Images/icon1.png"
import Icon2 from "../../Images/icon2.png"
import Icon3 from "../../Images/icon3.png"
import Icon4 from "../../Images/icon4.png" 

function OurServicesIcons() {
  return (
    <div>
      <div className="container mx-auto mt-20 mb-20" //area4
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Explore Our Services</h2>
        <br />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10 ">
          <div className="h-32 rounded-lg hover:bg-rose-100">
            <a href="#" className="group block">
              <img
                src={Icon1}
                alt=""
                className="aspect-square w-20 m-auto rounded object-cover"
              />

              <div className="mt-3 ">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Wedding Suit
                </h3>
              </div>
            </a>
          </div>
          <div className="h-32 rounded-lg hover:bg-rose-100">
            <a href="#" className="group block">
                <img
                  src={Icon2}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover "
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Office Ware
                  </h3>
                </div>
              </a>
          </div>
          <div className="h-32 rounded-lg hover:bg-rose-100">
            <a href="#" className="group block ">
                <img
                  src={Icon3}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Uniform Design
                  </h3>
                </div>
              </a>
          </div>
          <div className="h-32 rounded-lg hover:bg-rose-100">
            <a href="#" className="group block">
                <img
                  src={Icon4}
                  alt=""
                  className="aspect-square w-20 m-auto rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center	">
                    Other Suit
                  </h3>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServicesIcons
