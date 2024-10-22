import {createContext, useState} from "react";

export const ModalContext = createContext({
    isActive: false,
    setIsActive: null,
    modal: '',
    setModal: null,
})

export const ModalProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    const [modal, setModal] = useState('')

    return (
        <ModalContext.Provider value={{
            isActive, setIsActive,
            modal, setModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}