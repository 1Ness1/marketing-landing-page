import {EmailIcon, TelIcon, AddressIcon} from "@components/ui/icons/icons.tsx";
import "./Contact.scss";
import Button from "@components/ui/buttons";

const Contact = () => {
    return (
        <section className="contact container">
            <div className="contact__container">
                <div className="contact__title-container">
                    <h2 className="contact__title">Talk to our team</h2>
                    <p className="contact__description">We're committed to delivering the support you require to make your experience as smooth as
                        possible.</p>
                </div>

                <ul className="contact__list">
                    <li className="contact__element">
                        <AddressIcon/>
                        <address className="contact__element-label">123 Maple Street, Springfield, IL, USA</address>
                    </li>
                    <li className="contact__element">
                        <TelIcon/>
                        <a className="contact__element-label" href="tel:16505550198">+1 (650) 555-0198</a>
                    </li>
                    <li className="contact__element">
                        <EmailIcon/>
                        <a className="contact__element-label" href="mailto:hello@abstractly.com">hello@abstractly.com</a>
                    </li>
                </ul>
            </div>

            <form className="contact__form">
                <label className="contact__label-container contact__label-container--half">
                    <span className="contact__label">Name</span>
                    <input className="contact__input" placeholder="Your name" type="text"/>
                </label>
                <label className="contact__label-container contact__label-container--half">
                    <span className="contact__label">Email</span>
                    <input className="contact__input" placeholder="example@example.com"
                           type="email"/>
                </label>

                <label className="contact__label-container">
                    <span className="contact__label">Message</span>
                    <textarea className="contact__input" cols={30} rows={10} placeholder="Write your message..."></textarea>
                </label>

                <Button className="contact__submit" variant="primary-button">Submit</Button>
            </form>
        </section>
    )
}

export default Contact;