import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "/src/assets/logo/header-logo.svg"
import search from "/src/assets/icons/search.png"
import "./styles/header.scss"
import {useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {useModal} from "../hooks/useModal.js";
import {openModal} from "../utils/modal.js";
import axios from "axios";

export default function Header({inputLinks}) {
    const {setIsActive, setModal} = useModal();

    const [user, setUser] = useState({})
    const [links, setLinks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        isAuth().then()
        if (!inputLinks) {
            setLinks([{href: "/coworkings", name: "Коворкинги"},
                {href: "#for_who", name: "Для кого"},
                {href: "#features", name: "Преимущества"},
                {href: "#contacts", name: "Контакты"}]);
        } else {
            setLinks(inputLinks);
        }
    }, [])

    const isAuth = async () => {
        let result = false
        await axios.get("http://localhost:8081/api/user/getById")
            .then(response => {
                if (response.status === 200) {
                    // console.log(response.data)
                    setUser(response.data)
                    result = true
                }
            })
            .catch(err => {
                if (err.response && err.response.status !== 401) {
                    console.log(err)
                }
            });
        return result
    }

    const SignInButton = async () => {
        if (!await isAuth()) {
            openModal(setIsActive, setModal, "signIn")
        } else {
            navigate("/profile", {replace: true,})
        }
    }

    const logout = async () => {
        await axios.post('http://localhost:8081/api/user/logout')
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    setUser({})
                    navigate("/", {replace: true})
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="header__background">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((link, index) => (
                            <Nav.Link className="header__link" href={link.href} key={index}>{link.name}</Nav.Link>
                        ))}
                    </Nav>
                    <button className="header__button"
                            onClick={() => {
                                SignInButton().then()
                            }}>
                        {Object.keys(user).length === 0 ? "Войти" : user.username}
                    </button>
                    {Object.keys(user).length !== 0 && user.username !== "" ?
                        <button className="header__button" onClick={() => logout()}>Выйти</button> : <></>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}