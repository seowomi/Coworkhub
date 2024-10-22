import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Account() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const getCurrentUser = async () => {
        await axios.get("http://localhost:8081/api/user/getById")
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCurrentUser().then()
    }, [])

    return (
        <Container>
            <div className="account__profile">
                <div className="account__profile-left">
                    <img className="account__profile-picture" src="/src/assets/content/pictures/placeholder.svg"
                         alt="User image"/>
                    <input type="file" className="account__coworkings-edit-button" disabled={true}/>
                </div>
                <div className="account__profile-right">
                    <div className="account__profile-info">
                        <div className="account__profile-info-text">ФИО: {user.username}</div>
                        <div className="account__profile-info-text">Почта: {user.email}</div>
                    </div>
                    <button className="account__coworkings-edit-button" onClick={() => {
                        navigate("edit")
                    }}>Управление добавленными коворкингами
                    </button>
                </div>
            </div>
        </Container>
    )
}