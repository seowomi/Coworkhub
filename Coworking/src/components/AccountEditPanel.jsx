import CoworkingPanelCard from "./CoworkingPanelCard.jsx";
import "./styles/account.scss"
import "./styles/coworking.scss"
import {useEffect, useState} from "react";
import EditPanel from "./EditPanel.jsx";
import axios from "axios";

export default function AccountEditPanel() {

    const [coworkings, setCoworkings] = useState([]);
    const [editCard, setEditCard] = useState({});

    const deleteCoworking = async (id) => {
        await axios.delete(`http://localhost:8081/api/coworking/deleteById/${id}`)
            .then( response => {
                if (response.status === 200) {
                    console.log(response.data);
                    getCoworkings()
                }
            })
            .catch( err => {
                console.log(err)
            })
    }

    const getCoworkings = async () => {
        await axios.get('http://localhost:8081/api/coworking/getFromUser')
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
        // console.log("test")
    }, [editCard]);

    return (
        <div className="container-fluid">
            <div className="account__coworkings">
                <div className="account__coworkings-list">
                    <div className="account__coworkings-title">Ваши добавленные коворкинги</div>
                    {coworkings.map((coworking, index) => (
                        <CoworkingPanelCard cardInfo={coworking} onClick={setEditCard} onDelete={deleteCoworking} key={index}/>
                    ))}
                    <button className="account__coworkings-edit-button account__coworkings-button"
                    onClick={() => {
                        setEditCard({
                            id: null,
                            owner: null,
                            name: null,
                            description: null,
                            address: null,
                            price: null,
                            picture: null
                        })
                    }}>Добавить</button>
                </div>
                <EditPanel current={editCard} setCurrent={setEditCard}/>
                {/*{(Object.keys(editCard).length === 0) ? <div/> : <EditPanel current={editCard}/>}*/}
            </div>

        </div>
    )
}