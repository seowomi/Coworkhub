import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import getImg from "../utils/images.js";

export default function CoworkingCard({coworking}) {

    // coworking: {picture, name, description, address, price, type}

    const [imgSrc, setImgSrc] = useState("");
    const handleImgError = () => {
        setImgSrc('/src/assets/content/pictures/placeholder.svg')
    }

    const coworkingCardId = coworking.id
    const navigate = useNavigate();

    useEffect( () => {
        getImg(coworking.picture, setImgSrc)
    }, [])

    return (
        <div className="coworking__card">
            <img className="coworking__card-picture" src={imgSrc} onError={handleImgError} alt="Coworkings picture"/>
            <div className="coworking__card-wrap">
                <div className="coworking__card-info">
                    <div className="coworking__card-title">{coworking.name}</div>
                    {/*<div className="coworking__card-description">{coworking.description}</div>*/}
                    <div className="coworking__card-address">{coworking.address}</div>
                </div>
                <div className="coworking__card-footer">
                    <div className="coworking__card-price">{coworking.price} руб / {coworking.type}</div>
                </div>
            </div>
            <button className="coworking__card-button" onClick={ () => {
                navigate(`${coworkingCardId}`)
            }}>Подробнее</button>
        </div>
    )
}