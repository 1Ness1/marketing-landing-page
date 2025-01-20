import faq from "@/assets/icons/faq.svg";
import "./Faq.scss";
import Button from "@components/ui/buttons";

const Faq = () => {
    return (
        <section className="faq container">
            <div className="faq__title-container">
                <h2 className="faq__title">Frequently asked questions</h2>
                <p className="faq__description">Choose any questions you need</p>
            </div>

            <div className="faq__container">
                <ul className="faq__list">
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>What types of images are available on your platform?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">Our platform offers a diverse range of abstract images to
                            suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we
                            strive to provide a wide selection to cater to different tastes.</p>
                    </li>
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>How can I access and download images from your platform?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">Accessing and downloading images from our platform is
                            simple. Upon signing up and logging in, users can browse through our curated collection and
                            download their chosen images directly to their devices with just a few clicks.</p>
                    </li>
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>Do you offer free images, or is there a subscription required?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">We provide both free and premium images on our platform.
                            Users can explore a selection of free images without any subscription. For access to our entire
                            library and additional features, we offer subscription plans tailored to different user
                            needs.</p>
                    </li>
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>What payment methods do you accept for subscriptions?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">We accept a variety of payment methods, including
                            credit/debit cards and online payment gateways, to make the subscription process convenient for
                            our users.</p>
                    </li>
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>Can I cancel or modify my subscription at any time?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">Yes, absolutely. You have the flexibility to cancel or
                            modify your subscription at any time through your account settings. Changes will take effect
                            immediately, ensuring you have full control over your subscription preferences.</p>
                    </li>
                    <li className="faq__element">
                        <button type="button" className="faq__element-trigger">
                            <span>How frequently do you update your image collection?</span>
                            <img src={faq} alt="faq icon" width="20" height="20"/>
                        </button>
                        <p className="faq__element-description">We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.</p>
                    </li>
                </ul>

                <div className="faq__notification">
                    <div className="faq__notification-container">
                        <h3 className="faq__notification-title">Can’t find the answer you’re looking for?</h3>
                        <p className="faq__notification-description">Reach out to our <span>customer support</span> team.</p>
                    </div>
                    <Button className="faq__notification-button" variant="primary-button">Get in touch</Button>
                </div>
            </div>
        </section>
    )
}

export default Faq;