import React from 'react'
import NavBar from './NavBar'
import MainHero from './MainHero'
import Category from './Category'
import SliderCarousal from './SliderCarousal'
import LogoClouds from './LogoClouds'
import NewestCollections from './NewestCollections'
import Testimonial from './Testimonial'
import MediaMentions from './MediaMentions'
import AboutUs from './AboutUs'

const HomePage = () => {
  return (
    <>
        {/* <NavBar /> */}
        <MainHero />
        <Category />
        <SliderCarousal />

        <LogoClouds />
        <NewestCollections />
        <Testimonial />

        <MediaMentions />
        <AboutUs />
    </>
  )
}

export default HomePage