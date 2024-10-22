import Header from "../components/Header.jsx";
import AccountEditPanel from "../components/AccountEditPanel.jsx";
import Footer from "../components/Footer.jsx";

export default function EditCoworkings() {

    return(
        <>
            <Header inputLinks={[{href:"/coworkings", name:"Коворкинги"}, {href: "#contacts", name: "Контакты"}]} />
            <main>
                <AccountEditPanel />
            </main>
            <Footer />
        </>
    )
}