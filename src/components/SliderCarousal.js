import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SliderCarousal.css';
import pic1 from '../Assets/Img/1.jpg'
import pic2 from '../Assets/Img/2.jpg'
import pic3 from '../Assets/Img/3.jpg'

const SliderCarousal = () => {

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

  return (

      
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ backgroundImage: "url(" + " https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1686677975~exp=1686678575~hmac=d28b985eb4e64bbbb5701466ffa23b99f6269a3a25b509d868a1f6743d66b9f8" + ")",
    backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
    }} >
         
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1488274319148-051ed60a9404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80'
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1531508679013-67b72b16e597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Second slide"
          style={{height: '600px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Third slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80'
          alt="Fourth slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Fifth slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src='https://images.unsplash.com/photo-1497048679117-1a29644559e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Sixth slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderCarousal