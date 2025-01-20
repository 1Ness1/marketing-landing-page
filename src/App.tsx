import "./App.scss";

import Header from "@components/header";
import Hero from "@components/hero";
import Marquee from "@components/marquee";
import {FeaturesGrid, FeaturesSideRight, FeaturesSideLeft} from "@components/features";
import Price from "@components/price";

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
        </main>
    </>
  )
}

export default App
