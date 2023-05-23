import React, {useEffect,useState} from 'react'
import Appbar from '../../Components/Global/Appbar';
import Footer from '../../Components/Global/Footer';
import Hero from './Hero';
import About from './About';
import Market from './Market';
import Dating from './Dating';
import NftSingle from './NftSingle';
import Tockenomics from './Tockenomics';
import NftSlider from './NftSlider';
import How from './How';
import Roadmap from './Roadmap';
import Affiliate from './Affiliate';
import Socials from './Socials';

// COMPONENTS
import { FaChevronUp } from 'react-icons/fa';
import Icon from '../../Components/Single/Icon';
import { Navigate } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';

const Home = ({title}) => {
    useEffect(() => {
    document.title = title ? title : 'EVC Avatars | Home';
  }, [])
  const newAddress = window.localStorage.getItem("connectedAccount");
  
  return (
    <>
      <Appbar mobile="offcanvas"/>
      <Hero />
      <About />
      {/* <Market />
      <Dating />
      <NftSingle /> */}
      <Tockenomics />
      <NftSlider />
      <How />
      <Roadmap />
      <Affiliate />
      <Socials />
      <Footer />
      {/* BACK TO TOP */}
      <div className="backToTop" id ="home">
        <a href="#home">
          <Icon className="bg-primary text-white p-3" circle> <FaChevronUp /> </Icon>
        </a>
      </div>
    </>
  )
}

export default Home