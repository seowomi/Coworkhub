import "./styles/panel.scss"
import "./styles/coworking.scss"
import {CircleX} from 'lucide-react'

export default function CoworkingPanelCard({cardInfo, onClick, onDelete}) {


    return (
        <div className="panel__card">
            <div className="panel__card-block">
                <div className="coworking__card-title">{cardInfo.name}</div>
                <button className="panel__button-close" onClick={() => {
                    onDelete(cardInfo.id)
                }}><CircleX/></button>
            </div>
            <div className="panel__card-block">
                <div className="coworking__card-address">{cardInfo.address}</div>
                <div className="coworking__card-price">{cardInfo.price} / {cardInfo.type}</div>
            </div>
            <button className="coworking__card-button panel__card-button" onClick={() => {
                onClick(cardInfo)
            }}>Редактировать</button>
        </div>
    )
}