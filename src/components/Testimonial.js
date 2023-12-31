import React from "react";

const Testimonial = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" + ")",
        backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
height: '600px'
        }} >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"  />
         {/*  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
          <div className="mx-auto max-w-2xl lg:max-w-4xl" >
           {/*  <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/yoyoyo-logo-indigo-600.svg" alt="" /> */}
            <figure className="mt-10"  >
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “I recently purchased a beautiful horse painting from your gallery, and I couldn't be happier with my purchase. The attention to detail and the artistry captured in the painting is truly remarkable. The artist has perfectly captured the grace, strength, and majestic nature of the horse. Thank you for offering such high-quality artwork and providing a seamless purchasing experience.

I look forward to visiting your gallery again in the future to explore more of the incredible artwork you have to offer. Keep up the excellent work!”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                  <br />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Subendu Mishra</div>
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">Satisfied Customer</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      )
}

export default Testimonial