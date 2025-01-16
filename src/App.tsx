import "./App.scss";

import {Header} from "./components/header/header.tsx";
import {Hero} from "./components/hero/hero.tsx";
import {Marquee} from "./components/marquee/marquee.tsx";
import {FeaturesGrid, FeaturesSideRight, FeaturesSideLeft} from "./components/features/features.tsx";

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
        </main>
    </>
  )
}

export default App
