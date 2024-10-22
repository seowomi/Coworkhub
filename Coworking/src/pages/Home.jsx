import Header from "../components/Header.jsx";
import Info from "../components/Info.jsx";
import ForWho from "../components/ForWho.jsx";
import Features from "../components/Features.jsx";
import Price from "../components/Price.jsx";
import Footer from "../components/Footer.jsx";
import {ModalManager} from "../components/modals/ModalManager.jsx";

export default function Home() {

    return (
        <>
            <Header />
            <main>
                <Info />
                <ForWho />
                <Features />
                <Price />
            </main>
            <Footer />
            <ModalManager />
        </>
    )
}