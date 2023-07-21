import React from 'react'
import {AiFillFacebook, AiFillInstagram , AiFillTwitterSquare} from 'react-icons/ai'

const AboutUs = () => {
    const features = [
        { name: 'Social Links', description: '' },
      
       
      ]
      
        return (
          <div className="bg" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" + ")",
          backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
          }}>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reach Out</h2>
                <p className="mt-4 text-gray-500">
                Downsized Dreams" is the ultimate destination for collectors and enthusiasts of scale model toy cars. Our extensive collection features highly-detailed and accurately-scaled models of popular and classic cars from around the world. From sports cars to muscle cars, from vintage classics to modern favorites, we offer a wide variety of choices for all ages and interests. Explore our collection and bring home the car of your dreams in a downsized form!
                </p>
      
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                     {/*  <dt className="font-medium text-gray-900" style={{display: 'inline'}}>
                      <AiFillFacebook style={{display: 'inline', marginRight: '18px'}} /> 
                      <AiFillInstagram style={{display: 'inline', marginRight: '18px'}} /> 
                      <AiFillTwitterSquare style={{display: 'inline', marginRight: '18px'}} /></dt> */}
                      
                      
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FLiving_room.webp&w=640&q=75"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FOffice1.webp&w=640&q=75"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FBedroom1.jpg&w=640&q=75"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FHallways_WawHSxX.webp&w=640&q=75"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        )
      }


export default AboutUs;