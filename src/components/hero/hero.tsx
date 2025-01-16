import {PrimaryButton, SecondaryButton} from "../ui/buttons/buttons.tsx";
import "./hero.scss";

export const Hero = () => {
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
                    <SecondaryButton className="hero__primary-button">Learn more</SecondaryButton>
                    <PrimaryButton className="hero__secondary-button">See pricing</PrimaryButton>
                </div>
            </div>

            <div className="hero__image-container">
                <img className="hero__image" src="/hero.png" width="1392" height="1052" alt="Intro image" />
            </div>
        </section>
    )
}