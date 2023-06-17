import React from "react";

const MediaMentions = () => {
   
    return (
      <div className="bg-white py-24 sm:py-32" style={{ backgroundImage: "url(" + "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" + ")",
      backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
      }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-lg font-semibold leading-8" style={{color:'whitesmoke' , fontSize: '30px'}}>
            Media Mentions
          </h1>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2F1.png&w=256&q=75'
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2F2.png&w=256&q=75'
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2F5.png&w=256&q=75"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2F3.png&w=256&q=75'
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/images/svg/dailyhunt.png'
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2Fmedium.png&w=256&q=75'
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2F4.png&w=256&q=75'
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2Fbusiness-press.png&w=256&q=75'
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/_next/image?url=%2Fimages%2Fsvg%2Fetv.png&w=256&q=75'
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src='https://dirums.com/images/svg/7.png'
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }


export default MediaMentions