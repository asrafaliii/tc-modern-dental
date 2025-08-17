import React from 'react'
import PageHeader from '../../components/PageHeader'
import ImageGallery from './Sections/ImageGallery'
import AboutMe from './Sections/AboutMe'
import Team from './Sections/Team'
import FaceAnalyzer from './Sections/FaceAnalyzer'
import AboutUs from '../Home/Sections/AboutUs'

const About = () => {
  return (
    <div>
      <PageHeader title="About Us"/>
      {/* <AboutMe /> */}
      {/* <FaceAnalyzer /> */}
      {/* <Team /> */}
      <AboutUs />
      <ImageGallery />
    </div>
  )
}

export default About