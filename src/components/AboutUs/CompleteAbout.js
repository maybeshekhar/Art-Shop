import React from 'react'
import AboutHero from './AboutHero'
import MoreAbout from './MoreAbout'
import Members from './Members'
import WorkWithUs from './WorkWithUs'
import AboutUs from '../AboutUs'
import NewsLetter from '../BlogSection/NewsLetter'

const CompleteAbout = () => {
  return (
    <>
        <AboutHero />
        <MoreAbout />
        <Members />
        {/* <WorkWithUs /> */}
        <NewsLetter />
    </>
  )
}

export default CompleteAbout