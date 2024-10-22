import {useParams} from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import getImg from "/src/utils/images.js"
import "./styles/coworking.scss"

export default function CoworkingById() {

    const {id} = useParams()
    const [coworking, setCoworking] = useState(Object);
    const [imgSrc, setImgSrc] = useState("/src/assets/content/pictures/placeholder.svg");

    const handlePictureError = () => {
        setImgSrc("/src/assets/content/pictures/placeholder.svg");
    }

    const getCoworking = async () => {
        await axios.get(`http://localhost:8081/api/coworking/getById/${id}`)
            .then(response => {
                if (response.status === 200) {
                    // console.log(response.data)
                    setCoworking(response.data)
                    getImg(response.data.picture, setImgSrc)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCoworking().then()
    }, [])

    return (
        <Container>
            <div className="coworking">
                <div className="coworking__top">
                    <img className="coworking__picture" src={imgSrc} onError={handlePictureError} alt="coworking picture"/>
                    <div className="coworking__info">
                        <div className="coworking__info-main">
                            <div className="coworking__info-name">{coworking.name}</div>
                            <div className="coworking__info-address">{coworking.address}</div>
                        </div>
                        <div className="coworking__info-price">{coworking.price} / {coworking.type}</div>
                    </div>
                </div>
                <div className="coworking__description">
                    <div className="coworking__description-title">Описание:</div>
                    {coworking.description}
                </div>
            </div>
        </Container>
    )
}