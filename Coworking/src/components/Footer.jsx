import {Container} from "react-bootstrap";
import Logo from "/src/assets/logo/footer.svg"
import "./styles/footer.scss"

export default function Footer() {

    return(
        <div className="footer__bg">
            <Container id="contacts">
                <div className="footer__block">
                    <div className="footer__text">
                        <div className="footer__text-title">СВЯЗАТЬСЯ С НАМИ</div>
                        <div className="footer__text-subtitle">
                            Отзывы клиентов - это живая обратная связь, которая помогает нам совершенствовать
                            услуги коворкинга. Ваши мнения - наша ценность!
                        </div>
                    </div>
                    <img src={Logo} alt="Logo" />
                    <div className="footer__text footer__text-contacts">
                        +47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310 Kabelvag, Norway
                    </div>
                </div>
            </Container>
        </div>
    )
}