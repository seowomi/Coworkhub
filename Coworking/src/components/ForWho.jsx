import {Container} from "react-bootstrap";
import ProgrammerPicture from "/src/assets/content/pictures/man.jpg"
import "./styles/for.scss"

export default function ForWho() {

    return(
        <div className="for__bg">
            <Container id="for_who">
                <div className="for__block">
                    <img className="for__picture" src={ProgrammerPicture} alt="Programmer picture"/>

                    <div className="for__text">
                        <div className="for__text-title">Кому подойдет работа в
                            коворкинге</div>
                        <div className="for__text-subtitle">Коворкинг подходит для фрилансеров, стартапов, студентов,
                            корпоративных сотрудников, предоставляя им гибкое рабочее пространство
                            и доступ к сообществу профессионалов.</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}