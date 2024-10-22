import Header from "../components/Header.jsx";
import AccountEditPanel from "../components/AccountEditPanel.jsx";
import Footer from "../components/Footer.jsx";
import Account from "../components/Account.jsx";

export default function Profile() {

    return(
        <>
            <Header page={"profile"} inputLinks={[{href:"/coworkings", name:"Коворкинги"}, {href: "#contacts", name: "Контакты"}]} />
            <main>
                <Account />
            </main>
            <Footer />
        </>
    )
}