import {SignIn} from "./SignIn.jsx";
import {useModal} from "../../hooks/useModal.js";
import {SignUp} from "./SignUp.jsx";

export function ModalManager() {
    const {modal} = useModal();
    return (
        <>
            <SignIn open={modal === 'signIn'} />
            <SignUp open={modal === 'signUp'} />
        </>
    )
}