import Button from "@components/ui/buttons";
import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero container">
            <h1 className="visually-hidden">Very expensive images for every one.</h1>

            <div className="hero__content">
                <div className="hero__title-container">
                    <h2 className="hero__title">Well crafted abstract images</h2>
                    <p className="hero__description">High quality abstract images for your projects, wallpaper and
                        presentations.</p>
                </div>

                <div className="hero__button-container">
                    <Button className="hero__primary-button" variant="secondary-button">Learn more</Button>
                    <Button className="hero__secondary-button" variant="primary-button">See pricing</Button>
                </div>
            </div>

            <div className="hero__image-container">
                <img className="hero__image" src="/hero.png" width="1392" height="1052" alt="Intro image" />
            </div>
        </section>
    )
}

export default Hero;