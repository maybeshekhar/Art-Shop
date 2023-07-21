import React from 'react'

const Category = () => {
    const callouts = [
        {
          name: '',
          description: 'Pattachitra Painting',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/14.Pattchitra_fish_marriage22x29_pwFrzU3.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '/paintings',
        },
        {
          name: '',
          description: 'Buddha Painting',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Picsart_22-06-17_07-00-55-733.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '/paintings',
        },
        {
          name: '',
          description: 'Modern Abstracts',
          imageSrc: 'https://dirums.com/images/banner_hero/modern_abstracts.png',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '/paintings',
        },
        {
          name: '',
          description: 'Gond Painting',
          imageSrc: 'https://dirums.com/images/banner_hero/gond_art.png',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '/paintings',
        },
      ]
  return (
    <div className=" " style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1686677975~exp=1686678575~hmac=d28b985eb4e64bbbb5701466ffa23b99f6269a3a25b509d868a1f6743d66b9f8" + ")",
    backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
    }}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900" style={{textAlign: 'center'}}>Collections</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative" style={{textAlign: 'center'}}>
              <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                 
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Category