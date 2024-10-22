import {Container} from "react-bootstrap";
import "./styles/coworking.scss"
import CoworkingCard from "./CoworkingCard.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

export default function CoworkingList() {

    const [coworkings, setCoworkings] = useState([]);

    const getCoworkings = async () => {
        await axios.get('http://localhost:8081/api/coworking/get', {withCredentials: true})
            .then(response => {
                if (response.status === 200) {
                    // console.log(response.data)
                    setCoworkings(response.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCoworkings().then()
    }, [])

    return (
        <Container>
            <div className="coworking__text">
                <div className="coworking__text-title">КОВОРКИНГИ</div>
                <div className="coworking__text-subtitle">Выбери подходящий тебе коворкинг из большого списка!</div>
            </div>
            <div className="coworking__list">
                {coworkings.map((coworking, index) => (
                    <CoworkingCard coworking={coworking} key={index} />
                ))}
            </div>
        </Container>
    )
}