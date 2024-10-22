import {Modal} from './Modal.jsx'
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useModal} from "../../hooks/useModal.js";
import {checkData} from "../../utils/data.js";

export function SignIn({open = false}) {
    const navigate = useNavigate();
    const {setIsActive, setModal} = useModal();

    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const submitHandler = async data => {
        if (!checkData(data)) {
            alert("Введите корректные данные!");
            return
        }
        await axios.post("http://localhost:8081/api/user/login", data)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                    navigate("/profile")
                    setIsActive(false)
                    reset()
                } else {
                    alert("Неправильная пара логин/пароль")
                }
            })
            .catch( err => {
                console.log(err)
                alert(err)
            })
    }

    return (
        <Modal open={open}>
            <form className='modal__form' onSubmit={handleSubmit(submitHandler)}>
                <input  {...register('email')} className='modal__input' placeholder='E-mail' type='email'
                        maxLength={45}/>
                <input {...register('password')} className='modal__input' placeholder='Пароль' type='password'/>
                <button className='modal__button' type='submit'>Авторизоваться</button>
                <button className='modal__button-register' type="button" onClick={() => {
                    setModal("signUp")
                }}>Зарегистрироваться
                </button>
            </form>
        </Modal>
    )
}