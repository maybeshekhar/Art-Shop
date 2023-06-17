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
          src='https://img.freepik.com/free-photo/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg?w=1060&t=st=1686916776~exp=1686917376~hmac=5d6e1c68793aa6cf98031757265d06fcf08fb217349d0260177ea8582a64d17d'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/close-up-people-having-fun-while-playing-table-soccer_23-2149060299.jpg?w=1060&t=st=1686917185~exp=1686917785~hmac=a73a8e029d5d5a8b7945ca4ffb24005bb800d69f05e74fdb4e799322313fa3d4'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/mixed-team-playing-blocks-wood-game-office_158595-5184.jpg?w=1060&t=st=1686917232~exp=1686917832~hmac=4f7e8ffa0739cbcd1ffc517fd4e766837c297411e8c140dabdf730dcd103314a'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/modern-interior-design-office_181624-21578.jpg?w=1060&t=st=1686917269~exp=1686917869~hmac=d3df420fb135c49fc39d6a76f805bfbb8870f9de1823a3ebbfaa93f08e9834c5'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/smiling-students-studying-together-table_23-2147850724.jpg?w=1060&t=st=1686917332~exp=1686917932~hmac=0ef985b7fd1dd187f64b34755b2494a33849da2c12c07c707b5d8452bff71617'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/friends-summer-vacation-laughing-having-fun-jumping-walking-through-streets-city_72229-386.jpg?w=1060&t=st=1686917350~exp=1686917950~hmac=55e09f132fca8e41b07efaafa37a13861bf047ce8d07b56809f62f3b0b4c6959'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15818.jpg?w=1060&t=st=1686916924~exp=1686917524~hmac=7c1ba8fa02ad9feee3dee5ae57633e0fd40d03e8f2bf2dfd5ccb57b7740b5a46'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15871.jpg?w=1060&t=st=1686917114~exp=1686917714~hmac=3e7a4e0535a06907871cd0615098e36c2943a61bde39338e7cc966c763ebbf18'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?w=1060&t=st=1686917138~exp=1686917738~hmac=32040c3ec72cdc3f3fa559d6e4ec2356cb952d5cb57e2b5f53eb3c8da85132d8'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/people-meeting-room-having-conference_23-2147656693.jpg?w=1060&t=st=1686916736~exp=1686917336~hmac=440c1400f388f61e31c928cd97f1227c8c7b70906d11e41c6402498d92f0fe3c'
          alt="Second slide"
          style={{height: '600px', objectFit: 'contain'}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://img.freepik.com/free-photo/businesspeople-having-discussion-team-meeting-modern-office-interior_1163-4771.jpg?w=1060&t=st=1686916694~exp=1686917294~hmac=98221189a029972d2514f315e7764808cd99adf7b47b91ac04d6cdd6c01ed022'
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