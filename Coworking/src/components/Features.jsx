import {Container} from "react-bootstrap";
import FeatureCard from "./FeatureCard.jsx"
import "./styles/features.scss"

import WiFiPicture from "/src/assets/content/info/wifi.svg"
import LaptopPicture from "/src/assets/content/info/laptop.svg"
import StarPicture from "/src/assets/content/info/star.svg"
import SubstractPicture from "/src/assets/content/info/substract.svg"
import CategoryPicture from "/src/assets/content/info/category.svg"
import BaloonPicture from "/src/assets/content/info/balloon.svg"


export default function Features() {

    return(
        <div className="features__bg">
            <Container id="features">
                <div className="features__block">
                    <div className="features__title">Что вы получите?</div>
                    <div className="features__cards">
                        <FeatureCard picture={WiFiPicture} name="Безлимитный интернет"/>
                        <FeatureCard picture={LaptopPicture} name="Оборудованные комнаты"/>
                        <FeatureCard picture={StarPicture} name="Личные шкафы для вещей"/>
                        <FeatureCard picture={SubstractPicture} name="Услуги курьера"/>
                        <FeatureCard picture={CategoryPicture} name="Кухня"/>
                        <FeatureCard picture={BaloonPicture} name="Вода, чай, кофе"/>
                    </div>
                </div>
            </Container>
        </div>

    )
}