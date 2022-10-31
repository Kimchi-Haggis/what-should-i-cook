import Contact from '@components/section/Contact';
import Footer from '@components/section/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import Hero from '@components/section/Hero';
import React from 'react'
import TryThis from '@components/section/tryThis';

type Props = {}

const PageLayouts = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <TryThis />
      <Contact />
      <Footer />
    </>
  )
}

export default PageLayouts;