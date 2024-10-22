import {ModalContext} from "../context/ModalContext.jsx";
import {useContext} from "react";

export function useModal() {
    return useContext(ModalContext);
}