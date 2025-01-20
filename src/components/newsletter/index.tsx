import "./Newsletter.scss";
import Checked from "@/assets/icons/checked.svg";
import Button from "@components/ui/buttons";

const Newsletter = () => {
    return (
        <section className="newsletter container">
            <h2 className="visually-hidden">newsletter</h2>

            <div className="newsletter__container">
                <p className="newsletter__title">Get the finest curated abstracts delivered weekly to your inbox</p>

                <ul className="newsletter__list">
                    <li className="newsletter__element">
                        <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                             height="24"/>
                        <p className="newsletter__element-description">Exclusive access to new abstract images and
                            collections</p>
                    </li>
                    <li className="newsletter__element">
                        <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                             height="24"/>
                        <p className="newsletter__element-description">Unlock special promotions only for subscribers</p>
                    </li>
                    <li className="newsletter__element">
                        <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                             height="24"/>
                        <p className="newsletter__element-description">Regular doses of artistic inspiration</p>
                    </li>
                </ul>

                <form className="newsletter__form" action="#">
                    <div className="newsletter__form-container">
                        <input className="newsletter__input" type="email"/>
                        <Button className="newsletter__submit" variant="primary-button">Subscribe</Button>
                    </div>
                    <p className="newsletter__form-label">We only send you the best! No spam.</p>
                </form>
            </div>

            <div className="newsletter__image-container">
                <img src="/newsletter.png" width="1184" height="1216" alt="Newsletter image"/>
            </div>
        </section>
    )
}

export default Newsletter;