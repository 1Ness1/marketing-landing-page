import cn from "classnames";
import {
    InfiniteDownloadIcon,
    PurelyHandcraftedIcon,
    UnderLicenceIcon,
    CancelationIcon,
    EmpoweringIcon,
    NoLimitationIcon,
    HdIcon, WaterIcon, OrientationIcon, ConvenienceIcon, RoyaltyIcon, FasterDownloadsIcon
} from "../ui/icons/icons.tsx";
import "./features.scss";
import {ReactNode} from "react";

type FeaturesSideProps = {
    direction: "left" | "right";
    children: ReactNode;
}

//@ts-expect-error: it's not))
export const FeaturesSide = ({direction, children}: FeaturesSideProps): ReactNode => (
    <section className={cn("features features-side container", direction)}>
        {children}
    </section>
)

export const FeaturesGrid = () => {
    return (
        <div className="features features-grid container">
            <div className="features__text-container">
                <p className="features__subtitle">Premium abstract images</p>
                <h2 className="features__title">Easy access to top quality images</h2>
                <p className="features__description">In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
            </div>

            <ul className="features-grid__container">
                <li className="features-grid__element">
                    <InfiniteDownloadIcon />
                    <div className="features__content-container">
                        <h3 className="features__element-title">Infinite Download</h3>
                        <p className="features__element-description">Once you subscribe to our plans, they're all
                            yours. Download as many as you want and use them for work presentations, wallpapers, and much
                            more.</p>
                    </div>
                </li>
                <li className="features-grid__element">
                    <PurelyHandcraftedIcon/>
                    <div className="features__content-container">
                        <h3 className="features__element-title">Purely Handcrafted</h3>
                        <p className="features__element-description"> No AI, no generic images. Crafted from various
                            chemicals, fabrics, clouds, or even particles as small as dust.</p>
                    </div>
                </li>
                <li className="features-grid__element">
                    <UnderLicenceIcon/>
                    <div className="features__content-container">
                        <h3 className="features__element-title">Infinite Download</h3>
                        <p className="features__element-description">Once you subscribe to our plans, they're all
                            yours. Download as many as you want and use them for work presentations, wallpapers, and
                            much
                            more.</p>
                    </div>
                </li>
                <li className="features-grid__element">
                    <CancelationIcon/>
                    <div className="features__content-container">
                        <h3 className="features__element-title">Infinite Download</h3>
                        <p className="features__element-description">Once you subscribe to our plans, they're all
                            yours. Download as many as you want and use them for work presentations, wallpapers, and
                            much
                            more.</p>
                    </div>
                </li>
                <li className="features-grid__element">
                    <EmpoweringIcon/>
                    <div className="features__content-container">
                        <h3 className="features__element-title">Infinite Download</h3>
                        <p className="features__element-description">Once you subscribe to our plans, they're all
                            yours. Download as many as you want and use them for work presentations, wallpapers, and
                            much
                            more.</p>
                    </div>
                </li>
                <li className="features-grid__element">
                    <NoLimitationIcon/>
                    <div className="features__content-container">
                        <h3 className="features__element-title">Infinite Download</h3>
                        <p className="features__element-description">Once you subscribe to our plans, they're all
                            yours. Download as many as you want and use them for work presentations, wallpapers, and
                            much
                            more.</p>
                    </div>
                </li>
            </ul>
        </div>
)
}

export const FeaturesSideRight = () => {
    return (
        <FeaturesSide direction="right">
            <div className="features__text-container">
                <p className="features__subtitle">High quality images</p>
                <h2 className="features__title">For designers, by designers</h2>
                <p className="features__description">Unleash boundless creativity with a large repository of images optimized for designers</p>
            </div>

            <div className="features-side__container">
                <ul className="features-side__list">
                    <li className="features-side__element">
                        <HdIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">5K resolution support</h3>
                            <p className="features__element-description">All images boast a minimum resolution of
                                5K, ensuring crisp, crystal-clear quality.</p>
                        </div>
                    </li>
                    <li className="features-side__element">
                        <WaterIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">From water to glass</h3>
                            <p className="features__element-description">We offer a wide array of abstractions,
                                ranging from water to glass, and encompassing various styles including 3D and
                                vector.</p>
                        </div>
                    </li>
                    <li className="features-side__element">
                        <OrientationIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">Portrait or landscape</h3>
                            <p className="features__element-description">Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.</p>
                        </div>
                    </li>
                </ul>

                <div className="features-side__image-container">
                    <img className="features-side__img"  src="/features-right.jpg" alt="Colored cube on the picture" width="1184" height="788"/>
                </div>
            </div>
        </FeaturesSide>
    )
}


export const FeaturesSideLeft = () => {
    return (
        <FeaturesSide direction="left">
            <div className="features__text-container">
                <p className="features__subtitle">Best-in-class support</p>
                <h2 className="features__title">Convenience and licensing that empowers</h2>
                <p className="features__description">In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.</p>
            </div>
            <div className="features-side__container">
                <ul className="features-side__list">
                    <li className="features-side__element">
                        <FasterDownloadsIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">Faster downloads</h3>
                            <p className="features__element-description">Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.</p>
                        </div>
                    </li>
                    <li className="features-side__element">
                        <ConvenienceIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">Convenience for teams</h3>
                            <p className="features__element-description">Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.</p>
                        </div>
                    </li>
                    <li className="features-side__element">
                        <RoyaltyIcon/>
                        <div className="features__content-container">
                            <h3 className="features__element-title">Royalty-free licensing</h3>
                            <p className="features__element-description">Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.</p>
                        </div>
                    </li>
                </ul>

                <div className="features-side__image-container">
                    <img className="features-side__img"  src="/features-left.jpg" alt="Colored cube on the picture" width="1184" height="788"/>
                </div>
            </div>
        </FeaturesSide>
    )
}