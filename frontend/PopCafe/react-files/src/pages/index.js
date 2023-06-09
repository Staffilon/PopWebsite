import Head from "next/head";
import React from "react";
import About3 from "../components/about/About3";
import Banner3 from "../components/banner/Banner3";
import SpcialOffer3 from "../components/bestOffer/SpcialOffer3";
import Home3Blog3 from "../components/blog/Home3Blog3";
import Preloader from "../components/common/Prelaoder";
import Experties3 from "../components/cookingExperties/Experties3";
import Facilities from "../components/facilittes/Facilities";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import MenuList3 from "../components/MenuList/MenuList3";
import PopularItem3 from "../components/popularItem/PopularItem3";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function Index3Page() {
  return (
    <>
      <Head>
        <title>PopCafè</title>
        <meta name="description" content="Pop Cafè"/>
        <link rel="icon" type="image/vnd.icon" href="favicon.ico" />
        <script type="text/javascript">
          {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "floatingPreferencesButtonDisplay": "bottom-right",
            "gdprAppliesGlobally": false,
            "perPurposeConsent": true,
            "siteId": 3182875,
            "whitelabel": false,
            "cookiePolicyId": 93217328,
            "lang": "it",
            "banner": {
              "acceptButtonDisplay": true,
              "closeButtonRejects": true,
              "customizeButtonDisplay": true,
              "explicitWithdrawal": true,
              "listPurposes": true,
              "position": "float-bottom-center"
            }
          };
          `}
        </script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charset="UTF-8"
          async
        ></script>
      </Head>
      <Header3 />
      <Banner3 />
      <About3 />
      <Facilities />
      <MenuList3 />
      <Home3Blog3 />
      <Footer />
    </>
  );
}

export default Index3Page;
