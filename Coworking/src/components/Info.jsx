import {Container} from "react-bootstrap";
import "./styles/info.scss"
import {useNavigate} from "react-router-dom";

export default function Info() {
    const navigate = useNavigate();
    return(
        <div className="info__background">
            <Container>
                <div className="info__block">
                    <div className="info__block-text">
                        <div className="info__block-text-title">
                            Аренда <span>помещения</span>
                        </div>
                        <div className="info__block-text-subtitle">в коворкинге</div>
                    </div>
                    <button className="info__block-button" onClick={() => navigate("coworkings")}>Узнать больше</button>
                </div>
            </Container>
        </div>
    )
}