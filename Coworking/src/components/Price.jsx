import {Container} from "react-bootstrap";
import CoworkingPicture from "/src/assets/content/pictures/cowork.jpg"
import "./styles/price.scss"
import {useNavigate} from "react-router-dom";

export default function Price() {
    const navigate = useNavigate();
    return(
        <Container>
            <div className="price__block">
                <div className="price__text">
                    <div className="price__text-title">Сколько стоит рабочее место?</div>
                    <div className="price__text-subtitle">
                        Стоимость рабочего места в коворкинге адаптирована под ваши потребности.
                        Мы предлагаем гибкие тарифы, чтобы каждый мог выбрать оптимальное решение для себя.
                    </div>
                    <button className="price__button" onClick={() => navigate("coworkings")}>Узнать больше</button>
                </div>
                <img className="price__picture" src={CoworkingPicture} alt="Coworkings picture" />
            </div>
        </Container>
    )
}