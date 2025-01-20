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
                    <div className="price__element-container">
                        <div className="price__element-title-container">
                            <h4 className="price__element-title">Basic Plan</h4>
                            <p className="price__element-description">Access to a curated selection of abstract images</p>
                        </div>

                        <p className="price__value-container">
                            <p>
                                <span className="price__value">$9.99</span>
                                <span className="price__time">/ month</span>
                            </p>

                            <p className="price__value-description">Billed monthly</p>
                        </p>


                        <ul className="price__sublist">
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24" height="24"/>
                                <p className="price__sublist-description">Standard quality images</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24" height="24"/>
                                <p className="price__sublist-description">Limited to personal use</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24" height="24"/>
                                <p className="price__sublist-description">Email support</p>
                            </li>
                        </ul>
                        <Button className="price__button" variant="secondary-button">Buy now</Button>
                    </div>
                </li>

                <li className="price__element price__element--active">
                    <div className="price__label">
                        <span className="price__label-text">Most Popular</span>
                    </div>
                    <div className="price__element-container">

                        <div className="price__element-title-container">
                            <h4 className="price__element-title">Standard Plan</h4>
                            <p className="price__element-description">Next-level Integrations, priced economically</p>
                        </div>

                        <p className="price__value-container">
                            <p>
                                <span className="price__value">$9.99</span>
                                <span className="price__time">/ month</span>
                            </p>

                            <p className="price__value-description">Billed monthly</p>
                        </p>


                        <ul className="price__sublist price__sublist">
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Expanded library with more diverse abstract
                                    images</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">High-resolution images available</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Suitable for commercial use</p>
                            </li>

                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Priority email support</p>
                            </li>

                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Advanced analytics</p>
                            </li>
                        </ul>
                        <Button className="price__button" variant="primary-button">Buy now</Button>
                    </div>
                </li>

                <li className="price__element">
                    <div className="price__element-container">
                        <div className="price__element-title-container">
                            <h4 className="price__element-title">Premium Plan</h4>
                            <p className="price__element-description">Experience limitless living for power users</p>
                        </div>

                        <p className="price__value-container">
                            <p>
                                <span className="price__value">$29.99</span>
                                <span className="price__time">/ month</span>
                            </p>

                            <p className="price__value-description">Billed monthly</p>
                        </p>


                        <ul className="price__sublist">
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Full access to the entire image library,
                                    including exclusive content</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Highest quality images, including premium
                                    collections</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Commercial and resale rights</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Dedicated customer support line</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">24/7 support response time</p>
                            </li>
                            <li className="price__sublist-element">
                                <img className="price__checkbox" src={Checked} alt="Chcked icon" width="24"
                                     height="24"/>
                                <p className="price__sublist-description">Advanced analytics and insights</p>
                            </li>
                        </ul>
                        <Button className="price__button" variant="secondary-button">Buy now</Button>
                    </div>
                </li>
            </ul>


        </section>
    )
}

export default Price;