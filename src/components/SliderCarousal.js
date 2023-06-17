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
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/vintage-wallpaper-background_53876-25246.jpg?w=1060&t=st=1686680121~exp=1686680721~hmac=ed8cca384667c842eb80c4c799ce3c940b3ccc3caca40c47ea6069bb7d6b8923" + ")",
    backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
    }} >
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={pic1}
          alt="First slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={pic2}
          alt="Second slide"
          style={{height: '600px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={pic3}
          alt="Third slide"
          style={{height: '600px', objectFit: 'contain'}}
        />
        

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderCarousal