import React from 'react'

const BlogPage = () => {

    const posts = [
        {
          id: 1,
          img: 'https://img.freepik.com/free-photo/woman-art-school-wearing-apron-drawing-easel_1157-46856.jpg?size=626&ext=jpg&ga=GA1.1.492605150.1686677965&semt=sph',
          title: 'Mastering the Art of Color: A Guide to Understanding Paints and Pigments',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'Marketing', href: '#' },
          author: {
            name: 'Vijay Sharma',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              '',
          },
        },
        {
          id: 1,
          img: 'https://img.freepik.com/free-vector/creative-art-doodle-vector-diy-artist-concept_53876-140898.jpg?size=626&ext=jpg&ga=GA1.1.492605150.1686677965&semt=sph',
          title: 'From Canvas to Creation: Exploring the Relationship Between Art and Paints',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'Marketing', href: '#' },
          author: {
            name: 'Tonny Dsalvia',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              '',
          },
        },
        {
          id: 1,
          img: 'https://img.freepik.com/premium-photo/male-caucasian-teenager-painting-art-studio-artist-apron-picture-drawing-generative-ai-aig23_31965-149629.jpg?size=626&ext=jpg&ga=GA1.1.492605150.1686677965&semt=sph',
          title: 'Unleashing Your Inner Artist: How Different Paints Inspire Creativity',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'Marketing', href: '#' },
          author: {
            name: 'Yash Kapoor',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              '',
          },
        },
        {
          id: 1,
          img: 'https://img.freepik.com/premium-photo/acrylic-colors-mixing-water-colorful-acrylic-paint-mixing-watergenerative-ai_841229-2059.jpg?size=626&ext=jpg&ga=GA1.1.492605150.1686677965&semt=sph',
          title: 'The Evolution of Paints: Tracing the History and Future of Artistic Mediums',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'Marketing', href: '#' },
          author: {
            name: 'Sumegha Rusty',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              '',
          },
        },
        // More posts...
      ]

  return (
     <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <img src={post.img} alt="image" />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                 
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage