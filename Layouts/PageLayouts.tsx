import Blog from '@components/common/Section/Blog';
import Contact from '@components/common/Section/Contact';
import Footer from '@components/common/Section/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import Hero from '@components/common/Section/Hero';
import React from 'react'

type Props = {}

const PageLayouts = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default PageLayouts;