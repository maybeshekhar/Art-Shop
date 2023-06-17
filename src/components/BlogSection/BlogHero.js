import React from 'react'

const BlogHero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-10xl py-24 sm:px-6 sm:py-0 lg:px-0"  style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/dipping-old-brush-into-red-color_114579-12243.jpg?w=1060&t=st=1686912878~exp=1686913478~hmac=84dd86d0f80727b6a27c67509cfe5a0e12932e8e1f60e0d34d667d31596b4670" + ")",
        backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
        }} >
        <div className="relative isolate overflow-hidden  px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        
          <div className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
              Blog Section
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p> */}
            {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute right-10 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://img.freepik.com/free-photo/texture-backgrounds_1122-2006.jpg?w=1060&t=st=1686910314~exp=1686910914~hmac=7df40c972d776ae1bcb4300ec57466995c332cbd778f1d9d3fc01aa7deb20f1d"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BlogHero