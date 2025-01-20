import "./App.scss";

import Header from "@components/header";
import Hero from "@components/hero";
import Marquee from "@components/marquee";
import {FeaturesGrid, FeaturesSideRight, FeaturesSideLeft} from "@components/features";
import Price from "@components/price";
import Faq from "@components/faq";
import Newsletter from "@components/newsletter";
import Contact from "@components/contact";

function App() {
  return (
    <>
        <Header />
        <main className="main">
            <Hero />
            <Marquee />
            <FeaturesGrid />
            <FeaturesSideRight />
            <FeaturesSideLeft />
            <Price />
            <Faq />
            <Newsletter />
            <Contact />
        </main>
    </>
  )
}

export default App
