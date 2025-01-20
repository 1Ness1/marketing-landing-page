import "./Marquee.scss";

import wanNain from "@/assets/marquee/wan-nain.svg";
import airCar from "@/assets/marquee/air-car.svg";
import diamond from "@/assets/marquee/diamond.svg";
import makroHard from "@/assets/marquee/makro-hard.svg";
import robinWood from "@/assets/marquee/robin-wood.svg";
import swapdo from "@/assets/marquee/swapdo.svg";
import wirang from "@/assets/marquee/wirang.svg";

 const Marquee = () => {
    return (
        <section className="marquee container">
            <h2 className="visually-hidden">Our collaborators</h2>
            <p className="marquee__title">Used by teams that you love</p>

            <ul className="marquee__list">
                <li className="marquee__element">
                    <img className="marquee__img" src={wanNain} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={airCar} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={diamond} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={makroHard} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={robinWood} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={swapdo} alt="Brand logo" width="170" height="48"/>
                </li>
                <li className="marquee__element">
                    <img className="marquee__img" src={wirang} alt="Brand logo" width="170" height="48"/>
                </li>
            </ul>
        </section>
    )
}

export default Marquee;