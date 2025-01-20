import Button from "@components/ui/buttons";
import Checked from "@/assets/icons/checked.svg";
import "./Price.scss";

const Price = () => {
    return (
        <section className="price container">
            <h2 className="visually-hidden">Price section</h2>

            <div className="price__container">
                <div className="price__title-container">
                    <p className="price__subtitle">Pricing tears</p>
                    <h3 className="price__title">Fit for all your needs</h3>
                    <p className="price__description">Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.</p>
                </div>

                    <div className="price__buttons-container">
                        <Button variant="secondary-button">Monthly</Button>
                        <Button className="disabled" variant="secondary-button">Annually</Button>
                    </div>

            </div>

            <ul className="price__list">
                <li className="price__element">
                    <h4>Basic Plan</h4>
                    <p>Access to a curated selection of abstract images</p>

                    <p>
                        <span>$9.99</span>
                        <span>/ month</span>
                    </p>
                    <p>Billed monthly</p>

                    <ul>
                        <li>
                            <img  src={Checked} alt="Chcked icon" width="24" height="24"/>
                            <p>Standard quality images</p>
                        </li>
                        <li>
                            <img src={Checked} alt="Chcked icon" width="24" height="24"/>
                            <p>Limited to personal use</p>
                        </li>
                        <li>
                            <img src={Checked} alt="Chcked icon" width="24" height="24"/>
                            <p>Email support</p>
                        </li>
                    </ul>
                </li>
            </ul>

            <Button variant="secondary-button">Buy now</Button>
        </section>
    )
}

export default Price;