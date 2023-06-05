import React from "react";
import About1 from "../components/about/About1";
import About2 from "../components/about/About2";
import AboutCounter from "../components/about/AboutCounter";
import Breadcrumb from "../components/common/Breadcrumb";
import Experties1 from "../components/cookingExperties/Experties1";
import Gallery1 from "../components/gallary/Gallery1";
import TesimonialVideo from "../components/testimonial/TesimonialVideo";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Header3 from "../components/header/Header3";
import Layout from "../layout/Layout";

function About() {
  return (
    <Layout>
      <Breadcrumb pageName="About" pageTitle="Chi siamo" />
      <About1 />
      <About2 />
     
      <Gallery1 />
    </Layout>
  );
}

export default About;
