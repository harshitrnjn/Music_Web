import Footer from '@/components/Footer'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import React from 'react'
// import LocomotiveScroll from 'locomotive-scroll';
// import {LocomotiveScroll} from 'locomotive-scroll';

// const locomotiveScroll = new LocomotiveScroll();


function page() {
  return (
    <>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Footer/>
    </>
  )
}

export default page
