import Header from "../components/Header.jsx";
import CoworkingList from "../components/CoworkingList.jsx";
import Footer from "../components/Footer.jsx";
import {ModalManager} from "../components/modals/ModalManager.jsx";

export default function Coworkings() {

    return(
        <>
            <Header inputLinks={[{href: "#contacts", name: "Контакты"}]}/>
            <main>
                <CoworkingList />
            </main>
            <Footer />
            <ModalManager />
        </>
    )
}