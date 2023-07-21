import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const MoreAbout = () => {



    const features = [
        {
          name: 'Collaboration and Teamwork',
          description:
            'We strongly believe in the power of collaboration and teamwork. We encourage open communication and collaboration among team members, regardless of their roles or levels within the organization. ',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'Work-Life Balance',
          description: 'We believe in recognizing and celebrating the achievements and contributions of our team members. We have a culture of appreciation where we acknowledge and reward hard work, innovation, and exceptional performance. ',
          icon: LockClosedIcon,
        },
        {
          name: 'Fun and Well-being',
          description: 'We believe that a happy team is a productive team. We organize regular social events, team-building activities, and wellness initiatives to promote a healthy and enjoyable work environment. ',
          icon: ServerIcon,
        },
      ]


      const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

  return (
    <div className="overflow-hidden py-24 sm:py-32" style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/white-blank-background-texture-design-element_53876-146863.jpg?w=1060&t=st=1686917864~exp=1686918464~hmac=5d833839f45561108026cec1993c075cda3e89686050f5f2c2e5de88f40008ee" + ")",
    backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
    }}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to our Office</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            At our office, we believe that fostering a positive and inclusive work culture is essential for the success and well-being of our team members. We strive to create an environment that promotes collaboration, innovation, and personal growth
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" style={{
                    color: 'brown',
                }} />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
       {/*  <img
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt="Product screenshot"
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width={2432}
          height={1442}
        /> */}

        <Carousel activeIndex={index} onSelect={handleSelect} className="w-[48rem] max-w-none   sm:w-[46rem] md:-ml-4 lg:-ml-0"
          width={2432}
          height={1442}>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1497366616365-e78dd380d3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1653669485641-8582ad808121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1503418895522-46f9804cda40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1567176019727-21d0a58f24e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Second slide"
          style={{height: '600px', objectFit: 'contain'}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1653669485641-8582ad808121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          alt="Third slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

       
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  </div>
  )
}

export default MoreAbout