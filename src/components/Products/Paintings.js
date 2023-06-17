import React from 'react'
import { Link } from 'react-router-dom'

const Paintings = () => {

    const products = [
        {
          id: 1,
          name: 'Tarini | Handpainted village women',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Tarini_Mrinal_Dutt.jpeg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          linkTo: "/one"
        },
        {
          id: 2,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Serenity_1.png',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          linkTo: "/two"
        },
        {
          id: 3,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Jelly_FIsh_Surya_Prathap_Samal_GjnrRg5.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          linkTo: "/three"
        },
        {
          id: 4,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/The_Buddha02_KANKANA_PAL_Acrylic_On_Canvas_24x30.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/four"
        },
        {
          id: 5,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Puri_Jagganatha_Surya_Pratap_Samal.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/five"
        },
        {
          id: 6,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Nocturnal_Brilliance_Border__01.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/six"
        },
        {
          id: 7,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/My_Dream_1_6FlvJtP.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/seven"
        },
        {
          id: 8,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Vargavi_Kejriwal_deer_couple_ACRYLIC_ON_PAPER_10x14.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/eight"
        },
        {
          id: 9,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Hunting_eagle_Monika_Bharti_Acrylic_On_Canvas_11x12_inch.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/nine"
        },
        {
          id: 10,
          naname: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/b.meghmala_OIL_ON_CANVAS_18X24_inch.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/ten"
        },
        {
          id: 11,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/20210521_084546_uliy1xE.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/eleven"
        },
        {
          id: 12,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/IMG_20220830_110242.jpg_1662217352367',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/twelve"
        },
        {
          id: 13,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Ganesha_Pixel_Art_Anup_Kumar_Sinha_Watercolor_on_Handmade_Paper_8.3x11.7_copy.png',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/thirteen"
        },
        {
          id: 14,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Radhakrishnan_or_Mira_Vishwas_Pawar_ACRYLIC_ON_BOARD_18X15inch.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/fouteen"
        },
        {
          id: 15,
          name: 'Painting',
          href: '#',
          price: '₹4,800',
          imageSrc: 'https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/blob1683416291239.undefined',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          linkTo: "/fifteen"
        },
        // More products...
      ]


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Paintings</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8" style={{textAlign: 'center'}}>
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Link to={product.linkTo}> 
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                  </Link>
              </div>
              <h3 className="mt-4 text-sm text-gray-700" style={{fontSize: '18px'}} ><b> {product.name}</b></h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Paintings