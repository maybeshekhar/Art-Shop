import React from 'react'
import brand1 from '../Assets/brands/art.png'
import brand2 from '../Assets/brands/derivan.png'
import brand3 from '../Assets/brands/rl.png'
import brand4 from '../Assets/brands/yupo.png'

const LogoClouds = () => {
   
        return (
          <div className="bg-white py-24 sm:py-32" style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1686677975~exp=1686678575~hmac=d28b985eb4e64bbbb5701466ffa23b99f6269a3a25b509d868a1f6743d66b9f8" + ")",
         
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
          }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Trusted by the world’s most innovative teams
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={brand1}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={brand2}
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/677px-Tata_logo.svg.png?20190613192255"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src={brand3}
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src={brand4}
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        )
      }


export default LogoClouds