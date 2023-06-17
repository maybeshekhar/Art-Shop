import React from 'react'

const NewestCollections = () => {
    const callouts = [
        {
          name: 'Arts',
          description: 'Paintings and Banner ',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Save__the_earth_series1_Soma_Sen.JPG',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'The Musical Band | Musical Band Acrylic On Canvas Large Painting',
          description: 'Acrylic On Canvas',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/musicians_Anupam_pal_zooomed_1_9yyfJfn.jpg',
          href: '#',
        },
        {
          name: 'Merchandise',
          description: 'TShirts, Caps and many more..',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/TIME_TRAVEL_7_acrylic_on_canvas_40_x_30_inches_7P5NwSY.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
    
        {
          name: 'Merchandise',
          description: 'TShirts, Caps and many more..',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/TIME_TRAVEL_8_acrylic_on_canvas_40_x_30_inches.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        {
          name: 'Merchandise',
          description: 'TShirts, Caps and many more..',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/22-carat-gold-bike-sculpture.jpeg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        {
          name: 'Merchandise',
          description: 'TShirts, Caps and many more..',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Stallion_Shaan_Yashowar_Verma_Oil_on_Canvas_48x36.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
      ]
  return (
    <div className="bg"  style={{backgroundColor: 'rgb(33,33,33)'}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-white-50" style={{textAlign: 'center'}}>Collections</h2>
          <br /> <br />

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0" style={{textAlign: 'center'}}>
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-white-50">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white-50">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewestCollections