import Header from "../components/Header.jsx";
import CoworkingById from "../components/CoworkingById.jsx";
import Footer from "../components/Footer.jsx";
import {ModalManager} from "../components/modals/ModalManager.jsx";

export default function Coworking() {

    return(
        <>
            <Header inputLinks={[{href:"/coworkings", name:"Коворкинги"}, {href: "#contacts", name: "Контакты"}]}/>
            <main>
                <CoworkingById />
            </main>
            <Footer />
            <ModalManager />
        </>
    )
}